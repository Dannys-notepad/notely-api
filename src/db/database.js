const Database = require("better-sqlite3");
const path = require("path");

function createSchema(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS notes (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    )
  `);
}


// This creates (or opens, if it already exists) a file called notely.db
// in the project folder. That file IS the project's database.
const db = new Database(path.join(__dirname, "notely.db"));
createSchema(db);

module.exports = { db, createSchema };