function response (res, message = '', details = {}, statusCode = 200) {
    return res.status(statusCode).json({ message, details })
}

const noteHealthRoute = async (req, res) => {
    try {
        response(res, 'API is up and running', { status: 'OK' })
    } catch (error) {
        console.error(error)
        response(res, 'Something went wrong', { error: 'INTERNAL SERVER ERROR' })
    }
}

module.exports = {
  noteHealthRoute
}