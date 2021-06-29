import { IN_PROD } from './app'

const ONE_HOUR = 1000 * 60 * 60

const {
    SESSION_SECRET = "abhishek_secret",
    SESSION_NAME = 'sid',
    SESSION_IDLE_TIMEOUT = ONE_HOUR,

} = process.env

export const SESSION_OPTIONS = {
    // store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: {
        maxAge: +SESSION_IDLE_TIMEOUT,
        secure: IN_PROD,
        sameSite: true
    },
    rolling: true,
    resave: false,
    saveUninitialized: false
}