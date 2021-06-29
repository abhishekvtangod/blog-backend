const {
    REDIS_PORT = 6379, // Redis port
    REDIS_HOST = "127.0.0.1", // Redis host
    // family: 4, // 4 (IPv4) or 6 (IPv6)
    REDIS_PASSWORD = "secret"
    // db: 0,

} = process.env

export const REDIS_OPTIONS = {
    port: +REDIS_PORT, // Redis port
    host: REDIS_HOST, // Redis host
    // family: 4, // 4 (IPv4) or 6 (IPv6)
    password: REDIS_PASSWORD
    // db: 0,
}