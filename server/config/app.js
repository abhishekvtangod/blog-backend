const {
    NODE_ENV = 'development',
    PORT = 3000
} = process.env

export const IN_PROD = NODE_ENV === 'production'
export const APP_PORT = PORT