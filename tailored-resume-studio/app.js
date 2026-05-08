const resumeData = {
  personal: {
    name: "Suresh Babu Guvvala",
    title: "Senior Fullstack-Entwickler",
    phone: "+49 000 000000",
    email: "suresh@example.com",
    location: "Deutschland",
    linkedin: "linkedin.com/in/suresh-babu-guvvala",
    github: "github.com/suresh",
    website: "portfolio.example.com",
    visa_type: "",
    nationality: "",
  },
  sections: {
    profile:
      "Senior Softwareentwickler mit fundierter Erfahrung in Backend, Frontend, Cloud-Integration und Enterprise-Anwendungsentwicklung. Erfahren in der Entwicklung skalierbarer Webanwendungen, der Zusammenarbeit mit cross-funktionalen Teams und der Umsetzung von Geschäftsanforderungen in robuste technische Lösungen.",
    skills:
      "Backend:\nJava (8-21), Spring, Spring Boot, Spring MVC, REST APIs, SOAP, Microservices\n\nEvent-Driven & Integration:\nKafka (Grundkenntnisse), Messaging-Patterns, REST-Clients, SOAP-Integrationen, OpenAPI/Swagger\n\nCloud & Container:\nAzure, AWS, Docker, Kubernetes, Azure Container Registry, Cloud-native Konzepte\n\nCI/CD & DevOps:\nAzure DevOps, Jenkins, GitHub, CI/CD Pipelines, Build- & Deployment-Automatisierung\n\nMonitoring & Observability:\nGrafana, Logging, Monitoring, Produktions-Debugging, Incident Management\n\nDatenbanken:\nPostgreSQL, Oracle, MongoDB, Redis, SQLite\n\nSecurity:\nKeycloak, OAuth2, OIDC, JWT, Spring Security, SSL-Zertifikatsmanagement\n\nFrontend:\nVue.js (2/3), React, TypeScript, JavaScript, PrimeFaces, JSF\n\nTools & Methoden:\nGit, Jira, Confluence, Agile (Scrum), IntelliJ, Eclipse, VS Code",
    projects:
      "Enterprise Platform Modernisierung | Senior Fullstack-Entwickler | 2022 - Heute\n- Konzeption und Umsetzung von Backend-APIs und Frontend-Modulen für geschäftskritische Workflows.\n- Verbesserung der Wartbarkeit durch modulare Architektur, wiederverwendbare Komponenten und optimierte Deployment-Prozesse.\n- Zusammenarbeit mit Product Ownern, QA und verteilten Entwicklungsteams.\n\nDigital Services Portal | Fullstack-Entwickler | 2019 - 2022\n- Entwicklung responsiver Benutzeroberflächen und REST-Integrationen für kundennahe Services.\n- Umsetzung rollenbasierter Workflows, Validierungen und Reporting-Funktionen.\n- Unterstützung von Releases, Produktionskorrekturen und Performance-Verbesserungen.",
    certifications:
      "Cloud-Grundlagen, Agile Delivery, Java/Spring Professional Training",
    education:
      "Bachelorabschluss in Informatik / Ingenieurwesen",
    languages: "Englisch: verhandlungssicher, Deutsch: A2-B1 / im Aufbau, Telugu: Muttersprache",
  },
};

const resumePresets = {
  de: resumeData,
  en: {
    personal: {
      ...resumeData.personal,
      title: "Senior Fullstack Engineer",
      location: "Germany",
    },
    sections: {
      profile:
        "Senior software engineer with strong experience across backend, frontend, cloud integration, and enterprise application delivery. Experienced in building scalable web applications, collaborating with cross-functional teams, and adapting solutions to business goals.",
      skills:
        "Java, Spring Boot, REST APIs, Microservices, SQL, PostgreSQL, Angular, React, TypeScript, JavaScript, HTML, CSS, Azure, AWS, Docker, CI/CD, Git, Agile, System Design, Team Leadership",
      projects:
        "Enterprise Platform Modernization | Senior Fullstack Engineer | 2022 - Present\n- Designed and delivered backend APIs and frontend modules for business-critical workflows.\n- Improved maintainability through modular architecture, reusable components, and better deployment practices.\n- Collaborated with product owners, QA, and distributed engineering teams.\n\nDigital Services Portal | Fullstack Developer | 2019 - 2022\n- Built responsive user interfaces and REST integrations for customer-facing services.\n- Implemented role-based workflows, validations, and reporting features.\n- Supported releases, production fixes, and performance improvements.",
      certifications:
        "Cloud fundamentals, Agile delivery, Java/Spring professional training",
      education:
        "Bachelor's degree in Computer Science / Engineering",
      languages: "English: Professional, German: Learning / A2-B1, Telugu: Native",
    },
  },
};

const sampleJobDescription = `Senior Fullstack Developer / Team Lead

We are looking for an experienced engineer to design and deliver modern web applications. The role requires Java, Spring Boot, REST APIs, microservices, Angular or React, TypeScript, SQL, cloud deployment, CI/CD, Docker, agile collaboration, mentoring developers, and strong communication with product owners. German language skills are an advantage.`;

const keywordGroups = {
  backend: ["java", "spring boot", "rest", "api", "microservices", "sql", "postgresql", "database", "hibernate", "kafka"],
  frontend: ["angular", "react", "typescript", "javascript", "html", "css", "responsive", "ui", "accessibility"],
  cloud: ["aws", "azure", "docker", "kubernetes", "ci/cd", "pipeline", "devops", "deployment"],
  lead: ["lead", "mentor", "stakeholder", "product owner", "agile", "scrum", "delivery", "communication"],
  architect: ["architecture", "system design", "scalable", "integration", "migration", "non-functional", "security"],
  language: ["german", "english", "deutsch"],
};

const profileConfig = {
  backend: {
    label: "Backend Engineer",
    focus: "Backend APIs, Spring Boot, microservices, data persistence, integration, and reliability.",
    title: "Senior Backend Engineer",
    titleDe: "Senior Backend-Entwickler",
    groups: ["backend", "cloud"],
  },
  frontend: {
    label: "Frontend Engineer",
    focus: "Frontend architecture, Angular/React, TypeScript, responsive UI, and user-facing delivery.",
    title: "Senior Frontend Engineer",
    titleDe: "Senior Frontend-Entwickler",
    groups: ["frontend", "lead"],
  },
  fullstack: {
    label: "Fullstack Engineer",
    focus: "Balanced fullstack delivery across backend APIs, frontend modules, cloud deployment, and ownership.",
    title: "Senior Fullstack Engineer",
    titleDe: "Senior Fullstack-Entwickler",
    groups: ["backend", "frontend", "cloud"],
  },
  lead: {
    label: "Team Lead",
    focus: "Technical leadership, mentoring, delivery coordination, stakeholder communication, and hands-on implementation.",
    title: "Senior Fullstack Engineer / Team Lead",
    titleDe: "Senior Fullstack-Entwickler / Team Lead",
    groups: ["lead", "backend", "frontend"],
  },
  architect: {
    label: "Solution Architect",
    focus: "Architecture, system design, integration decisions, modernization, and non-functional requirements.",
    title: "Solution Architect",
    titleDe: "Solution Architect",
    groups: ["architect", "backend", "cloud"],
  },
};

const templateConfig = {
  classicBlue: {
    label: "DE Classic Blue ATS",
    className: "template-classic-blue",
  },
  executiveNavy: {
    label: "DE Executive Navy",
    className: "template-executive-navy",
  },
  compactTech: {
    label: "DE Compact Technical",
    className: "template-compact-tech",
  },
  modernAzure: {
    label: "DE Modern Azure",
    className: "template-modern-azure",
  },
  minimalSlate: {
    label: "DE Minimal Slate",
    className: "template-minimal-slate",
  },
};

const resumeLabels = {
  de: {
    profile: "Kurzprofil",
    skills: "Technische Kenntnisse",
    projects: "Projekterfahrung",
    education: "Ausbildung",
    certifications: "Zertifizierungen",
    languages: "Sprachen",
    personalDetails: "Persönliche Angaben",
    personalHelper: "Kopfbereich, Kontaktdaten, Adresse und öffentliche Profile bearbeiten",
    characters: "Zeichen",
    aiTailor: "KI anpassen",
    tailor: "Anpassen",
    shorter: "Kürzer",
    stronger: "Stärker",
    photo: "Foto",
    photoSelected: "Foto ausgewählt — wird automatisch zugeschnitten.",
    photoUpload: "JPG oder PNG hochladen. Vorschau passt sich automatisch an.",
    skillCategory: "Kategorie",
    skillTechnologies: "Technologien",
    otherTools: "Weitere Tools",
    titleFallback: "Senior Fullstack-Entwickler",
  },
  en: {
    profile: "Profile",
    skills: "Technical Skills",
    projects: "Project Experience",
    education: "Education",
    certifications: "Certifications",
    languages: "Languages",
    personalDetails: "Personal Details",
    personalHelper: "Edit header, contact links, address, and public profiles",
    characters: "characters",
    aiTailor: "AI Tailor",
    tailor: "Tailor",
    shorter: "Shorter",
    stronger: "Stronger",
    photo: "Photo",
    photoSelected: "Photo selected. It will be cropped to fit the resume box.",
    photoUpload: "Upload JPG/PNG. The preview will auto-fit it.",
    skillCategory: "Category",
    skillTechnologies: "Technologies",
    otherTools: "Other Tools",
    titleFallback: "Senior Fullstack Engineer",
  },
};

const state = {
  language: "de",
  jobKeywords: [],
  personal: { ...resumeData.personal },
  photoUrl: "",
  includePhoto: false, // controlled by checkbox inside personalEditor
  tailoredSections: { ...resumeData.sections },
  activeTab: "resume",
  clFields: null,
  clSignatureFont: 0,
};

const sectionOrder = ["profile", "skills", "projects", "education", "certifications", "languages"];

function getActiveSections(source = state.tailoredSections) {
  return Object.fromEntries(
    sectionOrder.map((key) => [key, source[key] || ""])
  );
}

function applySavedSections(sections = {}) {
  sectionOrder.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(sections, key)) {
      state.tailoredSections[key] = sections[key] || "";
    }
  });
  state.tailoredSections = getActiveSections();
}

async function loadSavedSectionsForCurrentTarget() {
  const sectionsRes = await fetch(
    `/api/sections?profile=${elements.profileSelect.value}&language=${state.language}`
  );
  const sections = await sectionsRes.json();
  if (sections && Object.keys(sections).length > 0) {
    applySavedSections(sections);
    return true;
  }
  state.tailoredSections = getActiveSections();
  return false;
}

