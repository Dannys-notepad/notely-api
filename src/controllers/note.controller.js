const { db } = require('../db/database.js');
const { createNotesStore } = require('../db/repository/note.repo.js');

const notesStore = createNotesStore(db);

function response(res, message = '', details = {}, statusCode = 200) {
    return res.status(statusCode).json({ message, details });
}

function noteHealthRoute(req, res) {
    return response(res, 'API is up and running', { status: 'OK' });
}

function createNote(req, res, next) {
    try {
        const { title, content } = req.body;
        const note = notesStore.create(title, content);

        return response(res, 'Note created successfully', { note }, 201);
    } catch (error) {
        return next(error);
    }
}

function getAllNotes(req, res, next) {
    try {
        const notes = notesStore.getAll();

        return response(res, 'Notes retrieved successfully', { notes });
    } catch (error) {
        return next(error);
    }
}

function getNoteById(req, res, next) {
    try {
        const note = notesStore.getById(req.params.id);

        if (!note) {
            return response(res, 'Note not found', {}, 404);
    }

        return response(res, 'Note retrieved successfully', { note });
    } catch (error) {
        return next(error);
    }
}

function updateNote(req, res, next) {
    try {
        const { title, content } = req.body;
        const note = notesStore.update(req.params.id, title, content);

        if (!note) {
            return response(res, 'Note not found', {}, 404);
        }

        return response(res, 'Note updated successfully', { note });
    } catch (error) {
        return next(error);
    }
}

function deleteNote(req, res, next) {
    try {
        const deleted = notesStore.remove(req.params.id);

        if (!deleted) {
            return response(res, 'Note not found', {}, 404);
    }

        return response(res, 'Note deleted successfully');
    } catch (error) {
        return next(error);
    }
}

module.exports = {
    noteHealthRoute,
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
};
