# Tailored Resume Studio

Local MVP for section-based resume tailoring.

## Run Locally

Rule-based mode, from this folder:

```powershell
python -m http.server 5172
```

Open:

```text
http://localhost:5172
```

AI tailoring mode, from this folder:

```powershell
node server.js
```

Open:

```text
http://localhost:5178
```

Optional model override:

Create a local `.env` file in the project root. Do not commit `.env`.

```text
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-5.5
PORT=5178
```

Use `.env.example` as the safe template for GitHub.

## Current MVP

- Paste a job description.
- Analyze detected role keywords.
- Choose backend, frontend, fullstack, team lead, or architect profile.
- Choose photo or no-photo template.
- Tailor sections one by one or all at once.
- Edit every generated section inline.
- Preview the final resume.
- Print or save as PDF from the browser.
- Optional OpenAI API section tailoring through the local Node server.

## Next Practical Improvements

- Replace starter resume data with the real resume master database.
- Add import from DOCX/PDF into structured JSON.
- Add real AI section tailoring with OpenAI API.
- Add application snapshots per job.
- Add DOCX export.
- Add StepStone browser capture.