const elements = {
  jobDescription: document.querySelector("#jobDescription"),
  externalResumeDraft: document.querySelector("#externalResumeDraft"),
  externalCoverLetterDraft: document.querySelector("#externalCoverLetterDraft"),
  applyAiDrafts: document.querySelector("#applyAiDrafts"),
  saveAiDrafts: document.querySelector("#saveAiDrafts"),
  includeProfileInPrompt: document.querySelector("#includeProfileInPrompt"),
  includeSkillsInPrompt: document.querySelector("#includeSkillsInPrompt"),
  includeCoverLetterInPrompt: document.querySelector("#includeCoverLetterInPrompt"),
  copyAiPrompt: document.querySelector("#copyAiPrompt"),
  aiDraftStatus: document.querySelector("#aiDraftStatus"),
  analyzeJob: document.querySelector("#analyzeJob"),
  sampleJob: document.querySelector("#sampleJob"),
  profileSelect: document.querySelector("#profileSelect"),
  templateSelect: document.querySelector("#templateSelect"),
  includePhoto: document.querySelector("#includePhoto"),
  resumeLanguage: document.querySelector("#resumeLanguage"),
  tailorAll: document.querySelector("#tailorAll"),
  printResume: document.querySelector("#printResume"),
  printResumePreview: document.querySelector("#printResumePreview"),
  resetContent: document.querySelector("#resetContent"),
  keywordList: document.querySelector("#keywordList"),
  focusText: document.querySelector("#focusText"),
  languageFitText: document.querySelector("#languageFitText"),
  matchScore: document.querySelector("#matchScore"),
  personalEditor: document.querySelector("#personalEditor"),
  sectionEditor: document.querySelector("#sectionEditor"),
  previewFrame: document.querySelector(".preview-frame"),
  resumePreview: document.querySelector("#resumePreview"),
  coverLetterPreview: document.querySelector("#coverLetterPreview"),
  resumeView: document.querySelector("#resumeView"),
  coverLetterView: document.querySelector("#coverLetterView"),
  tabResume: document.querySelector("#tabResume"),
  tabCoverLetter: document.querySelector("#tabCoverLetter"),
  generateCoverLetter: document.querySelector("#generateCoverLetter"),
  templateBadge: document.querySelector("#templateBadge"),
  pageWarning: document.querySelector("#pageWarning"),
  aiStatus: document.querySelector("#aiStatus"),
  // External AI import
  importSectionKey: document.querySelector("#importSectionKey"),
  importedContent: document.querySelector("#importedContent"),
  applyImport: document.querySelector("#applyImport"),
  compareImport: document.querySelector("#compareImport"),
  clearImport: document.querySelector("#clearImport"),
  saveImportedContent: document.querySelector("#saveImportedContent"),
  // Comparison panel
  comparisonPanel: document.querySelector("#comparisonPanel"),
  comparisonLocal: document.querySelector("#comparisonLocal"),
  comparisonExternal: document.querySelector("#comparisonExternal"),
  comparisonSectionLabel: document.querySelector("#comparisonSectionLabel"),
  applyExternalBtn: document.querySelector("#applyExternalBtn"),
  // Save/load
  saveAllData: document.querySelector("#saveAllData"),
  saveAllInline: document.querySelector("#saveAllInline"),
  loadSavedData: document.querySelector("#loadSavedData"),
  saveStatus: document.querySelector("#saveStatus"),
  inlineSaveStatus: document.querySelector("#inlineSaveStatus"),
};

function normalizeText(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

const germanLevelRank = {
  a1: 1,
  a2: 2,
  b1: 3,
  b2: 4,
  c1: 5,
  c2: 6,
};

function findGermanRequirement(jobText) {
  const text = normalizeText(jobText);
  const patterns = [
    /\b(?:sprachkenntnisse|language skills|languages)\b[^\n]{0,120}\bdeutsch\b[^\n]{0,80}\b(a1|a2|b1|b2|c1|c2)\b/i,
    /\bdeutsch(?:kenntnisse)?\b[^\n]{0,100}\b(?:mindestens|mind\.?|min\.?|minimum|ab|niveau|level)?\s*\(?\b(a1|a2|b1|b2|c1|c2)\b\)?/i,
    /\b(?:mindestens|mind\.?|min\.?|minimum|ab)?\s*\(?\b(a1|a2|b1|b2|c1|c2)\b\)?[^\n]{0,80}\bdeutsch(?:kenntnisse)?\b/i,
    /\bgerman\b[^\n]{0,100}\b(?:at least|minimum|min\.?|level)?\s*\(?\b(a1|a2|b1|b2|c1|c2)\b\)?/i,
    /\b(?:at least|minimum|min\.?)?\s*\(?\b(a1|a2|b1|b2|c1|c2)\b\)?[^\n]{0,80}\bgerman\b/i,
  ];

  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      const level = match[1].toLowerCase();
      return { label: `German ${level.toUpperCase()}`, level: level.toUpperCase(), rank: germanLevelRank[level], type: "level" };
    }
  }

  return null;
}

function findCriticalGermanRequirement(jobText) {
  const text = normalizeText(jobText);
  const patterns = [
    {
      label: "native-level German",
      rank: germanLevelRank.c2,
      type: "native",
      pattern: /\b(?:deutsch|german)\b[^\n]{0,80}\b(?:muttersprache|muttersprachlich|native speaker|native level)\b|\b(?:muttersprache|muttersprachlich|native speaker|native level)\b[^\n]{0,80}\b(?:deutsch|german)\b/i,
    },
    {
      label: "fluent German",
      rank: germanLevelRank.c1,
      type: "fluent",
      pattern: /\b(?:deutsch|german)\b[^\n]{0,80}\b(?:fließend|fliessend|fluent|fluency|verhandlungssicher|business fluent)\b|\b(?:fließend|fliessend|fluent|fluency|verhandlungssicher|business fluent)\b[^\n]{0,80}\b(?:deutsch|german)\b|\bfluency\b[^\n]{0,80}\b(?:both|in)\b[^\n]{0,80}\b(?:german|deutsch)\b[^\n]{0,40}\b(?:english|englisch)\b|\bfluency\b[^\n]{0,80}\b(?:english|englisch)\b[^\n]{0,40}\b(?:german|deutsch)\b/i,
    },
    {
      label: "very good German",
      rank: germanLevelRank.c1,
      type: "very-good",
      pattern: /\b(?:sehr gute|sehr gutes|sehr guten|sehr gut|excellent|very good)\b[^\n]{0,80}\b(?:deutsch|german|deutschkenntnisse|german skills)\b|\b(?:deutsch|german|deutschkenntnisse|german skills)\b[^\n]{0,80}\b(?:sehr gut|very good|excellent)\b/i,
    },
    {
      label: "German required",
      rank: null,
      type: "required",
      pattern: /\b(?:deutsch|german|deutschkenntnisse|german skills)\b[^\n]{0,80}\b(?:erforderlich|vorausgesetzt|pflicht|required|mandatory|must have)\b|\b(?:erforderlich|vorausgesetzt|pflicht|required|mandatory|must have)\b[^\n]{0,80}\b(?:deutsch|german|deutschkenntnisse|german skills)\b/i,
    },
  ];

  return patterns.find(({ pattern }) => pattern.test(text)) || null;
}

function findCandidateGermanLevel() {
  const text = normalizeText(state.tailoredSections.languages || "");
  const levelMatch =
    text.match(/\bdeutsch\b[^,\n;]{0,60}\b(a1|a2|b1|b2|c1|c2)\b/i) ||
    text.match(/\b(a1|a2|b1|b2|c1|c2)\b[^,\n;]{0,60}\bdeutsch\b/i);
  if (levelMatch) {
    const level = levelMatch[1].toLowerCase();
    return { level: level.toUpperCase(), rank: germanLevelRank[level] };
  }

  if (/\bdeutsch\b[^,\n;]{0,80}\b(?:muttersprache|muttersprachlich|native)\b|\b(?:muttersprache|muttersprachlich|native)\b[^,\n;]{0,80}\bdeutsch\b/i.test(text)) {
    return { level: "C2", rank: germanLevelRank.c2 };
  }

  if (/\bdeutsch\b[^,\n;]{0,80}\b(?:c1|fließend|fliessend|fluent|verhandlungssicher)\b|\b(?:fließend|fliessend|fluent|verhandlungssicher)\b[^,\n;]{0,80}\bdeutsch\b/i.test(text)) {
    return { level: "C1", rank: germanLevelRank.c1 };
  }

  if (/\bdeutsch\b[^,\n;]{0,80}\b(?:b2|fortgeschritten|gute deutschkenntnisse|gutes deutsch)\b|\b(?:fortgeschritten|gute deutschkenntnisse|gutes deutsch)\b[^,\n;]{0,80}\bdeutsch\b/i.test(text)) {
    return { level: "B2", rank: germanLevelRank.b2 };
  }

  return null;
}

function extractKeywords(jobText) {
  const normalized = normalizeText(jobText);
  const allKeywords = Object.values(keywordGroups).flat();
  return [...new Set(allKeywords.filter((keyword) => normalized.includes(keyword)))];
}

function calculateMatchScore(keywords) {
  if (!keywords.length) return 0;
  const resumeText = normalizeText(Object.values(getResumePreset().sections).join(" "));
  const matches = keywords.filter((keyword) => resumeText.includes(keyword)).length;
  return Math.round((matches / keywords.length) * 100);
}

