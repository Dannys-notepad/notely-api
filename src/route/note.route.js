const { Router } = require("express");
const controller = require("../controllers/note.controller.js");

const router = Router()

router.get('/health', controller.noteHealthRoute)
router.get('/', controller.getAllNotes)
router.get('/:id', controller.getNoteById)

module.exports = router