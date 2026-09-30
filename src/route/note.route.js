const { Router } = require('express');
const controller = require('../controllers/note.controller.js');
const validateNote = require('../middlewares/validation.middleware.js');

const router = Router();

router.get('/health', controller.noteHealthRoute);
router.post('/', validateNote, controller.createNote);
router.get('/', controller.getAllNotes);
router.get('/:id', controller.getNoteById);
router.put('/:id', validateNote, controller.updateNote);
router.delete('/:id', controller.deleteNote);

module.exports = router;
