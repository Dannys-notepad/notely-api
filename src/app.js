import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

// middleware imports
import logRequests from './middlewares/requestLogger.middleware.js'

import noteRoute from './route/note.route.js'

const app = express()

// inbuilt middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(helmet())
app.use(cors())

// custom moddlewares
app.use(logRequests)

app.use('/', async (req, res) => {
    res.json({ status: 'OK' })
})

// API route
app.use('/api/v1/notes', noteRoute)

export default app