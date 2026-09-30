function notFound(req, res, next) {
    const error = {
        message: `Not Found - ${req.originalUrl}`,
        status: 404
    }
    res.status(404);
    next(error);
}

module.exports = notFound;