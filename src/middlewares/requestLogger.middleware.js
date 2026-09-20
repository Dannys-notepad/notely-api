async function logRequests (req, res, next) {
    const { method, url, ip } = req

    res.on('finish', () => {
        console.log(`[Request] ${ip} ${method} ${url} - Status: ${res.statusCode}`)
    })

    next()
}

export default logRequests