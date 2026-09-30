function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    console.error(err.stack || err);

    const candidateStatus = err.status || err.statusCode;
    const status = Number.isInteger(candidateStatus) && candidateStatus >= 400 && candidateStatus <= 599
        ? candidateStatus
        : 500;
    const message = status >= 500 ? 'Internal Server Error' : err.message;

    return res.status(status).json({ message, details: {} });
}

module.exports = errorHandler;