function assessLanguageFit(jobText) {
  const normalized = normalizeText(jobText);
  const signals = [];
  let score = 0;
  const requiredGermanLevel = findGermanRequirement(jobText);
  const criticalGermanRequirement = findCriticalGermanRequirement(jobText);
  const candidateGermanLevel = findCandidateGermanLevel();

  const germanMarketSignals = [
    "germany",
    "deutschland",
    "german",
    "deutsch",
    "wiesbaden",
    "bochum",
    "hamburg",
    "berlin",
    "munich",
    "hybrid",
    "company pension",
    "betriebliche altersvorsorge",
    "scrumban",
    "kanban",
  ];

  const regulatedDomainSignals = [
    "schufa",
    "financial",
    "fintech",
    "payment defaults",
    "lenders",
    "secure",
    "risk",
    "customers",
    "api and connectivity",
  ];

  const languageRequirementSignals = [
    "very good german",
    "german or english",
    "english skills",
    "spoken and written",
    "deutschkenntnisse",
    "englischkenntnisse",
  ];

  const criticalGermanSignals = [
    "fluent german",
    "german fluency",
    "fluency in german",
    "fluency in both german",
    "fluency in both german & english",
    "fluency in both german and english",
    "native german",
    "german native",
    "c1 german",
    "c2 german",
    "deutsch c1",
    "deutsch c2",
    "mind c1",
    "mind. c1",
    "min c1",
    "min. c1",
    "mindestens c1",
    "minimum c1",
    "ab c1",
    "sprachkenntnisse deutsch",
    "fließend deutsch",
    "deutsch fließend",
    "fliessend deutsch",
    "deutsch fliessend",
    "sehr gutes deutsch",
    "sehr gut deutsch",
    "verhandlungssicher deutsch",
    "deutsch verhandlungssicher",
    "muttersprachlich deutsch",
    "muttersprache deutsch",
    "deutsch muttersprache",
    "deutsch auf muttersprachlichem niveau",
    "sehr gute deutschkenntnisse",
    "exzellente deutschkenntnisse",
  ];

  const matchedMarketSignals = germanMarketSignals.filter((signal) => normalized.includes(signal));
  const matchedDomainSignals = regulatedDomainSignals.filter((signal) => normalized.includes(signal));
  const matchedLanguageSignals = languageRequirementSignals.filter((signal) => normalized.includes(signal));
  const matchedCriticalGermanSignals = criticalGermanSignals.filter((signal) => normalized.includes(signal));

  if (matchedMarketSignals.length) {
    score += Math.min(35, matchedMarketSignals.length * 7);
    signals.push(`Germany-market signals: ${matchedMarketSignals.slice(0, 5).join(", ")}`);
  }

  if (matchedDomainSignals.length) {
    score += Math.min(30, matchedDomainSignals.length * 6);
    signals.push(`regulated/finance context: ${matchedDomainSignals.slice(0, 5).join(", ")}`);
  }

  if (matchedLanguageSignals.length) {
    score += Math.min(35, matchedLanguageSignals.length * 12);
    signals.push(`language requirement: ${matchedLanguageSignals.slice(0, 4).join(", ")}`);
  }

  if (matchedCriticalGermanSignals.length) {
    score += 40;
    signals.push(`critical German requirement: ${matchedCriticalGermanSignals.slice(0, 4).join(", ")}`);
  }

  if (requiredGermanLevel) {
    score += requiredGermanLevel.rank >= germanLevelRank.c1 ? 45 : 25;
    signals.push(`required German level: ${requiredGermanLevel.level}`);
  }

  if (criticalGermanRequirement && (!requiredGermanLevel || criticalGermanRequirement.rank !== requiredGermanLevel.rank)) {
    score += criticalGermanRequirement.rank ? 45 : 30;
    signals.push(`critical German requirement: ${criticalGermanRequirement.label}`);
  }

  if (candidateGermanLevel) {
    signals.push(`your German level: ${candidateGermanLevel.level}`);
  } else if (requiredGermanLevel || criticalGermanRequirement) {
    signals.push("your German level: not found");
  }

  const requiredRank = Math.max(requiredGermanLevel?.rank || 0, criticalGermanRequirement?.rank || 0);
  const requiredLabel = requiredGermanLevel?.level || criticalGermanRequirement?.label || "German";
  const isCandidateBelowGermanRequirement =
    requiredRank > 0 &&
    (!candidateGermanLevel || candidateGermanLevel.rank < requiredRank);
  const isCandidateLevelMissingForGermanRequirement =
    !candidateGermanLevel && (requiredGermanLevel || criticalGermanRequirement);
  const isLanguageCritical =
    matchedCriticalGermanSignals.length > 0 ||
    (requiredGermanLevel && requiredGermanLevel.rank >= germanLevelRank.c1) ||
    (criticalGermanRequirement && (criticalGermanRequirement.rank === null || criticalGermanRequirement.rank >= germanLevelRank.c1)) ||
    isCandidateBelowGermanRequirement;
  const level = isCandidateBelowGermanRequirement
    ? `Red flag: ${requiredLabel} required`
    : isLanguageCritical
      ? "Red flag: strong German required"
      : score >= 65
        ? "Strong Germany-market fit"
        : score >= 35
          ? "Moderate Germany-market fit"
          : "Low Germany-market dependency";
  const recommendation =
    isCandidateBelowGermanRequirement
      ? `This job asks for ${requiredLabel}, but your saved resume shows ${candidateGermanLevel?.level || "no clear German level"}. Treat German speaking as crucial before investing time.`
      : isCandidateLevelMissingForGermanRequirement
        ? "German speaking appears crucial for this job, but your saved German level is missing. Add your honest level before deciding whether to apply."
        : isLanguageCritical
          ? "German appears to be a hard requirement. Apply only if your German level honestly matches it, or make your current German level very clear before investing time."
          : score >= 65
            ? "Use a Germany-focused resume version. Keep German language level visible, mention Germany/EU work context if truthful, and emphasize secure APIs, DevOps ownership, AWS, and financial-domain reliability."
            : score >= 35
              ? "Use a Germany-friendly resume version and keep language details visible."
              : "A general international resume should be enough unless the recruiter asks for German details.";

  return {
    score,
    level,
    recommendation,
    signals,
    isLanguageCritical,
  };
}

function getActiveProfile() {
  return profileConfig[elements.profileSelect.value];
}

function getProfileTitle(profile = getActiveProfile()) {
  return state.language === "de" ? profile.titleDe || profile.title : profile.title;
}

function getActiveTemplate() {
  return templateConfig[elements.templateSelect.value] || templateConfig.classicBlue;
}

function getResumePreset(language = state.language) {
  return resumePresets[language] || resumePresets.de;
}

function getResumeLabels() {
  return resumeLabels[state.language] || resumeLabels.de;
}

async function switchResumeLanguage(language) {
  const nextLanguage = language || "de";
  const nextPreset = getResumePreset(nextLanguage);
  state.language = nextLanguage;
  state.personal = {
    ...state.personal,
    title: getProfileTitle(),
    location: nextPreset.personal.location,
  };
  state.tailoredSections = { ...nextPreset.sections };
  await loadSavedSectionsForCurrentTarget();
  await loadAiDrafts();
  renderPersonalEditor();
  renderEditor();
  renderPreview();
}

function getPriorityKeywords() {
  const profile = getActiveProfile();
  const profileKeywords = profile.groups.flatMap((group) => keywordGroups[group] || []);
  const jobKeywords = state.jobKeywords.length ? state.jobKeywords : profileKeywords;
  return [...new Set([...jobKeywords, ...profileKeywords])];
}

function tailorProfile() {
  const profile = getActiveProfile();
  const keywords = getPriorityKeywords().slice(0, 8).join(", ");
  if (state.language === "de") {
    return `${state.personal.title || resumeLabels.de.titleFallback} mit starker Erfahrung in Backend-Entwicklung, Frontend-Umsetzung, Cloud-Integration und Enterprise Delivery. Die wichtigsten Schwerpunkte für diese Rolle: ${keywords}.`;
  }
  return `${getProfileTitle(profile)} with strong experience in ${profile.focus.toLowerCase()} Brings practical delivery experience across enterprise projects and aligns resume highlights to the target role keywords: ${keywords}.`;
}

function tailorSkills() {
  if (parseCategorizedSkills(state.tailoredSections.skills).length) {
    return state.tailoredSections.skills;
  }

  const skills = getResumePreset().sections.skills.split(",").map((skill) => skill.trim());
  const priority = getPriorityKeywords();
  const sorted = [...skills].sort((a, b) => {
    const aHit = priority.some((keyword) => a.toLowerCase().includes(keyword));
    const bHit = priority.some((keyword) => b.toLowerCase().includes(keyword));
    return Number(bHit) - Number(aHit);
  });
  return sorted.join(", ");
}

function tailorProjects() {
  const keywords = getPriorityKeywords();
  const extraLine = keywords.length
    ? state.language === "de"
      ? `- Hervorgehobene relevante Fähigkeiten für diese Rolle: ${keywords.slice(0, 7).join(", ")}.`
      : `- Emphasized relevant capabilities for this role: ${keywords.slice(0, 7).join(", ")}.`
    : state.language === "de"
      ? "- Schwerpunkt auf die stärksten Verantwortlichkeiten für das ausgewählte Bewerbungsprofil gelegt."
      : "- Emphasized the strongest responsibilities for the selected resume profile.";
  return getResumePreset().sections.projects
    .split("\n\n")
    .map((project) => `${project}\n${extraLine}`)
    .join("\n\n");
}

function tailorSection(sectionKey) {
  const generators = {
    profile: tailorProfile,
    skills: tailorSkills,
    projects: tailorProjects,
  };

  if (generators[sectionKey]) {
    state.tailoredSections[sectionKey] = generators[sectionKey]();
  }

  renderEditor();
  renderPreview();
}

function tailorAllSections() {
  ["profile", "skills", "projects"].forEach((sectionKey) => {
    const generators = {
      profile: tailorProfile,
      skills: tailorSkills,
      projects: tailorProjects,
    };
    state.tailoredSections[sectionKey] = generators[sectionKey]();
  });
  renderEditor();
  renderPreview();
}

function setAiStatus(message, isError = false) {
  elements.aiStatus.textContent = message;
  elements.aiStatus.classList.toggle("error", isError);
}

async function postJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(result.error || `Request failed (${response.status})`);
  }
  return result;
}

function resizeImageFile(file, maxSize = 420, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("error", () => reject(new Error("Could not read the selected photo.")));
    reader.addEventListener("load", () => {
      const image = new Image();
      image.addEventListener("error", () => reject(new Error("Could not process the selected photo.")));
      image.addEventListener("load", () => {
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      });
      image.src = reader.result;
    });
    reader.readAsDataURL(file);
  });
}

async function persistPersonal() {
  return postJson("/api/personal", {
    ...state.personal,
    photo_url: state.photoUrl,
    include_photo: state.includePhoto,
  });
}

async function aiTailorSection(sectionKey, action = "tailor") {
  setAiStatus(`AI tailoring ${sectionLabel(sectionKey)}...`);

  try {
    const response = await fetch("/api/tailor", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        sectionKey,
        action,
        profile: elements.profileSelect.value,
        template: elements.templateSelect.value,
        includePhoto: elements.includePhoto.checked,
        resumeLanguage: state.language,
        jobDescription: elements.jobDescription.value,
        detectedKeywords: state.jobKeywords,
        masterResumeSection: getResumePreset().sections[sectionKey],
        currentSectionText: state.tailoredSections[sectionKey],
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "AI tailoring failed.");
    }

    state.tailoredSections[sectionKey] = result.content;
    renderEditor();
    renderPreview();
    setAiStatus(result.rationale || "AI tailoring completed.");
  } catch (error) {
    setAiStatus(error.message, true);
  }
}

function analyzeJob() {
  const keywords = extractKeywords(elements.jobDescription.value);
  const languageFit = assessLanguageFit(elements.jobDescription.value);
  state.jobKeywords = keywords;
  elements.keywordList.innerHTML = keywords.length
    ? keywords.map((keyword) => `<span class="chip">${keyword}</span>`).join("")
    : `<span class="chip">No strong keywords yet</span>`;
  elements.focusText.textContent = getActiveProfile().focus;
  elements.matchScore.textContent = `${calculateMatchScore(keywords)}%`;
  elements.languageFitText.textContent = `${languageFit.level} (${languageFit.score}/100). ${languageFit.recommendation} ${languageFit.signals.join(" | ")}`;
  elements.languageFitText.classList.toggle("language-red-flag", languageFit.isLanguageCritical);
}

