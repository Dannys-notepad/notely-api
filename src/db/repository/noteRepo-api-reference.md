# note.repo.js — API Reference

## Import

```js
const notesStore = require("../db/repository/note.repo");
```

## Methods

### `create(title, content)`
Creates a new note.
- **Parameters:** `title` (string), `content` (string)
- **Returns:** the created note `{ id, title, content, createdAt, updatedAt }`

### `getAll()`
Gets all notes.
- **Parameters:** none
- **Returns:** an array of notes

### `getById(id)`
Gets a single note.
- **Parameters:** `id` (string)
- **Returns:** the note, or `undefined` if not found

### `update(id, title, content)`
Updates a note. Pass `null` for `title` or `content` to leave it unchanged.
- **Parameters:** `id` (string), `title` (string or null), `content` (string or null)
- **Returns:** the updated note, or `null` if not found

### `remove(id)`
Deletes a note.
- **Parameters:** `id` (string)
- **Returns:** `true` if deleted, `false` if not found
