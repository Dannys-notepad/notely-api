const { db } = require('../db/database.js')
const { createNotesStore } = require('../db/repository/note.repo.js')

const notesStore = createNotesStore(db)

function response(res, message = '', details = {}, statusCode = 200) {
    return res.status(statusCode).json({ message, details })
}

const noteHealthRoute = async (req, res, next) => {
    try {
        response(res, 'API is up and running', { status: 'OK' })
    } catch (error) {
        next(error)
    }
}

const getAllNotes = async (req, res, next) => {
    try {
        const notes = notesStore.getAll()
        return response(res, 'Notes retrieved successfully', { notes }, 200)
    } catch (error) {
        next(error)
    }
}

function getNoteById(req, res, next) {
    try {
        const note = notesStore.getById(req.params.id)

        if (!note) {
            return response(res, 'Note not found', {}, 404)
        }

        return response(res, 'Note retrieved successfully', { note })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    noteHealthRoute,
    getAllNotes,
    getNoteById
}