function shortenText(text) {
  return text
    .split(/[.!?]\s+/)
    .slice(0, 2)
    .join(". ")
    .trim();
}

function strengthenText(text) {
  return text
    .replace(/\bworked on\b/gi, "delivered")
    .replace(/\bhelped\b/gi, "contributed to")
    .replace(/\bresponsible for\b/gi, "owned");
}

function sectionLabel(sectionKey) {
  const labels = getResumeLabels();
  return labels[sectionKey] || sectionKey;
}

function personalLabel(fieldKey) {
  if (fieldKey === "visa_type") {
    return state.language === "de" ? "Aufenthaltstitel / Arbeitserlaubnis" : "Visa / work authorization";
  }
  if (fieldKey === "nationality") {
    return state.language === "de" ? "Nationalitaet" : "Nationality";
  }
  const labels =
    state.language === "de"
      ? {
        name: "Name im Kopfbereich",
        title: "Zielposition",
        phone: "Mobilnummer",
        email: "E-Mail",
        location: "Adresse / Standort",
        linkedin: "LinkedIn",
        github: "GitHub",
        website: "Persönliche Webseite",
      }
      : {
        name: "Main name header",
        title: "Target title",
        phone: "Mobile number",
        email: "Email ID",
        location: "Address / Location",
        linkedin: "LinkedIn",
        github: "GitHub",
        website: "Personal website",
      };
  return labels[fieldKey] || fieldKey;
}

function renderPersonalEditor() {
  const fields = ["name", "title", "phone", "email", "location", "linkedin", "github", "website"];
  const labels = getResumeLabels();
  const visaOptions = [
    "",
    "EU Blue Card",
    "Niederlassungserlaubnis",
    "European Citizen",
    "German Citizen",
    "Work permit / Other",
  ];
  const nationalityOptions = ["Indian", "German", "European Union", "Other"];
  elements.personalEditor.innerHTML = `
    <article class="section-card">
      <header>
        <div>
          <h3>${labels.personalDetails}</h3>
          <small>${labels.personalHelper}</small>
        </div>
      </header>
      <div class="field-grid">
        ${fields
      .map(
        (field) => `
              <label>
                ${personalLabel(field)}
                <input data-personal="${field}" value="${state.personal[field] || ""}" />
              </label>
            `
      )
      .join("")}
        <label>
          ${personalLabel("visa_type")}
          <select data-personal="visa_type">
            ${visaOptions.map((option) => `
              <option value="${escapeHtml(option)}" ${state.personal.visa_type === option ? "selected" : ""}>${option || (state.language === "de" ? "Nicht anzeigen" : "Do not show")}</option>
            `).join("")}
          </select>
        </label>
        <label>
          ${personalLabel("nationality")}
          <input data-personal="nationality" list="nationalityOptions" value="${escapeHtml(state.personal.nationality || "")}" placeholder="${state.language === "de" ? "z. B. Indisch" : "e.g. Indian"}" />
          <datalist id="nationalityOptions">
            ${nationalityOptions.map((option) => `<option value="${escapeHtml(option)}"></option>`).join("")}
          </datalist>
        </label>
      </div>
      <label class="photo-upload">
        <div class="photo-upload-header">
          <span>${labels.photo}</span>
          ${state.photoUrl ? `
            <label class="check-option photo-include-check" for="includePhoto" onclick="event.stopPropagation()">
              <input id="includePhoto" type="checkbox" ${state.includePhoto ? "checked" : ""} />
              ${state.language === "de" ? "Im Lebenslauf anzeigen" : "Include in resume"}
            </label>
          ` : ""}
        </div>
        <input type="file" accept="image/*" data-photo-upload />
        <div class="photo-upload-preview">
          ${state.photoUrl ? `<img src="${state.photoUrl}" alt="Selected profile photo" />` : `<div class="photo-upload-placeholder">${labels.photo}</div>`}
          <span>${state.photoUrl ? labels.photoSelected : labels.photoUpload}</span>
        </div>
      </label>
    </article>
  `;

  elements.personalEditor.querySelectorAll("[data-personal]").forEach((input) => {
    input.addEventListener("input", (event) => {
      state.personal[event.target.dataset.personal] = event.target.value;
      renderPreview();
    });
    input.addEventListener("change", (event) => {
      state.personal[event.target.dataset.personal] = event.target.value;
      renderPreview();
    });
  });

  const photoInput = elements.personalEditor.querySelector("[data-photo-upload]");
  photoInput.addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      state.photoUrl = await resizeImageFile(file);
      state.includePhoto = true;
      await persistPersonal();
      setSaveStatus(state.language === "de" ? "Foto gespeichert." : "Photo saved.");
      renderPersonalEditor();
      renderPreview();
    } catch (error) {
      setSaveStatus((state.language === "de" ? "Foto konnte nicht gespeichert werden: " : "Photo save failed: ") + error.message, true);
    }
  });

  // Re-wire the include-photo checkbox rendered inside the personal editor
  const inlinePhotoCheck = elements.personalEditor.querySelector("#includePhoto");
  if (inlinePhotoCheck) {
    elements.includePhoto = inlinePhotoCheck;
    inlinePhotoCheck.addEventListener("change", () => {
      state.includePhoto = inlinePhotoCheck.checked;
      persistPersonal().catch((error) => {
        setSaveStatus((state.language === "de" ? "Foto-Einstellung konnte nicht gespeichert werden: " : "Photo setting save failed: ") + error.message, true);
      });
      renderPreview();
    });
  }
}


function renderEditor() {
  const labels = getResumeLabels();
  const isEmpty = (v) => !v || v.trim().length === 0;
  const placeholder = state.language === "de"
    ? "KI-Anpassung verwenden oder Inhalt hier einfügen …"
    : "Use AI Tailor or paste your content here …";

  elements.sectionEditor.innerHTML = `
    <div class="editor-save-bar">
      <span class="editor-save-label">${state.language === "de" ? "Alle Abschnitte" : "All sections"}</span>
      <button id="saveAllInline" class="primary-btn small" type="button">💾 ${state.language === "de" ? "Alle speichern" : "Save All"}</button>
    </div>
    ${Object.entries(getActiveSections()).map(([sectionKey, value]) => `
      <article class="section-card">
        <header>
          <div>
            <h3>${sectionLabel(sectionKey)}</h3>
            <small>${value.length} ${labels.characters}</small>
          </div>
        </header>
        ${isEmpty(value)
      ? `<div class="section-empty-hint">${placeholder}</div>`
      : ""}
        <textarea data-section="${sectionKey}" placeholder="${placeholder}">${value}</textarea>
        <div class="section-actions">
          <button class="mini-btn" type="button" data-action="ai-tailor" data-section="${sectionKey}">${labels.aiTailor}</button>
        </div>
      </article>
    `).join("")}
  `;

  const embeddedSaveBar = elements.sectionEditor.querySelector(".editor-save-bar");
  if (embeddedSaveBar) embeddedSaveBar.remove();

  // Wire Save All inline button
  const saveAllInline = elements.sectionEditor.querySelector("#saveAllInline");
  if (saveAllInline) saveAllInline.addEventListener("click", saveAllData);

  elements.sectionEditor.querySelectorAll("textarea").forEach((textarea) => {
    textarea.addEventListener("input", (event) => {
      state.tailoredSections[event.target.dataset.section] = event.target.value;
      // Hide/show empty hint
      const hint = event.target.previousElementSibling;
      if (hint && hint.classList.contains("section-empty-hint")) {
        hint.style.display = event.target.value.trim() ? "none" : "";
      }
      renderPreview();
    });
  });

  elements.sectionEditor.querySelectorAll("button[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const { action, section } = button.dataset;
      if (action === "ai-tailor") aiTailorSection(section);
    });
  });
}

function renderSkills(skillsText) {
  return skillsText
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean)
    .map((skill) => `<span class="skill-pill">${skill}</span>`)
    .join("");
}

function parseCategorizedSkills(skillsText) {
  const lines = skillsText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const rows = [];
  let currentCategory = "";
  let currentItems = [];

  lines.forEach((line) => {
    const categoryMatch = line.match(/^(.+?):\s*(.*)$/);
    if (categoryMatch) {
      if (currentCategory && currentItems.length) {
        rows.push([currentCategory, currentItems.join(", ")]);
      }
      currentCategory = categoryMatch[1].trim();
      currentItems = categoryMatch[2]
        ? [categoryMatch[2].replace(/^[-–•]\s*/, "").trim()].filter(Boolean)
        : [];
      return;
    }

    if (currentCategory) {
      currentItems.push(line.replace(/^[-–•]\s*/, "").trim());
    }
  });

  if (currentCategory && currentItems.length) {
    rows.push([currentCategory, currentItems.join(", ")]);
  }

  return rows;
}

