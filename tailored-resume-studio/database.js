"use strict";

const Database = require("better-sqlite3");
const path = require("node:path");

const DB_PATH = path.join(__dirname, "resume_studio.db");
const db = new Database(DB_PATH);

// Improve write performance
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

// ─── SCHEMA ───────────────────────────────────────────────────────────────────

db.exec(`
  CREATE TABLE IF NOT EXISTS personal_details (
    id        INTEGER PRIMARY KEY CHECK (id = 1),
    name      TEXT NOT NULL DEFAULT '',
    title     TEXT NOT NULL DEFAULT '',
    phone     TEXT NOT NULL DEFAULT '',
    email     TEXT NOT NULL DEFAULT '',
    location  TEXT NOT NULL DEFAULT '',
    linkedin  TEXT NOT NULL DEFAULT '',
    github    TEXT NOT NULL DEFAULT '',
    website   TEXT NOT NULL DEFAULT '',
    visa_type TEXT NOT NULL DEFAULT '',
    nationality TEXT NOT NULL DEFAULT '',
    availability TEXT NOT NULL DEFAULT '',
    photo_url TEXT NOT NULL DEFAULT '',
    updated_at TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS resume_sections (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    profile_key TEXT NOT NULL DEFAULT 'fullstack',
    language    TEXT NOT NULL DEFAULT 'de',
    section_key TEXT NOT NULL,
    content     TEXT NOT NULL DEFAULT '',
    updated_at  TEXT NOT NULL DEFAULT (datetime('now')),
    UNIQUE (profile_key, language, section_key)
  );

  CREATE TABLE IF NOT EXISTS job_descriptions (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    title       TEXT NOT NULL DEFAULT '',
    company     TEXT NOT NULL DEFAULT '',
    raw_text    TEXT NOT NULL DEFAULT '',
    keywords    TEXT NOT NULL DEFAULT '[]',
    created_at  TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS application_versions (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    job_id          INTEGER REFERENCES job_descriptions(id) ON DELETE SET NULL,
    profile_key     TEXT NOT NULL DEFAULT 'fullstack',
    template_key    TEXT NOT NULL DEFAULT 'classicBlue',
    language        TEXT NOT NULL DEFAULT 'de',
    include_photo   INTEGER NOT NULL DEFAULT 1,
    personal_json   TEXT NOT NULL DEFAULT '{}',
    sections_json   TEXT NOT NULL DEFAULT '{}',
    cover_letter    TEXT NOT NULL DEFAULT '',
    notes           TEXT NOT NULL DEFAULT '',
    created_at      TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS cover_letters (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    job_id      INTEGER REFERENCES job_descriptions(id) ON DELETE SET NULL,
    language    TEXT NOT NULL DEFAULT 'de',
    content     TEXT NOT NULL DEFAULT '',
    created_at  TEXT NOT NULL DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS ai_drafts (
    profile_key          TEXT NOT NULL DEFAULT 'fullstack',
    language             TEXT NOT NULL DEFAULT 'de',
    resume_content       TEXT NOT NULL DEFAULT '',
    cover_letter_content TEXT NOT NULL DEFAULT '',
    updated_at           TEXT NOT NULL DEFAULT (datetime('now')),
    PRIMARY KEY (profile_key, language)
  );
`);

// ─── MIGRATIONS ─────────────────────────────────────────────────────────────
// Safely add columns that may not exist in older DB files
(function runMigrations() {
  const cols = db.prepare("PRAGMA table_info(personal_details)").all().map((c) => c.name);
  if (!cols.includes("include_photo")) {
    db.exec("ALTER TABLE personal_details ADD COLUMN include_photo INTEGER NOT NULL DEFAULT 0");
  }
  if (!cols.includes("visa_type")) {
    db.exec("ALTER TABLE personal_details ADD COLUMN visa_type TEXT NOT NULL DEFAULT ''");
  }
  if (!cols.includes("nationality")) {
    db.exec("ALTER TABLE personal_details ADD COLUMN nationality TEXT NOT NULL DEFAULT ''");
  }
  if (!cols.includes("availability")) {
    db.exec("ALTER TABLE personal_details ADD COLUMN availability TEXT NOT NULL DEFAULT 'Sofort'");
  }
})();

// ─── PERSONAL DETAILS ─────────────────────────────────────────────────────────

function getPersonal() {
  return db.prepare("SELECT * FROM personal_details WHERE id = 1").get() || {};
}

