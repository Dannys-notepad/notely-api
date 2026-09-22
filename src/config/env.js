const dotenv = require('dotenv').config()

/**
 * Purpose of this file: For global control
 * of environment variables.
 */

module.exports = {
    PORT: process.env.PORT || 3000
}