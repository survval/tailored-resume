const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

function loadLocalEnv() {
  const envPath = path.join(__dirname, "..", ".env");
  if (!fs.existsSync(envPath)) return;

  const lines = fs.readFileSync(envPath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;

    const separatorIndex = trimmed.indexOf("=");
    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (key && !process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadLocalEnv();

const db = require("./database");

const rootDir = __dirname;
const port = Number(process.env.PORT || 5178);
const model = process.env.OPENAI_MODEL || "gpt-5.5";
const maxRequestBodyBytes = 5_000_000;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function readRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (Buffer.byteLength(body, "utf8") > maxRequestBodyBytes) {
        reject(new Error("Request body is too large. Please use a smaller or compressed photo."));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function extractOutputText(apiResponse) {
  if (typeof apiResponse.output_text === "string") {
    return apiResponse.output_text;
  }

  const contentItems = apiResponse.output?.flatMap((item) => item.content || []) || [];
  const textItem = contentItems.find((item) => item.type === "output_text" && item.text);
  return textItem?.text || "";
}

async function handleTailor(request, response) {
  if (!process.env.OPENAI_API_KEY) {
    sendJson(response, 400, {
      error: "OPENAI_API_KEY is not configured. Start the server with an API key to use AI tailoring.",
    });
    return;
  }

  const body = JSON.parse(await readRequestBody(request));
  const payload = {
    model,
    reasoning: { effort: "low" },
    text: {
      verbosity: "low",
      format: {
        type: "json_schema",
        name: "tailored_resume_section",
        strict: true,
        schema: {
          type: "object",
          additionalProperties: false,
          properties: {
            content: {
              type: "string",
              description: "The tailored resume section text only.",
            },
            rationale: {
              type: "string",
              description: "Short explanation of what changed and why.",
            },
            matchedKeywords: {
              type: "array",
              items: { type: "string" },
              description: "Job keywords reflected in the tailored section.",
            },
          },
          required: ["content", "rationale", "matchedKeywords"],
        },
      },
    },
    input: [
      {
        role: "system",
        content:
          "You are a senior resume tailoring assistant for software engineering roles in Germany and international markets. Tailor only truthful content from the provided resume data. Do not invent employers, dates, degrees, certifications, or technologies. Keep the wording ATS-friendly, concise, and aligned to the selected profile and template length.",
      },
      {
        role: "user",
        content: JSON.stringify({
          task: "Tailor one resume section for this job application.",
          sectionKey: body.sectionKey,
          selectedProfile: body.profile,
          template: body.template,
          resumeLanguage: body.resumeLanguage || "de",
          action: body.action,
          jobDescription: body.jobDescription,
          detectedKeywords: body.detectedKeywords,
          masterResumeSection: body.masterResumeSection,
          currentSectionText: body.currentSectionText,
          constraints: [
            "Return only JSON matching the schema.",
            "Preserve factual accuracy.",
            "Keep content suitable for a professional resume.",
            "Avoid exaggeration.",
            "Write the section in the selected resumeLanguage. Use German for 'de' and English for 'en'.",
            "If the section is skills, return comma-separated skills only.",
            "If the section is projects, preserve project boundaries and bullet format.",
          ],
        }),
      },
    ],
  };

  const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const apiResponse = await openaiResponse.json();

  if (!openaiResponse.ok) {
    sendJson(response, openaiResponse.status, {
      error: apiResponse.error?.message || "OpenAI request failed.",
    });
    return;
  }

  const outputText = extractOutputText(apiResponse);
  const parsed = JSON.parse(outputText);
  sendJson(response, 200, parsed);
}

async function handleCoverLetter(request, response) {
  if (!process.env.OPENAI_API_KEY) {
    sendJson(response, 400, { error: "OPENAI_API_KEY not configured." });
    return;
  }

  const body = JSON.parse(await readRequestBody(request));
  const isDe = (body.resumeLanguage || "de") === "de";

  const payload = {
    model,
    reasoning: { effort: "low" },
    text: {
      format: {
        type: "json_schema",
        name: "cover_letter",
        strict: true,
        schema: {
          type: "object",
          additionalProperties: false,
          properties: {
            subject: { type: "string" },
            salutation: { type: "string" },
            opening: { type: "string" },
            mainBody: { type: "string" },
            closing: { type: "string" },
          },
          required: ["subject", "salutation", "opening", "mainBody", "closing"],
        },
      },
    },
    input: [
      {
        role: "system",
        content: isDe
          ? "Du bist ein professioneller Bewerbungsassistent für IT-Stellen in Deutschland. Schreibe ein überzeugendes, formelles Anschreiben (Bewerbungsschreiben) auf Deutsch im Stil DIN 5008. Halte dich streng an die Fakten aus dem Lebenslauf. Erfinde keine Inhalte."
          : "You are a professional cover letter assistant for IT roles. Write a compelling, formal cover letter in English. Stick to facts from the resume. Do not invent content.",
      },
      {
        role: "user",
        content: JSON.stringify({
          jobDescription: body.jobDescription,
          profile: body.profile,
          resumeLanguage: body.resumeLanguage,
          personalName: body.personalName,
          jobTitle: body.jobTitle,
          masterSections: body.masterSections,
          detectedKeywords: body.detectedKeywords,
        }),
      },
    ],
  };

  const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const apiResponse = await openaiResponse.json();
  if (!openaiResponse.ok) {
    sendJson(response, openaiResponse.status, {
      error: apiResponse.error?.message || "OpenAI request failed.",
    });
    return;
  }

  const outputText = extractOutputText(apiResponse);
  sendJson(response, 200, JSON.parse(outputText));
}

function serveStatic(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const pathname = requestUrl.pathname === "/" ? "/index.html" : requestUrl.pathname;

  if (pathname === "/server.js" || pathname.startsWith("/.")) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  const resolvedPath = path.resolve(rootDir, `.${decodeURIComponent(pathname)}`);

  if (!resolvedPath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(resolvedPath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    const extension = path.extname(resolvedPath);
    response.writeHead(200, {
      "content-type": mimeTypes[extension] || "application/octet-stream",
      "cache-control": "no-store",
    });
    response.end(content);
  });
}

// ─── DB ROUTE HANDLERS ────────────────────────────────────────────────────────

function handleDb(request, response) {
  const url = new URL(request.url, `http://localhost`);
  const p = url.pathname;
  const method = request.method;

  // Personal details
  if (p === "/api/personal" && method === "GET") {
    return sendJson(response, 200, db.getPersonal());
  }
  if (p === "/api/personal" && method === "POST") {
    return readRequestBody(request).then((raw) => {
      sendJson(response, 200, db.savePersonal(JSON.parse(raw)));
    });
  }

  // Resume sections
  if (p === "/api/sections" && method === "GET") {
    const profile = url.searchParams.get("profile") || "fullstack";
    const lang = url.searchParams.get("language") || "de";
    return sendJson(response, 200, db.getSections(profile, lang));
  }
  if (p === "/api/sections" && method === "POST") {
    return readRequestBody(request).then((raw) => {
      const body = JSON.parse(raw);
      db.saveSections(body.profile_key, body.language, body.sections);
      sendJson(response, 200, { ok: true });
    });
  }

  // Job descriptions
  if (p === "/api/jobs" && method === "GET") {
    return sendJson(response, 200, db.listJobs());
  }
  if (p === "/api/jobs" && method === "POST") {
    return readRequestBody(request).then((raw) => {
      sendJson(response, 200, db.saveJob(JSON.parse(raw)));
    });
  }
  const jobMatch = p.match(/^\/api\/jobs\/(\d+)$/);
  if (jobMatch && method === "GET") {
    const row = db.getJob(Number(jobMatch[1]));
    return row ? sendJson(response, 200, row) : sendJson(response, 404, { error: "Not found" });
  }

  // Application versions (snapshots)
  if (p === "/api/applications" && method === "GET") {
    return sendJson(response, 200, db.listApplications());
  }
  if (p === "/api/applications" && method === "POST") {
    return readRequestBody(request).then((raw) => {
      sendJson(response, 200, db.saveApplication(JSON.parse(raw)));
    });
  }
  const appMatch = p.match(/^\/api\/applications\/(\d+)$/);
  if (appMatch && method === "GET") {
    const row = db.getApplication(Number(appMatch[1]));
    return row ? sendJson(response, 200, row) : sendJson(response, 404, { error: "Not found" });
  }

  // External AI content (paste from ChatGPT etc.)
  if (p === "/api/content" && method === "POST") {
    return readRequestBody(request).then((raw) => {
      const body = JSON.parse(raw);
      db.saveSections(body.profile_key || "external", body.language || "de", body.sections);
      sendJson(response, 200, { ok: true });
    });
  }

  // Saved full AI drafts pasted from ChatGPT/Claude/etc.
  if (p === "/api/ai-drafts" && method === "GET") {
    const profile = url.searchParams.get("profile") || "fullstack";
    const lang = url.searchParams.get("language") || "de";
    return sendJson(response, 200, db.getAiDraft(profile, lang));
  }
  if (p === "/api/ai-drafts" && method === "POST") {
    return readRequestBody(request).then((raw) => {
      sendJson(response, 200, db.saveAiDraft(JSON.parse(raw)));
    });
  }

  return null; // not a DB route
}

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === "POST" && request.url === "/api/tailor") {
      await handleTailor(request, response);
      return;
    }
    if (request.method === "POST" && request.url === "/api/cover-letter") {
      await handleCoverLetter(request, response);
      return;
    }

    // DB routes (GET + POST)
    const dbUrl = new URL(request.url, "http://localhost");
    if (dbUrl.pathname.startsWith("/api/")) {
      const handled = handleDb(request, response);
      if (handled !== null) return;
    }

    if (request.method === "GET") {
      serveStatic(request, response);
      return;
    }

    response.writeHead(405);
    response.end("Method not allowed");
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Unexpected server error." });
  }
});

server.listen(port, () => {
  console.log(`Tailored Resume Studio running at http://localhost:${port}`);
  console.log(`AI tailoring model: ${model}`);
  console.log(`Database: ${require("path").join(__dirname, "resume_studio.db")}`);
});
