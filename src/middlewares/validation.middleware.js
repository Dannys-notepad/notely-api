function validateNote(req, res, next) {
  const { title, content } = req.body || {};

  if (
    typeof title !== 'string' ||
    typeof content !== 'string' ||
    title.trim().length === 0 ||
    content.trim().length === 0
  ) {
    const error = new Error('Title and content must be non-empty strings');
    error.status = 400;
    return next(error);
  }

  return next();
}

module.exports = validateNote;
