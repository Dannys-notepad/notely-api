import { describe, it, expect, beforeEach } from "vitest";
import Database from "better-sqlite3";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { createSchema } = require("../db/database.js");
const { createNotesStore } = require("../db/repository/note.repo.js");

let db;
let notesStore;

// Runs before every single test — gives each test a clean, empty,
// in-memory database so tests can't affect each other.
beforeEach(() => {
  db = new Database(":memory:"); // lives only in RAM, never touches disk
  createSchema(db);
  notesStore = createNotesStore(db);
});

describe("notesStore", () => {
  it("creates a note", () => {
    const note = notesStore.create("Title", "Content");

    expect(note.title).toBe("Title");
    expect(note.content).toBe("Content");
    expect(note.id).toBeDefined();
    expect(note.createdAt).toBeDefined();
  });

  it("returns all notes", () => {
    notesStore.create("First", "One");
    notesStore.create("Second", "Two");

    const all = notesStore.getAll();
    expect(all.length).toBe(2);
  });

  it("gets a note by id", () => {
    const created = notesStore.create("Title", "Content");
    const found = notesStore.getById(created.id);

    expect(found).toBeDefined();
    expect(found.id).toBe(created.id);
  });

  it("returns undefined for a non-existent id", () => {
    const found = notesStore.getById("does-not-exist");
    expect(found).toBeUndefined();
  });

  it("updates a note", () => {
    const created = notesStore.create("Old Title", "Old Content");
    const updated = notesStore.update(created.id, "New Title", null);

    expect(updated.title).toBe("New Title");
    expect(updated.content).toBe("Old Content"); // unchanged, since we passed null
  });

  it("returns null when updating a non-existent note", () => {
    const result = notesStore.update("fake-id", "Title", "Content");
    expect(result).toBeNull();
  });

  it("deletes a note", () => {
    const created = notesStore.create("Title", "Content");
    const wasDeleted = notesStore.remove(created.id);

    expect(wasDeleted).toBe(true);
    expect(notesStore.getById(created.id)).toBeUndefined();
  });

  it("returns false when deleting a non-existent note", () => {
    const wasDeleted = notesStore.remove("fake-id");
    expect(wasDeleted).toBe(false);
  });
});