function savePersonal(data) {
  const existing = db.prepare("SELECT id FROM personal_details WHERE id = 1").get();
  const includePhoto = data.include_photo ? 1 : 0;
  if (existing) {
    db.prepare(`
      UPDATE personal_details SET
        name = ?, title = ?, phone = ?, email = ?, location = ?,
        linkedin = ?, github = ?, website = ?, visa_type = ?, nationality = ?,
        availability = ?, photo_url = ?, include_photo = ?,
        updated_at = datetime('now')
      WHERE id = 1
    `).run(
      data.name || "", data.title || "", data.phone || "",
      data.email || "", data.location || "", data.linkedin || "",
      data.github || "", data.website || "", data.visa_type || "",
      data.nationality || "", data.availability || "", data.photo_url || "", includePhoto
    );
  } else {
    db.prepare(`
      INSERT INTO personal_details (id, name, title, phone, email, location, linkedin, github, website, visa_type, nationality, availability, photo_url, include_photo)
      VALUES (1, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      data.name || "", data.title || "", data.phone || "",
      data.email || "", data.location || "", data.linkedin || "",
      data.github || "", data.website || "", data.visa_type || "",
      data.nationality || "", data.availability || "", data.photo_url || "", includePhoto
    );
  }
  return getPersonal();
}

// ─── RESUME SECTIONS ──────────────────────────────────────────────────────────

function getSections(profileKey, language) {
  const rows = db.prepare(
    "SELECT section_key, content FROM resume_sections WHERE profile_key = ? AND language = ?"
  ).all(profileKey || "fullstack", language || "de");
  return Object.fromEntries(rows.map((r) => [r.section_key, r.content]));
}

function saveSection(profileKey, language, sectionKey, content) {
  db.prepare(`
    INSERT INTO resume_sections (profile_key, language, section_key, content, updated_at)
    VALUES (?, ?, ?, ?, datetime('now'))
    ON CONFLICT (profile_key, language, section_key)
    DO UPDATE SET content = excluded.content, updated_at = excluded.updated_at
  `).run(profileKey || "fullstack", language || "de", sectionKey, content || "");
}

function saveSections(profileKey, language, sectionsObj) {
  const saveMany = db.transaction((entries) => {
    for (const [key, value] of entries) {
      saveSection(profileKey, language, key, value);
    }
  });
  saveMany(Object.entries(sectionsObj));
}

// ─── JOB DESCRIPTIONS ─────────────────────────────────────────────────────────

function listJobs() {
  return db.prepare(
    "SELECT id, title, company, created_at FROM job_descriptions ORDER BY created_at DESC LIMIT 50"
  ).all();
}

function saveJob(data) {
  const result = db.prepare(`
    INSERT INTO job_descriptions (title, company, raw_text, keywords)
    VALUES (?, ?, ?, ?)
  `).run(
    data.title || "Untitled",
    data.company || "",
    data.raw_text || "",
    JSON.stringify(data.keywords || [])
  );
  return { id: result.lastInsertRowid };
}

function getJob(id) {
  return db.prepare("SELECT * FROM job_descriptions WHERE id = ?").get(id);
}

// ─── APPLICATION VERSIONS (SNAPSHOTS) ────────────────────────────────────────

function listApplications() {
  return db.prepare(`
    SELECT av.id, av.profile_key, av.template_key, av.language, av.created_at,
           jd.title AS job_title, jd.company
    FROM application_versions av
    LEFT JOIN job_descriptions jd ON jd.id = av.job_id
    ORDER BY av.created_at DESC LIMIT 100
  `).all();
}

function saveApplication(data) {
  const result = db.prepare(`
    INSERT INTO application_versions
      (job_id, profile_key, template_key, language, include_photo, personal_json, sections_json, cover_letter, notes)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    data.job_id || null,
    data.profile_key || "fullstack",
    data.template_key || "classicBlue",
    data.language || "de",
    data.include_photo ? 1 : 0,
    JSON.stringify(data.personal || {}),
    JSON.stringify(data.sections || {}),
    data.cover_letter || "",
    data.notes || ""
  );
  return { id: result.lastInsertRowid };
}

function getApplication(id) {
  const row = db.prepare("SELECT * FROM application_versions WHERE id = ?").get(id);
  if (!row) return null;
  return {
    ...row,
    personal: JSON.parse(row.personal_json || "{}"),
    sections: JSON.parse(row.sections_json || "{}"),
  };
}

// ─── COVER LETTERS ────────────────────────────────────────────────────────────

function saveCoverLetter(jobId, language, content) {
  const result = db.prepare(
    "INSERT INTO cover_letters (job_id, language, content) VALUES (?, ?, ?)"
  ).run(jobId || null, language || "de", content || "");
  return { id: result.lastInsertRowid };
}

// AI draft paste area
function getAiDraft(profileKey, language) {
  return db.prepare(
    "SELECT * FROM ai_drafts WHERE profile_key = ? AND language = ?"
  ).get(profileKey || "fullstack", language || "de") || {};
}

function saveAiDraft(data) {
  db.prepare(`
    INSERT INTO ai_drafts (profile_key, language, resume_content, cover_letter_content, updated_at)
    VALUES (?, ?, ?, ?, datetime('now'))
    ON CONFLICT (profile_key, language)
    DO UPDATE SET
      resume_content = excluded.resume_content,
      cover_letter_content = excluded.cover_letter_content,
      updated_at = excluded.updated_at
  `).run(
    data.profile_key || "fullstack",
    data.language || "de",
    data.resume_content || "",
    data.cover_letter_content || ""
  );
  return getAiDraft(data.profile_key, data.language);
}

module.exports = {
  getPersonal, savePersonal,
  getSections, saveSection, saveSections,
  listJobs, saveJob, getJob,
  listApplications, saveApplication, getApplication,
  saveCoverLetter,
  getAiDraft, saveAiDraft,
};
