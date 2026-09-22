const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// middleware imports
const logRequests = require('./middlewares/requestLogger.middleware.js')

const noteRoute = require('./route/note.route.js')

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

module.exports = app