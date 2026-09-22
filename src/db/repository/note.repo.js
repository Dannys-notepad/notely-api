const crypto = require("crypto");

function generateId() {
  return crypto.randomBytes(8).toString("hex");
}

function createNotesStore(db) {
  return {
    create(title, content) {
      const id = generateId();
      const now = new Date().toISOString();

      const stmt = db.prepare(`
        INSERT INTO notes (id, title, content, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?)
      `);
      stmt.run(id, title, content, now, now);

      return { id, title, content, createdAt: now, updatedAt: now };
    },

    getAll() {
      return db.prepare(`SELECT * FROM notes`).all();
    },

    getById(id) {
      return db.prepare(`SELECT * FROM notes WHERE id = ?`).get(id);
      // .get() returns one row, or undefined if not found
    },

    update(id, title, content) {
      const existing = this.getById(id);
      if (!existing) return null;

      const newTitle = title || existing.title;
      const newContent = content || existing.content;
      const now = new Date().toISOString();

      db.prepare(`
        UPDATE notes SET title = ?, content = ?, updatedAt = ?
        WHERE id = ?
      `).run(newTitle, newContent, now, id);

      return this.getById(id);
    },

    remove(id) {
      const result = db.prepare(`DELETE FROM notes WHERE id = ?`).run(id);
      return result.changes > 0; // true if a row was actually deleted
    },
  };
}

module.exports = { createNotesStore };