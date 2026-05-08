# Resume Automation Plan

## Goal

Increase job application productivity by turning resume tailoring into a repeatable workflow:

1. Open a job description, for example StepStone.
2. Capture the full job description.
3. Select a target resume type and template.
4. Let AI tailor each section against the job.
5. Review and edit sections inline.
6. Export a consistent PDF or DOCX without fighting layout.

The important design decision is that AI should not generate the final PDF directly. AI should generate structured section content. A deterministic renderer should generate the final resume from templates.

## Recommended Product Shape

Build a local web app called `tailored-resume-studio`.

The app should have these main screens:

- Job intake: paste a job description or capture it from a browser page.
- Resume profile selector: backend, frontend, fullstack, team lead, architect, UAE, Germany, photo, no-photo.
- Section tailoring workspace: LinkedIn-style section-by-section editing.
- Template preview: live resume preview with strict layout rules.
- Export center: PDF, DOCX, and saved application version.

## Core Workflow

### 1. Capture Job Description

The first version can support paste-in text. Later, add a browser extension or bookmarklet for StepStone.

Captured job data should be normalized into:

- job title
- company
- location
- contract type
- required skills
- preferred skills
- responsibilities
- language requirements
- seniority signals
- domain keywords
- full original text

### 2. Match Against Resume Master Data

Keep one master resume database with reusable records:

- personal details
- profile summaries
- professional skills
- technical skills
- languages
- certifications
- education
- projects
- project roles
- project responsibilities
- project technologies
- achievements
- links such as GitHub, LinkedIn, website
- photo variants

The app should never require manually retyping the same project details again.

### 3. AI Tailor Each Section

AI should work section by section, with clear constraints:

- rewrite `Kurzprofil` for the target job
- reorder technical skills by relevance
- select strongest project responsibilities
- highlight matching technologies
- reduce unrelated details
- produce German or English output based on target
- preserve truthful experience only
- keep text within template length limits

Each section should show:

- original master content
- AI tailored version
- matching keywords from job description
- missing keywords or gaps
- quick actions: shorter, stronger, more technical, more leadership focused, more German, more ATS friendly

### 4. Human Review

You stay in control before export.

Every AI-generated section should be editable inline. The final resume version should be saved as an application-specific snapshot so future changes do not overwrite what you already submitted.

### 5. Deterministic Export

Use fixed templates for layout. Recommended formats:

- HTML/CSS templates for accurate PDF export
- DOCX templates only if recruiter portals require Word
- PDF generated through Playwright or a similar renderer

This avoids the current problem where ChatGPT changes spacing, layout, or formatting unpredictably.

## Data Model

Recommended tables or JSON collections:

- `personal_details`
- `links`
- `languages`
- `certifications`
- `skills`
- `projects`
- `project_roles`
- `project_responsibilities`
- `project_technologies`
- `resume_profiles`
- `templates`
- `job_descriptions`
- `application_versions`
- `generated_sections`

Important idea: store projects once, then generate different views from them.

For example:

- Backend resume emphasizes Java, Spring Boot, APIs, databases, cloud integration.
- Frontend resume emphasizes Angular, React, UI architecture, accessibility, responsive design.
- Fullstack resume balances frontend, backend, APIs, deployment, ownership.
- Team lead resume emphasizes mentoring, planning, delivery, stakeholder communication.
- Architect resume emphasizes system design, migration, integration, non-functional requirements.

## Template Strategy

Five templates are implemented, each with a **distinct header layout**:

| Template | Key | Header Style |
|---|---|---|
| DE Classic Blue ATS | `classicBlue` | Left name + contact, photo top-right square |
| DE Executive Navy | `executiveNavy` | Dark navy banner, white name, contact in banner, photo right |
| DE Compact Technical | `compactTech` | Sidebar left (photo + contact stacked), name right |
| DE Modern Azure | `modernAzure` | Large name, pill-style contact badges, circular photo |
| DE Minimal Slate | `minimalSlate` | Thin/light name, dot-separated contact inline, grayscale photo |

**Personal info alignment**: All templates use **left-aligned** personal info. Photo is always on the **right** (or sidebar-left for compactTech). The old centered layout has been removed.

Each template also defines:

- section order
- max length per section
- whether photo is visible
- whether links are visible
- page break rules
- skill grouping rules
- project count limits

The templates should be strict so the resume always fits cleanly.

## AI Design

Use AI for content decisions, not layout decisions.

AI tasks:

- extract job requirements
- score project relevance
- suggest section rewrites
- generate role-specific profile summary
- compress project descriptions
- tailor responsibilities
- suggest missing but truthful keywords
- translate between English and German

Renderer tasks:

- page layout
- spacing
- font sizes
- columns
- page breaks
- photo placement
- export

This split is the most important part of the system.

## Recommended MVP

### Phase 1: Local Resume Generator

Build:

- master resume data in JSON or SQLite
- one or two HTML templates
- PDF export
- manual job description paste
- backend/fullstack/team-lead profile presets

This should already reduce resume creation time heavily.

### Phase 2: AI Section Tailoring

Add:

- job description parser
- section-level AI rewrite
- keyword match view
- section accept/reject/edit workflow
- saved application versions

### Phase 3: Browser Capture

Add:

- StepStone bookmarklet or extension
- one-click job capture
- job metadata extraction
- direct open in resume studio

### Phase 4: Advanced Productivity ✅ (partially implemented)

Completed:

- ✅ Cover letter generation (rule-based + AI via `/api/cover-letter`)
- ✅ Anschreiben tab — separate preview, separate print page via body class
- ✅ SQLite local DB — personal, sections, jobs, application snapshots, external AI content
- ✅ Auto-load saved data on startup
- ✅ External AI content import — paste from ChatGPT/Claude, compare side-by-side, apply to resume
- ✅ 5 distinct template header layouts

Still to add:

- application tracker with list view
- LinkedIn profile alignment
- company-specific tone adjustment
- DOCX export

## Technology Recommendation

Best practical stack:

- Next.js or Vite React for the app UI
- SQLite for local data
- JSON import/export for backups
- Playwright for PDF generation
- DOCX template generation using a DOCX library
- OpenAI API or compatible model provider for section tailoring

If keeping it simpler:

- Google Sheets as master data
- small Node.js or Python generator
- HTML templates
- PDF export

## Google Sheets vs Custom App

Google Sheets is good for storing master data.

Google Sheets alone is not enough for the full workflow because:

- it does not solve layout consistency
- section-by-section AI review is awkward
- PDF generation is still manual
- template switching becomes messy
- application-specific snapshots are hard to manage

Recommended compromise:

- use Google Sheets only if you want easy data editing
- use the resume app for tailoring, preview, and export

## Biggest Productivity Wins

The highest value features are:

- one master project database
- reusable resume profiles
- section-level AI tailoring
- fixed templates
- live PDF preview
- saved versions per job application
- one-click export

These directly address the current issue: too many manual edits and too many AI formatting iterations.

## Success Criteria

The system is successful if:

- one tailored resume takes 5 to 10 minutes instead of 45 to 90 minutes
- formatting does not require manual fixing
- each application has a saved resume version
- backend/frontend/fullstack/lead templates are generated from the same master data
- you can apply to more jobs per day without lowering quality

## Final Recommendation

Build the custom workflow, but keep the first version small.

The best first version is:

- paste StepStone job description
- choose resume profile
- choose photo or no-photo template
- AI tailor section by section
- edit inline
- export PDF

That is enough to solve the real bottleneck before adding browser automation, application tracking, or advanced analytics.
