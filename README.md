# Tailored Resume Studio

Tailored Resume Studio is a local resume and cover-letter tailoring app for faster German job applications. It helps you paste a job description, analyze the role focus, tailor selected CV sections, edit everything manually when needed, preview the final German CV or cover letter, and export clean PDFs from the browser.

The app is designed for a section-first workflow: stable information such as personal details, education, languages, certifications, photo, LinkedIn, GitHub, and visa/work status can stay saved locally, while frequently changing sections such as Kurzprofil, Technische Kenntnisse, Projekterfahrung, and Anschreiben can be tailored for each job.

## Features

- German-first CV and cover-letter workflow with optional English preview.
- Five German resume templates: Classic Blue ATS, Executive Navy, Compact Technical, Modern Azure, and Minimal Slate.
- Optional photo display with automatic preview fitting.
- Editable personal information, links, visa/work status, nationality, profile, skills, projects, education, certifications, and languages.
- Job description analysis for keywords, recommended focus, match score, and German-language dependency warnings.
- ChatGPT prompt generator that combines job description, selected resume sections, and optional cover-letter context.
- Paste tailored ChatGPT output back into resume sections and cover-letter draft areas.
- Local SQLite persistence for saved profile and section data.
- Browser-based PDF export for Lebenslauf and Anschreiben.
- Optional OpenAI API support through a local `.env` file.

## Project Structure

```text
tailored-resume/
  README.md
  RESUME_AUTOMATION_PLAN.md
  .env.example
  .gitignore
  tailored-resume-studio/
    app.js
    database.js
    index.html
    package.json
    package-lock.json
    server.js
    styles.css
```

Local private data is intentionally ignored by Git, including `.env`, SQLite database files, generated PDFs, browser profiles, and `node_modules`.

## Requirements

- Node.js 18 or newer.
- npm.
- A modern browser such as Chrome, Edge, or Firefox.
- Optional: OpenAI API key if you want built-in AI tailoring from the local server.

## Install

From the repository root:

```powershell
cd tailored-resume-studio
npm install
```

## Run Locally

Start the local server:

```powershell
npm start
```

Open the app:

```text
http://localhost:5178
```

If you only want the static rule-based UI, you can also run:

```powershell
cd tailored-resume-studio
python -m http.server 5172
```

Then open:

```text
http://localhost:5172
```

The Node server is recommended because it supports SQLite saving and optional AI features.

## Configure AI Safely

Create a local `.env` file in the repository root, next to `.env.example`.

```text
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-5.5
PORT=5178
```

Do not commit `.env`. It is already ignored by `.gitignore`.

If no `OPENAI_API_KEY` is configured, the app still works in rule-based mode and you can use the "Copy AI prompt for ChatGPT" workflow.

## How To Use

1. Paste the full job description into the "Job Description" box.
2. Click "Analyze job" to detect role keywords, recommended focus, match score, and German-market dependency.
3. Select the resume profile, template, language, and photo option.
4. Review or edit personal details, links, visa/work status, nationality, photo, Kurzprofil, skills, project experience, education, certifications, and languages.
5. Use "Copy AI prompt for ChatGPT" if you want ChatGPT to tailor only the selected changing sections.
6. Paste ChatGPT's selected resume sections into "Selected resume sections from ChatGPT".
7. Paste ChatGPT's cover letter into "Cover letter content from ChatGPT".
8. Click "Apply AI drafts" to update the editable sections and previews.
9. Use "Save Data" or "Save All" to store your current profile and sections in the local SQLite database.
10. Use the "Lebenslauf" and "Anschreiben" tabs to check the live preview.
11. Click "Print / PDF" and choose "Save as PDF" in the browser print dialog.

## Recommended Tailoring Workflow

For each new job:

1. Keep stable sections saved locally: personal details, photo, education, certifications, languages, links, and work authorization.
2. Paste the new job description.
3. Analyze the job.
4. Copy the generated AI prompt.
5. Ask ChatGPT or the OpenAI API to return only the same section names used by the app.
6. Paste the tailored project/profile/skills content and cover letter back into the app.
7. Make final manual edits section by section.
8. Export the CV and cover letter as PDFs.

This avoids repeatedly rebuilding the whole resume and keeps the formatting controlled by the app.

## PDF Export Tips

- Use Chrome or Edge for the most consistent print preview.
- Choose "Save as PDF".
- Disable browser headers and footers if the option appears.
- Keep background graphics enabled if the selected template uses colored headings or table styling.
- Try to keep the CV within three pages for readability.
- If the preview warning says the CV is too long, reduce lower-priority project bullets first.

## Data And Privacy

This app is intended to run locally. Your saved resume data is stored in a local SQLite database file under `tailored-resume-studio/`. The database is ignored by Git.

Never commit:

- `.env`
- `resume_studio.db`
- generated PDFs
- uploaded photos
- browser profile folders
- `outputs/`
- `node_modules/`

Only `.env.example` should be committed as the safe environment variable template.

## Useful Commands

```powershell
cd tailored-resume-studio
npm install
npm start
```

Check JavaScript syntax:

```powershell
node --check app.js
node --check server.js
```

Check Git status:

```powershell
git status --short
```

## Current Scope

This is a local MVP focused on productivity for job applications. It is not yet a hosted multi-user website. Before making it public for other users, consider adding authentication, encrypted storage, file upload cleanup, stronger validation, and production-grade PDF generation.
