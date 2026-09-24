import { describe, it, expect, beforeEach } from "vitest";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { db } = require("../db/database.js");
const { createNotesStore } = require("../db/repository/note.repo.js");
const { getAllNotes, getNoteById } = require("../controllers/note.controller.js");

const notesStore = createNotesStore(db);

function createMockRes() {
  const res = {};
  res.statusCode = 200;
  res.body = null;

  res.status = (code) => {
    res.statusCode = code;
    return res;
  };

  res.json = (data) => {
    res.body = data;
    return res;
  };

  return res;
}

describe("GET Note Controllers", () => {
  let createdNote;

  beforeEach(() => {
    createdNote = notesStore.create("Test Title", "Test Content");
  });

  it("getAllNotes returns all notes with status 200", async () => {
    const req = {};
    const res = createMockRes();
    const next = () => { };

    await getAllNotes(req, res, next);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Notes retrieved successfully");
    expect(Array.isArray(res.body.details.notes)).toBe(true);
    expect(res.body.details.notes.length).toBeGreaterThan(0);
  });

  it("getNoteById returns note with status 200 when note exists", async () => {
    const req = { params: { id: createdNote.id } };
    const res = createMockRes();
    const next = () => { };

    await getNoteById(req, res, next);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Note retrieved successfully");
    expect(res.body.details.note).toBeDefined();
    expect(res.body.details.note.id).toBe(createdNote.id);
  });

  it("getNoteById returns status 404 when note does not exist", async () => {
    const req = { params: { id: "non-existent-id-999" } };
    const res = createMockRes();
    const next = () => { };

    await getNoteById(req, res, next);

    expect(res.statusCode).toBe(404);
    expect(res.body.message).toBe("Note not found");
  });
});
