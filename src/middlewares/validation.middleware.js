function validateNote(req, res, next) {
  const { title, content } = req.body

  if (!title || !content) {
    const error = new Error('Title and content are required')
    error.status = 400
    return next(error)
  }

  next()
}

module.exports = validateNote
