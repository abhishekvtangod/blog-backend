import crypto from 'crypto'
export const getHashedPass = (password) => crypto.createHash('sha256').update(password).digest('base64')