function renderSkillsTable(skillsText) {
  const labels = getResumeLabels();
  const categorizedRows = parseCategorizedSkills(skillsText);
  if (categorizedRows.length) {
    return `
      <table class="skills-table">
        <thead>
          <tr>
            <th>${labels.skillCategory}</th>
            <th>${labels.skillTechnologies}</th>
          </tr>
        </thead>
        <tbody>
          ${categorizedRows
        .map(
          ([category, technologies]) => `
                <tr>
                  <td>${category}</td>
                  <td>${technologies}</td>
                </tr>
              `
        )
        .join("")}
        </tbody>
      </table>
    `;
  }

  const skills = skillsText
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  const categoryRules = [
    [state.language === "de" ? "Backend & Architektur" : "Backend & Architecture", ["java", "spring", "rest", "api", "microservices", "system design"]],
    ["Frontend", ["angular", "react", "typescript", "javascript", "html", "css"]],
    ["Cloud & DevOps", ["aws", "azure", "docker", "kubernetes", "ci/cd", "git"]],
    [state.language === "de" ? "Datenbanken" : "Databases", ["sql", "postgresql", "oracle", "mongodb", "redis"]],
    [state.language === "de" ? "Qualität & Methoden" : "Quality & Methods", ["agile", "scrum", "testing", "team leadership"]],
  ];

  const rows = categoryRules
    .map(([category, matches]) => {
      const categorySkills = skills.filter((skill) =>
        matches.some((match) => skill.toLowerCase().includes(match))
      );
      return [category, categorySkills];
    })
    .filter(([, categorySkills]) => categorySkills.length);

  const grouped = new Set(rows.flatMap(([, categorySkills]) => categorySkills));
  const otherSkills = skills.filter((skill) => !grouped.has(skill));
  if (otherSkills.length) {
    rows.push([labels.otherTools, otherSkills]);
  }

  return `
    <table class="skills-table">
      <thead>
        <tr>
          <th>${labels.skillCategory}</th>
          <th>${labels.skillTechnologies}</th>
        </tr>
      </thead>
      <tbody>
        ${rows
      .map(
        ([category, categorySkills]) => `
              <tr>
                <td>${category}</td>
                <td>${categorySkills.join(", ")}</td>
              </tr>
            `
      )
      .join("")}
      </tbody>
    </table>
  `;
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderDetailLines(text, labelsToStrip = [], options = {}) {
  const stripPattern = labelsToStrip.length
    ? new RegExp(`^(${labelsToStrip.join("|")})\\s*:\\s*`, "i")
    : null;
  const lines = String(text || "")
    .replace(/\r/g, "")
    .split("\n")
    .flatMap((line) => {
      const withoutLabel = stripPattern ? line.trim().replace(stripPattern, "") : line.trim();
      return withoutLabel
        .replace(/\s+[•●▪▫◦]\s+/g, "\n• ")
        .split("\n")
        .map((part) => part.trim())
        .filter(Boolean);
    });

  if (!lines.length) return "<p></p>";

  const normalizedLines = options.splitCommaItems && lines.length === 1
    ? lines[0]
      .split(/\s*[,;]\s+(?=[A-Za-zÄÖÜäöüß]+:)/)
      .map((line) => line.trim())
      .filter(Boolean)
    : lines;

  const hasBullets = normalizedLines.some((line) => /^[•●▪▫◦-]\s+/.test(line));
  if (hasBullets) {
    return `<ul class="detail-list">${normalizedLines
      .map((line) => `<li>${escapeHtml(line.replace(/^[•●▪▫◦-]\s+/, ""))}</li>`)
      .join("")}</ul>`;
  }

  return `<p class="detail-lines">${normalizedLines.map((line) => escapeHtml(line)).join("<br>")}</p>`;
}

function normalizeDraftText(text = "") {
  return String(text)
    .replace(/\r/g, "")
    .replace(/[ \t]+$/gm, "")
    .trim();
}

function parseResumeDraft(text) {
  const source = normalizeDraftText(text);
  if (!source) return {};

  const headingPatterns = {
    profile: [
      "kurzprofil", "profil", "profile", "summary", "professional summary",
    ],
    skills: [
      "technische kenntnisse", "fachliche kenntnisse", "tech stack", "technical skills", "skills",
    ],
    projects: [
      "projekterfahrung", "berufserfahrung", "project experience", "professional experience", "experience",
    ],
    education: [
      "ausbildung", "education", "studium",
    ],
    certifications: [
      "zertifizierungen", "zertifikate", "certifications", "certificates",
    ],
    languages: [
      "sprachen", "languages",
    ],
  };

  const headingLookup = new Map();
  Object.entries(headingPatterns).forEach(([key, headings]) => {
    headings.forEach((heading) => headingLookup.set(heading, key));
  });

  const matches = [];
  const headingRegex = /^#{0,3}\s*([A-Za-zÄÖÜäöüß/& -]+)\s*:?\s*$/gim;
  let match;
  while ((match = headingRegex.exec(source)) !== null) {
    const normalized = match[1].toLowerCase().replace(/\s+/g, " ").trim();
    if (headingLookup.has(normalized)) {
      matches.push({
        sectionKey: headingLookup.get(normalized),
        start: match.index,
        contentStart: headingRegex.lastIndex,
      });
    }
  }

  if (!matches.length) {
    return { projects: source };
  }

  const sections = {};
  matches.forEach((current, index) => {
    const next = matches[index + 1];
    const content = source.slice(current.contentStart, next ? next.start : source.length).trim();
    if (content) sections[current.sectionKey] = content;
  });
  return sections;
}

function splitCombinedAiDraft(text = "") {
  const source = normalizeDraftText(text);
  if (!source) return { resumeText: "", coverLetterText: "" };

  const coverHeadingRegex = /^#{0,3}\s*(anschreiben|cover letter|bewerbungsschreiben)\s*:?\s*$/im;
  const match = coverHeadingRegex.exec(source);
  if (!match) return { resumeText: source, coverLetterText: "" };

  return {
    resumeText: source.slice(0, match.index).trim(),
    coverLetterText: source.slice(match.index + match[0].length).trim(),
  };
}

function splitCoverLetterHints(text = "") {
  const source = normalizeDraftText(text);
  const hintHeadingRegex = /^#{0,3}\s*(highlight hints?|highlight keywords?|keywords to highlight|hervorhebungshinweise|hervorhebungen|schluesselwoerter|schlüsselwörter)\s*:?\s*$/im;
  const match = hintHeadingRegex.exec(source);
  if (!match) return { letterText: source, highlightHints: "" };
  return {
    letterText: source.slice(0, match.index).trim(),
    highlightHints: source.slice(match.index + match[0].length).trim(),
  };
}

function parseHighlightHints(text = "") {
  return normalizeDraftText(text)
    .split("\n")
    .map((line) => line.replace(/^[-•●▪▫◦]\s*/, "").trim())
    .filter((line) => line.length >= 4)
    .slice(0, 8);
}

function escapeRegExp(value = "") {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderCoverLetterParagraph(line, highlightHints = []) {
  let escaped = escapeHtml(line);
  highlightHints
    .slice()
    .sort((a, b) => b.length - a.length)
    .forEach((hint) => {
      const escapedHint = escapeHtml(hint);
      escaped = escaped.replace(new RegExp(`(?<!<strong>)(${escapeRegExp(escapedHint)})(?!</strong>)`, "gi"), "<strong>$1</strong>");
    });
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function coverLetterTextToFields(text) {
  const { letterText, highlightHints } = splitCoverLetterHints(text);
  const parsedHighlightHints = parseHighlightHints(highlightHints);
  const source = normalizeDraftText(letterText);
  const generated = generateCoverLetter();

  if (!source) return generated;

  const lines = source
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !/^(anschreiben|cover letter|bewerbungsschreiben)\s*:?\s*$/i.test(line));

  const subjectIndex = lines.findIndex(
    (line) => /^(betreff|subject)\s*:/i.test(line) || /^bewerbung\s+/i.test(line)
  );

  const salutationIndex = lines.findIndex((line) =>
    /^(sehr geehrte|dear)\b/i.test(line)
  );

  const closingIndex = lines.findIndex((line) =>
    /^(mit freundlichen grüßen|mit freundlichen gruessen|freundliche grüße|freundliche gruesse|kind regards|best regards|sincerely)/i.test(line)
  );

  // Everything before "Betreff" is treated as recipient/company address.
  const recipientEnd =
    subjectIndex >= 0
      ? subjectIndex
      : salutationIndex >= 0
        ? salutationIndex
        : 0;

  const recipientLines = recipientEnd > 0
    ? lines
      .slice(0, recipientEnd)
      .filter((line) => line !== state.personal.name)
      .filter((line) => !line.includes(state.personal.email || "__no_email__"))
      .filter((line) => !line.includes(state.personal.phone || "__no_phone__"))
    : [];

  const subject =
    subjectIndex >= 0
      ? lines[subjectIndex].replace(/^(betreff|subject)\s*:\s*/i, "")
      : generated.subject;

  const salutation =
    salutationIndex >= 0 ? lines[salutationIndex] : generated.salutation;

  const closing =
    closingIndex >= 0 ? lines[closingIndex] : generated.closing;

  const senderName =
    closingIndex >= 0 ? lines[closingIndex + 1] || generated.senderName : generated.senderName;

  const bodyStart =
    salutationIndex >= 0
      ? salutationIndex + 1
      : subjectIndex >= 0
        ? subjectIndex + 1
        : recipientEnd;

  const bodyEnd = closingIndex >= 0 ? closingIndex : lines.length;

  const bodyLines = lines
    .slice(bodyStart, bodyEnd)
    .filter((line) => !/^(betreff|subject)\s*:/i.test(line))
    .filter((line) => !recipientLines.includes(line));

  const body = bodyLines.length
    ? bodyLines
      .map((line) => `<p>${renderCoverLetterParagraph(line, parsedHighlightHints)}</p>`)
      .join("")
    : generated.body;

  return {
    ...generated,
    senderName,
    subject,
    salutation,
    recipient: recipientLines.join("\n"),
    body,
    closing,
    highlightHints: parsedHighlightHints,
  };
}

function stripHtml(value = "") {
  const div = document.createElement("div");
  div.innerHTML = value;
  return div.textContent || div.innerText || "";
}

function resumeSectionsToDraftText(sections = getActiveSections()) {
  const labels = getResumeLabels();
  return sectionOrder
    .map((key) => `${labels[key]}\n${sections[key] || ""}`.trim())
    .filter(Boolean)
    .join("\n\n");
}

function projectExperienceToDraftText(sections = getActiveSections()) {
  const labels = getResumeLabels();
  return `${labels.projects}\n${sections.projects || ""}`.trim();
}

function extractProjectExperienceDraft(text) {
  const parsed = parseResumeDraft(text);
  return parsed.projects || normalizeDraftText(text);
}

function getPromptRewriteKeys() {
  const keys = ["projects"];
  if (elements.includeProfileInPrompt?.checked !== false) keys.unshift("profile");
  if (elements.includeSkillsInPrompt?.checked !== false) keys.splice(keys.includes("profile") ? 1 : 0, 0, "skills");
  return keys;
}

function rewriteSectionsToPromptText(keys = getPromptRewriteKeys(), sections = getActiveSections()) {
  const labels = getResumeLabels();
  return keys
    .map((key) => `${labels[key]}\n${sections[key] || ""}`.trim())
    .filter(Boolean)
    .join("\n\n");
}

function stableResumeContextText(sections = getActiveSections()) {
  const labels = getResumeLabels();
  const rewriteKeys = new Set(getPromptRewriteKeys());
  return ["profile", "skills", "education", "certifications", "languages"]
    .filter((key) => !rewriteKeys.has(key))
    .map((key) => `${labels[key]}\n${sections[key] || ""}`.trim())
    .filter(Boolean)
    .join("\n\n");
}

function coverLetterFieldsToPlainText(fields = state.clFields || generateCoverLetter()) {
  return [
    fields.recipient || "",
    fields.subject ? `Betreff: ${fields.subject}` : "",
    fields.salutation || "",
    stripHtml(fields.body || "").replace(/\n{3,}/g, "\n\n"),
    fields.closing || "",
    fields.senderName || state.personal.name || "",
  ]
    .filter(Boolean)
    .join("\n\n")
    .trim();
}

function getDraftResumeText() {
  return normalizeDraftText(elements.externalResumeDraft?.value) || rewriteSectionsToPromptText();
}

function getDraftCoverLetterText() {
  return normalizeDraftText(elements.externalCoverLetterDraft?.value) || coverLetterFieldsToPlainText();
}

function buildAiTailoringPrompt() {
  const isDe = state.language === "de";
  const outputLanguage = isDe ? "German" : "English";
  const includeCoverLetter = elements.includeCoverLetterInPrompt?.checked !== false;
  const rewriteKeys = getPromptRewriteKeys();
  const rewriteHeadings = rewriteKeys.map((key) => getResumeLabels()[key]);
  const jobDescription = normalizeDraftText(elements.jobDescription?.value) || "[PASTE OR KEEP THE TARGET JOB DESCRIPTION HERE]";
  const currentRewriteSections = getDraftResumeText();
  const stableResumeContext = stableResumeContextText();
  const currentCoverLetter = getDraftCoverLetterText();
  const personalContext = [
    state.personal.visa_type ? `Work authorization / visa: ${state.personal.visa_type}` : "",
    state.personal.nationality ? `Nationality: ${state.personal.nationality}` : "",
  ].filter(Boolean).join("\n");

  return `You are a senior software-engineering recruiter, hiring manager, and resume editor for Germany/EU tech roles.

Goal:
Review the target job description like a human recruiter would, compare it with my current rewrite sections, and improve only the requested sections so my application has a strong chance to be in the recruiter's top 5 shortlist.

Important principles:
- Do not simply stuff ATS keywords.
- Emphasize believable hands-on experience, concrete ownership, business impact, reliability, delivery, and collaboration.
- Show what I actually built, improved, migrated, stabilized, automated, or supported.
- Show how I worked with Product Owners, QA, onsite/offshore teams, stakeholders, and junior developers where relevant.
- Do not invent employers, dates, degrees, certifications, languages, technologies, metrics, or achievements.
- If the job asks for something I do not clearly have, either avoid claiming it or phrase it as adjacent/learning/context only.
- Keep the resume concise, recruiter-friendly, and suitable for max 3 pages.
- Write the final resume sections in ${outputLanguage}.
- Personal details, education, certifications, and languages are stable. Treat them as context only. Do not rewrite or output them unless a serious inconsistency or red flag must be mentioned in the recruiter fit review.
- Rewrite only these selected sections: ${rewriteHeadings.join(", ")}.
- The final ChatGPT response must be easy to copy back into my tool: use plain text, output only the selected sections under their exact headings, and the cover letter under its own heading. Do not use tables and do not add markdown code fences.

Target profile:
- Resume profile: ${getActiveProfile().label}
- Target title: ${state.personal.title || getProfileTitle()}
- Template: ${getActiveTemplate().label}
${personalContext || "- Work authorization / nationality: not provided"}

What I need from you:
1. Provide only the selected tailored resume sections using exactly these headings so I can paste them back into my tool:
   ${rewriteHeadings.join("\n   ")}
2. Keep project responsibilities in the project bullets. Do not create a separate roles/responsibilities section.
3. Preserve employers, clients, locations, dates, titles, and project boundaries. Improve only wording, ordering, emphasis, and relevance.
${includeCoverLetter ? `4. Also provide a tailored cover letter after the selected resume sections using the heading "${isDe ? "Anschreiben" : "Cover Letter"}". Keep it factual, direct, and aligned to the same job. In the letter body, mark 3-5 strongest impact phrases with **bold markers** only when it improves readability.` : "4. Do not write a cover letter unless I ask for it later."}
${includeCoverLetter ? `5. After the cover letter signature, add a short "${isDe ? "Hervorhebungshinweise" : "Highlight hints"}" section listing the exact words or phrases that should be visually emphasized in the body, for example technologies, ownership, business impact, teamwork, or domain relevance. This hint section is not part of the letter.` : "5. Do not include cover-letter highlight hints."}
6. Do not include recruiter review, analysis, explanations, match scoring, gaps, or notes in the final response. I only want copy-ready sections.

TARGET JOB DESCRIPTION:
${jobDescription}

STABLE RESUME CONTEXT - DO NOT REWRITE, USE ONLY FOR FACTUAL CONTEXT:
${stableResumeContext}

CURRENT SELECTED SECTIONS TO TAILOR:
${currentRewriteSections}
${includeCoverLetter ? `\n\nCURRENT COVER LETTER DRAFT (optional context, improve or replace if useful):\n${currentCoverLetter}` : ""}

Return format:
- Start directly with the first selected resume section heading: ${rewriteHeadings[0]}.
- Output only the selected tailored sections: ${rewriteHeadings.join(", ")}.
${includeCoverLetter ? `- Then output "${isDe ? "Anschreiben" : "Cover Letter"}".` : ""}
${includeCoverLetter ? `- After the cover letter, output "${isDe ? "Hervorhebungshinweise" : "Highlight hints"}" with 3-5 short bullet points. Keep it after the signature so my app can ignore it when applying the letter body.` : ""}
- The selected sections and cover letter must be in the same copy/paste format as the CURRENT SELECTED SECTIONS TO TAILOR and CURRENT COVER LETTER DRAFT sections, so my app can parse them directly.
- Do not include any other headings or commentary except the optional cover-letter highlight hint section.
- Do not wrap the result in markdown code fences.`;
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

async function copyAiPrompt() {
  try {
    const prompt = buildAiTailoringPrompt();
    await copyTextToClipboard(prompt);
    setAiDraftStatus("AI prompt copied. Paste it into ChatGPT.");
  } catch (err) {
    setAiDraftStatus("Copy failed: " + err.message, true);
  }
}

function setAiDraftStatus(message, isError = false) {
  if (!elements.aiDraftStatus) return;
  elements.aiDraftStatus.textContent = message;
  elements.aiDraftStatus.classList.toggle("error", isError);
  setTimeout(() => {
    elements.aiDraftStatus.textContent = "";
    elements.aiDraftStatus.classList.remove("error");
  }, 4000);
}

async function persistAiDrafts() {
  if (!elements.externalResumeDraft || !elements.externalCoverLetterDraft) return;
  const coverLetterContent = state.clFields
    ? coverLetterFieldsToPlainText(state.clFields)
    : elements.externalCoverLetterDraft.value;
  return postJson("/api/ai-drafts", {
    profile_key: elements.profileSelect.value,
    language: state.language,
    resume_content: elements.externalResumeDraft.value,
    cover_letter_content: coverLetterContent,
  });
}

async function saveAiDrafts() {
  if (!elements.externalResumeDraft || !elements.externalCoverLetterDraft) return;
  try {
    await persistAiDrafts();
    setAiDraftStatus("Saved AI drafts to SQLite.");
  } catch (err) {
    setAiDraftStatus("Save failed: " + err.message, true);
  }
}

async function loadAiDrafts() {
  if (!elements.externalResumeDraft || !elements.externalCoverLetterDraft) return;
  try {
    const res = await fetch(`/api/ai-drafts?profile=${elements.profileSelect.value}&language=${state.language}`);
    const drafts = await res.json();
    elements.externalResumeDraft.value = drafts.resume_content || rewriteSectionsToPromptText();
    const coverLetterContent = drafts.cover_letter_content || coverLetterFieldsToPlainText();
    elements.externalCoverLetterDraft.value = coverLetterContent;
    if (coverLetterContent.trim()) {
      state.clFields = coverLetterTextToFields(coverLetterContent);
    }
  } catch (_) {
    elements.externalResumeDraft.value = rewriteSectionsToPromptText();
    const coverLetterContent = coverLetterFieldsToPlainText();
    elements.externalCoverLetterDraft.value = coverLetterContent;
    state.clFields = coverLetterTextToFields(coverLetterContent);
  }
}

async function applyAiDrafts() {
  const rawResumeText = elements.externalResumeDraft?.value || "";
  const combinedDraft = splitCombinedAiDraft(rawResumeText);
  const resumeText = combinedDraft.resumeText || rawResumeText;
  const coverLetterText = combinedDraft.coverLetterText || elements.externalCoverLetterDraft?.value || "";
  if (combinedDraft.coverLetterText && elements.externalCoverLetterDraft) {
    elements.externalCoverLetterDraft.value = combinedDraft.coverLetterText;
  }
  let appliedCount = 0;

  const parsedSections = parseResumeDraft(resumeText);
  const rewriteKeys = getPromptRewriteKeys();
  const hasRecognizedSections = Object.keys(parsedSections).some((key) => rewriteKeys.includes(key));
  if (hasRecognizedSections) {
    rewriteKeys.forEach((key) => {
      if (parsedSections[key]?.trim()) {
        state.tailoredSections[key] = parsedSections[key].trim();
        appliedCount += 1;
      }
    });
  } else {
    const projectContent = normalizeDraftText(resumeText);
    if (projectContent) {
      state.tailoredSections.projects = projectContent;
      appliedCount += 1;
    }
  }

  if (coverLetterText.trim()) {
    state.clFields = coverLetterTextToFields(coverLetterText);
    elements.externalCoverLetterDraft.value = coverLetterFieldsToPlainText(state.clFields);
    appliedCount += 1;
  }

  if (!appliedCount) {
    setAiDraftStatus("Nothing to apply yet. Paste resume or cover letter content first.", true);
    return;
  }

  renderEditor();
  renderPreview();
  if (coverLetterText.trim()) {
    switchTab("coverLetter");
    renderCoverLetterPreview();
  }
  await saveAiDrafts();
  setAiDraftStatus(`Applied ${appliedCount} draft update${appliedCount === 1 ? "" : "s"}.`);
}

function cleanProjectLine(line = "") {
  return line
    .trim()
    .replace(/^[-•]\s*/, "")
    .replace(/\s+/g, " ");
}

function looksLikeProjectMeta(line = "") {
  const cleaned = cleanProjectLine(line);
  const hasSeparators = cleaned.includes("|");
  const hasTimeline =
    /\b(19|20)\d{2}\b/.test(cleaned) ||
    /\b(jan|feb|mär|mar|apr|mai|jun|jul|aug|sep|okt|oct|nov|dez|dec|heute|present)\b/i.test(cleaned);
  const hasRole =
    /\b(engineer|entwickler|consultant|internship|praktikum|lead|architect|full-stack|fullstack|software)\b/i.test(cleaned);
  return hasSeparators && (hasTimeline || hasRole);
}

function renderProjects(projectText) {
  return projectText
    .split("\n\n")
    .map((project) => {
      const lines = project.split("\n").map(cleanProjectLine).filter(Boolean);
      const heading = lines.shift() || "Project";
      const meta = lines.length && looksLikeProjectMeta(lines[0]) ? lines.shift() : "";
      const bullets = lines.map((line) => `<li>${line}</li>`).join("");
      return `
        <div class="project-block">
          <h4>${heading}</h4>
          ${meta ? `<div class="project-meta">${meta}</div>` : ""}
          <ul>${bullets}</ul>
        </div>
      `;
    })
    .join("");
}

// ─── HEADER RENDERER — 5 distinct template layouts ───
function renderHeader(templateKey, personal, title, labels, includePhoto) {
  const photoHtml = `<div class="photo">${state.photoUrl ? `<img src="${state.photoUrl}" alt="Profile photo" />` : labels.photo}</div>`;
  const contactItems = [
    ["Tel", personal.phone],
    ["Email", personal.email],
    [state.language === "de" ? "Ort" : "Location", personal.location],
    ["LinkedIn", personal.linkedin],
    ["GitHub", personal.github],
    ["Web", personal.website],
    [state.language === "de" ? "Status" : "Work auth", personal.visa_type],
    [state.language === "de" ? "Nationalität" : "Nationality", personal.nationality],
  ];
  const contactSpans = contactItems
    .filter(([, value]) => Boolean(value))
    .map(([label, value]) => `<span><strong>${label}:</strong> ${value}</span>`)
    .join("");
  const contactHtml = `<div class="resume-contact">${contactSpans}</div>`;

  // Template 2: Executive Navy — dark banner header
  if (templateKey === "executiveNavy") {
    return `
      <header class="resume-header">
        <div class="resume-identity">
          <h2>${personal.name}</h2>
          <p class="resume-role">${title}</p>
          ${contactHtml}
        </div>
        ${includePhoto ? photoHtml : ""}
      </header>`;
  }

  if (templateKey === "compactTech") {
    return `
      <header class="resume-header compact-tech-header">
        ${includePhoto ? `<div class="header-sidebar-left">${photoHtml}</div>` : ""}
        <div class="resume-identity">
          <h2>${personal.name}</h2>
          <p class="resume-role">${title}</p>
          ${contactHtml}
        </div>
      </header>`;
  }

  // Template 3: Compact Tech — sidebar (contact left, name right)
  if (templateKey === "compactTech") {
    const sidebarContactItems = [
      ["Tel", personal.phone],
      ["Email", personal.email],
      [state.language === "de" ? "Ort" : "Location", personal.location],
      ["LinkedIn", personal.linkedin],
      [state.language === "de" ? "Status" : "Work auth", personal.visa_type],
      [state.language === "de" ? "Nationalität" : "Nationality", personal.nationality],
    ]
      .filter(([, value]) => Boolean(value))
      .map(([label, value]) => `<span><strong>${label}:</strong> ${value}</span>`)
      .join("");
    return `
      <header class="resume-header">
        <div class="header-sidebar-left">
          ${includePhoto ? photoHtml : ""}
          <div class="header-sidebar-contact">${sidebarContactItems}</div>
        </div>
        <div class="resume-identity">
          <h2>${personal.name}</h2>
          <p class="resume-role">${title}</p>
        </div>
      </header>`;
  }

  // Templates 1, 4, 5: Standard — left identity, photo top-right
  return `
    <header class="resume-header">
      <div class="resume-identity">
        <h2>${personal.name}</h2>
        <p class="resume-role">${title}</p>
        ${contactHtml}
      </div>
      ${includePhoto ? photoHtml : ""}
    </header>`;
}

function renderPreview() {
  const template = getActiveTemplate();
  const templateKey = elements.templateSelect.value;
  // includePhoto is now dynamic (rendered inside personalEditor) — read safely
  const includePhoto = elements.includePhoto ? elements.includePhoto.checked : state.includePhoto;
  const profile = getActiveProfile();
  const personal = state.personal;
  const labels = getResumeLabels();
  const title = personal.title || getProfileTitle(profile);
  // Update UI badge (outside the resume page itself)
  if (elements.templateBadge) {
    elements.templateBadge.textContent = template.label + (includePhoto ? " + Foto" : "");
  }
  const resumeClassName = `resume-page ${template.className} ${includePhoto ? "has-photo" : "no-photo"}`;

  const sectionContent = `
    <section class="resume-section">
      <h3>${labels.profile}</h3>
      <p>${state.tailoredSections.profile}</p>
    </section>

    <section class="resume-section">
      <h3>${labels.skills}</h3>
      ${renderSkillsTable(state.tailoredSections.skills)}
    </section>

    <section class="resume-section">
      <h3>${labels.projects}</h3>
      ${renderProjects(state.tailoredSections.projects)}
    </section>

    <section class="resume-section resume-meta-grid">
      <div>
        <h3>${labels.education}</h3>
        ${renderDetailLines(state.tailoredSections.education, ["Ausbildung", "Education"])}
      </div>
      <div>
        <h3>${labels.certifications}</h3>
        ${renderDetailLines(state.tailoredSections.certifications, ["Zertifizierungen", "Zertifikate", "Certifications", "Certificates"])}
      </div>
      <div>
        <h3>${labels.languages}</h3>
        ${renderDetailLines(state.tailoredSections.languages, ["Sprachen", "Languages"], { splitCommaItems: true })}
      </div>
    </section>`;

  // Executive Navy wraps body in padding div (header has negative margins)
  const resumeBody = templateKey === "executiveNavy"
    ? `${renderHeader(templateKey, personal, title, labels, includePhoto)}<div class="resume-body-content">${sectionContent}</div>`
    : `${renderHeader(templateKey, personal, title, labels, includePhoto)}${sectionContent}`;

  elements.resumePreview.className = resumeClassName;
  elements.resumePreview.innerHTML = resumeBody;
  requestAnimationFrame(updateResumePageWarning);
}

function updateResumePageWarning() {
  if (!elements.pageWarning || !elements.resumePreview) return;

  const pageHeight = 1120;
  const pageCount = Math.max(1, Math.ceil(elements.resumePreview.scrollHeight / pageHeight));
  const isTooLong = pageCount > 3;
  elements.pageWarning.hidden = !isTooLong;
  if (!isTooLong) {
    elements.pageWarning.textContent = "";
    return;
  }

  elements.pageWarning.textContent =
    state.language === "de"
      ? `Hinweis: Der Lebenslauf wirkt aktuell ca. ${pageCount} Seiten lang. Für bessere Lesbarkeit und Recruiter-Optimierung bitte auf maximal 3 Seiten kürzen.`
      : `Note: This resume currently looks about ${pageCount} pages long. For better readability and recruiter optimization, reduce it to a maximum of 3 pages.`;
}

// ─── COVER LETTER ───
function generateCoverLetter() {
  const personal = state.personal;
  const jobText = elements.jobDescription.value.trim();
  const profile = getActiveProfile();
  const jobTitle = jobText.split("\n")[0].trim() || (state.language === "de" ? profile.titleDe : profile.title);
  const today = new Date().toLocaleDateString(state.language === "de" ? "de-DE" : "en-GB", {
    day: "numeric", month: "long", year: "numeric",
  });
  const city = (personal.location || "Deutschland").split(",")[0].trim();

  const isDe = state.language === "de";
  const body = isDe
    ? `<p>mit großem Interesse habe ich Ihre Stellenanzeige zur Position <strong>${jobTitle}</strong> gelesen. Als erfahrener ${profile.titleDe || profile.title} bringe ich fundierte Kenntnisse in ${profile.focus.toLowerCase()} mit und bin überzeugt, Ihr Team wirkungsvoll zu verstärken.</p>
<p>In meiner bisherigen Tätigkeit konnte ich umfangreiche Praxiserfahrung in der Entwicklung skalierbarer Anwendungen, der Zusammenarbeit in cross-funktionalen Teams sowie der Umsetzung anspruchsvoller fachlicher Anforderungen sammeln. Ich arbeite strukturiert, übernehme Verantwortung für meine Ergebnisse und halte engen Austausch mit Product Ownern und Stakeholdern.</p>
<p>Besonders interessiert mich die Möglichkeit, meine Erfahrungen in Ihrem Unternehmen einzubringen und gemeinsam qualitativ hochwertige Lösungen zu gestalten. Ich freue mich auf die Gelegenheit, mich persönlich vorzustellen und mehr über die Stelle zu erfahren.</p>`
    : `<p>I am writing to express my strong interest in the <strong>${jobTitle}</strong> position. As an experienced ${profile.title}, I bring hands-on expertise in ${profile.focus.toLowerCase()} and am confident in my ability to make an immediate impact on your team.</p>
<p>Throughout my career, I have delivered scalable applications, collaborated effectively across cross-functional teams, and translated complex business requirements into reliable engineering solutions. I take ownership of results and maintain close alignment with product owners and stakeholders.</p>
<p>I would welcome the opportunity to discuss how my background aligns with your needs. Thank you for your consideration and I look forward to speaking with you.</p>`;

  return {
    senderName: personal.name,
    senderAddress: personal.location || "",
    senderPhone: personal.phone || "",
    senderEmail: personal.email || "",
    dateCity: `${city}, ${today}`,
    recipient: "",
    subject: isDe ? `Bewerbung als ${jobTitle}` : `Application for ${jobTitle}`,
    salutation: isDe ? "Sehr geehrte Damen und Herren," : "Dear Hiring Team,",
    body,
    closing: isDe ? "Mit freundlichen Grüßen" : "Kind regards",
  };
}

// Signature font options
const signatureFonts = [
  { name: "Dancing Script", label: "Elegant" },
  { name: "Caveat", label: "Casual" },
  { name: "Pacifico", label: "Modern" },
  { name: "Pinyon Script", label: "Formal" },
];

function renderCoverLetterPreview() {
  // Use saved editable fields if available, else generate fresh
  if (!state.clFields) {
    state.clFields = generateCoverLetter();
  }
  const cl = state.clFields;
  const sigFont = signatureFonts[state.clSignatureFont] || signatureFonts[0];
  const recipientLines = (cl.recipient || "").split("\n").map((l) => `<div>${l}</div>`).join("");

  // Build signature picker HTML
  const sigPicker = signatureFonts.map((f, i) => `
    <button class="sig-option ${i === state.clSignatureFont ? "sig-active" : ""}"
      data-sig-index="${i}"
      style="font-family:'${f.name}',cursive"
      type="button"
      title="${f.label}">${cl.senderName}</button>
  `).join("");

  elements.coverLetterPreview.innerHTML = `
    <div class="cl-edit-hint print-hidden">✏️ Click any field below to edit it directly.</div>

    <div class="cl-sender">
      <div class="cl-sender-name" contenteditable="true" data-cl-field="senderName">${cl.senderName}</div>
      <p class="cl-sender-address" contenteditable="true" data-cl-field="senderAddress">${cl.senderAddress}</p>
      <p class="cl-sender-contact" contenteditable="true" data-cl-field="senderContact">${cl.senderPhone} | ${cl.senderEmail}</p>
    </div>

    <div class="cl-date-city" contenteditable="true" data-cl-field="dateCity">${cl.dateCity}</div>

    <div class="cl-recipient" contenteditable="true" data-cl-field="recipient">${recipientLines}</div>

    <div class="cl-subject" contenteditable="true" data-cl-field="subject">${cl.subject}</div>

    <div class="cl-salutation" contenteditable="true" data-cl-field="salutation">${cl.salutation}</div>

    <div class="cl-body" contenteditable="true" data-cl-field="body">${cl.body}</div>

    <div class="cl-closing" contenteditable="true" data-cl-field="closing">${cl.closing}</div>

    <div class="cl-signature-block">
      <div class="cl-signature" style="font-family:'${sigFont.name}',cursive" id="clSignatureDisplay">${cl.senderName}</div>
      <div class="sig-picker print-hidden">
        <span class="sig-picker-label">Unterschrift / Signature style:</span>
        <div class="sig-options">${sigPicker}</div>
      </div>
    </div>
  `;

  // Wire contenteditable input → save to state.clFields
  elements.coverLetterPreview.querySelectorAll("[data-cl-field]").forEach((el) => {
    el.addEventListener("input", () => {
      const field = el.dataset.clField;
      state.clFields[field] = field === "body" ? el.innerHTML.trim() : el.innerText.trim();
      if (elements.externalCoverLetterDraft) {
        elements.externalCoverLetterDraft.value = coverLetterFieldsToPlainText(state.clFields);
      }
    });
  });

  // Wire signature picker buttons
  elements.coverLetterPreview.querySelectorAll("[data-sig-index]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.clSignatureFont = Number(btn.dataset.sigIndex);
      // Update active class and signature display without full re-render
      elements.coverLetterPreview.querySelectorAll("[data-sig-index]").forEach((b, i) => {
        b.classList.toggle("sig-active", i === state.clSignatureFont);
      });
      const display = document.getElementById("clSignatureDisplay");
      if (display) {
        const f = signatureFonts[state.clSignatureFont];
        display.style.fontFamily = `'${f.name}', cursive`;
      }
    });
  });
}


