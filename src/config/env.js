import dotenv from 'dotenv/config'

/**
 * Purpose of this file: For global control
 * of environment variables.
 */

export const env = {
    PORT: process.env.PORT || 3000
}