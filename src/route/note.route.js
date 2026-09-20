import { Router } from 'express'
import * as controller from '../controllers/note.controller.js'

const router = Router()

router.get('/health', controller.noteHealthRoute)

export default router