function switchTab(tab) {
  state.activeTab = tab;
  const isResume = tab === "resume";
  elements.resumeView.style.display = isResume ? "" : "none";
  elements.coverLetterView.style.display = isResume ? "none" : "";
  elements.tabResume.classList.toggle("is-active", isResume);
  elements.tabCoverLetter.classList.toggle("is-active", !isResume);
  // Body class controls which view prints (see CSS print-resume / print-cover-letter)
  document.body.classList.toggle("print-resume", isResume);
  document.body.classList.toggle("print-cover-letter", !isResume);
  if (!isResume) renderCoverLetterPreview();
}

function resetContent() {
  const preset = getResumePreset();
  state.personal = { ...preset.personal };
  state.photoUrl = "";
  state.tailoredSections = { ...preset.sections };
  renderPersonalEditor();
  renderEditor();
  renderPreview();
}

elements.analyzeJob.addEventListener("click", analyzeJob);
elements.sampleJob.addEventListener("click", () => {
  elements.jobDescription.value = sampleJobDescription;
  analyzeJob();
});
elements.profileSelect.addEventListener("change", async () => {
  state.personal.title = getProfileTitle();
  state.tailoredSections = { ...getResumePreset().sections };
  await loadSavedSectionsForCurrentTarget();
  await loadAiDrafts();
  analyzeJob();
  renderPersonalEditor();
  renderEditor();
  renderPreview();
});
elements.templateSelect.addEventListener("change", renderPreview);
// includePhoto is now inside personalEditor — wired per-render in renderPersonalEditor()
if (elements.includePhoto) elements.includePhoto.addEventListener("change", renderPreview);
elements.resumeLanguage.addEventListener("change", (event) => switchResumeLanguage(event.target.value));
elements.tailorAll.addEventListener("click", tailorAllSections);
function printCurrentDocument() {
  const savedTitle = document.title;
  document.title = " "; // suppress browser print header (date + title)
  window.print();
  setTimeout(() => { document.title = savedTitle; }, 1000);
}

