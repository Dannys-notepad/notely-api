const { Router } = require("express");
const controller = require("../controllers/note.controller.js");

const router = Router()

router.get('/health', controller.noteHealthRoute)

module.exports = router