if (elements.printResume) elements.printResume.addEventListener("click", printCurrentDocument);
if (elements.printResumePreview) elements.printResumePreview.addEventListener("click", printCurrentDocument);
elements.resetContent.addEventListener("click", resetContent);

// Tab event listeners
if (elements.tabResume) elements.tabResume.addEventListener("click", () => switchTab("resume"));
if (elements.tabCoverLetter) elements.tabCoverLetter.addEventListener("click", () => switchTab("coverLetter"));
if (elements.generateCoverLetter) {
  elements.generateCoverLetter.addEventListener("click", () => {
    switchTab("coverLetter");
    renderCoverLetterPreview();
  });
}
if (elements.applyAiDrafts) elements.applyAiDrafts.addEventListener("click", applyAiDrafts);
if (elements.saveAiDrafts) elements.saveAiDrafts.addEventListener("click", saveAiDrafts);
if (elements.copyAiPrompt) elements.copyAiPrompt.addEventListener("click", copyAiPrompt);

// ─── EXTERNAL AI IMPORT ───
function getImportSectionKey() {
  return elements.importSectionKey ? elements.importSectionKey.value : "profile";
}

if (elements.applyImport) {
  elements.applyImport.addEventListener("click", () => {
    const key = getImportSectionKey();
    const content = elements.importedContent.value.trim();
    if (!content) return;
    state.tailoredSections[key] = content;
    renderEditor();
    renderPreview();
    setSaveStatus("✅ Applied to resume.");
  });
}

if (elements.compareImport) {
  elements.compareImport.addEventListener("click", () => {
    const key = getImportSectionKey();
    const external = elements.importedContent.value.trim();
    const local = state.tailoredSections[key] || "";
    if (!elements.comparisonPanel) return;
    elements.comparisonPanel.style.display = "";
    elements.comparisonLocal.textContent = local || "(no local content yet)";
    elements.comparisonExternal.textContent = external || "(nothing pasted)";
    if (elements.comparisonSectionLabel) {
      elements.comparisonSectionLabel.textContent = `— ${sectionLabel(key)}`;
    }
    elements.comparisonPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

if (elements.clearImport) {
  elements.clearImport.addEventListener("click", () => {
    elements.importedContent.value = "";
    if (elements.comparisonPanel) elements.comparisonPanel.style.display = "none";
  });
}

if (elements.applyExternalBtn) {
  elements.applyExternalBtn.addEventListener("click", () => {
    const key = getImportSectionKey();
    const content = elements.comparisonExternal.textContent.trim();
    if (!content || content === "(nothing pasted)") return;
    state.tailoredSections[key] = content;
    renderEditor();
    renderPreview();
    if (elements.comparisonPanel) elements.comparisonPanel.style.display = "none";
    setSaveStatus("✅ External AI content applied.");
  });
}

if (elements.saveImportedContent) {
  elements.saveImportedContent.addEventListener("click", async () => {
    const key = getImportSectionKey();
    const content = elements.importedContent.value.trim();
    if (!content) return;
    await fetch("/api/content", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        profile_key: "external-" + elements.profileSelect.value,
        language: state.language,
        sections: { [key]: content },
      }),
    });
    setSaveStatus("✅ External content saved to DB.");
  });
}

// ─── SAVE / LOAD DATA ───
function setSaveStatus(msg, isError = false) {
  const targets = [elements.saveStatus, elements.inlineSaveStatus].filter(Boolean);
  if (!targets.length) return;
  targets.forEach((target) => {
    target.textContent = msg;
    target.classList.toggle("error", isError);
  });
  setTimeout(() => {
    targets.forEach((target) => {
      target.textContent = "";
      target.classList.remove("error");
    });
  }, 4000);
}

async function saveAllData() {
  try {
    const activeSections = getActiveSections();
    // Save personal details
    await persistPersonal();
    await persistAiDrafts();
    // Save all tailored sections for current profile + language
    await postJson("/api/sections", {
      profile_key: elements.profileSelect.value,
      language: state.language,
      sections: activeSections,
    });
    // Save application snapshot
    const jobText = elements.jobDescription.value.trim();
    let jobId = null;
    if (jobText) {
      const jobData = await postJson("/api/jobs", {
        title: jobText.split("\n")[0].slice(0, 120),
        company: "",
        raw_text: jobText,
        keywords: state.jobKeywords,
      });
      jobId = jobData.id || null;
    }
    await postJson("/api/applications", {
      job_id: jobId,
      profile_key: elements.profileSelect.value,
      template_key: elements.templateSelect.value,
      language: state.language,
      include_photo: state.includePhoto,
      personal: { ...state.personal, photo_url: state.photoUrl },
      sections: activeSections,
      cover_letter: coverLetterFieldsToPlainText(state.clFields || coverLetterTextToFields(elements.externalCoverLetterDraft?.value || "")),
      notes: "",
    });
    setSaveStatus("✅ All data saved to local SQLite DB.");
  } catch (err) {
    setSaveStatus("❌ Save failed: " + err.message, true);
  }
}

async function loadSavedData() {
  try {
    // Load personal
    const personalRes = await fetch("/api/personal");
    const personal = await personalRes.json();
    if (personal && personal.name) {
      state.personal = {
        name: personal.name || "",
        title: personal.title || "",
        phone: personal.phone || "",
        email: personal.email || "",
        location: personal.location || "",
        linkedin: personal.linkedin || "",
        github: personal.github || "",
        website: personal.website || "",
        visa_type: personal.visa_type || "",
        nationality: personal.nationality || "",
      };
      if (personal.photo_url) state.photoUrl = personal.photo_url;
      if (personal.include_photo !== undefined) state.includePhoto = !!personal.include_photo;
    }
    // Load saved resume sections for current profile + language
    await loadSavedSectionsForCurrentTarget();
    await loadAiDrafts();
    renderPersonalEditor();
    renderEditor();
    renderPreview();
    setSaveStatus("✅ Data loaded from local DB.");
  } catch (err) {
    setSaveStatus("❌ Load failed: " + err.message, true);
  }
}

if (elements.saveAllData) elements.saveAllData.addEventListener("click", saveAllData);
if (elements.saveAllInline) elements.saveAllInline.addEventListener("click", saveAllData);
if (elements.loadSavedData) elements.loadSavedData.addEventListener("click", loadSavedData);

// ─── INIT ───
// Auto-load saved data on startup
(async () => {
  try {
    const personalRes = await fetch("/api/personal");
    const personal = await personalRes.json();
    if (personal && personal.name) {
      state.personal = {
        name: personal.name || state.personal.name,
        title: personal.title || state.personal.title,
        phone: personal.phone || state.personal.phone,
        email: personal.email || state.personal.email,
        location: personal.location || state.personal.location,
        linkedin: personal.linkedin || state.personal.linkedin,
        github: personal.github || state.personal.github,
        website: personal.website || state.personal.website,
        visa_type: personal.visa_type || state.personal.visa_type,
        nationality: personal.nationality || state.personal.nationality,
      };
      if (personal.photo_url) state.photoUrl = personal.photo_url;
      if (personal.include_photo !== undefined) state.includePhoto = !!personal.include_photo;
    }
    await loadSavedSectionsForCurrentTarget();
    await loadAiDrafts();
  } catch (_) { /* no saved data yet, use defaults */ }
  renderPersonalEditor();
  renderEditor();
  renderPreview();
})();
