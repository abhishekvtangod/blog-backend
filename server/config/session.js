import { IN_PROD } from './app'

const ONE_HOUR = 1000 * 60 * 60
const TWENTY_FOUR_HOURS = 24 * ONE_HOUR
const SIX_HOURS = 6 * ONE_HOUR

export const {
    SESSION_SECRET = "secret",
    SESSION_NAME = 'sid',
    SESSION_IDLE_TIMEOUT = SIX_HOURS,
} = process.env

export const SESSION_ABSOLUTE_TIMEOUT = +(process.env.SESSION_ABSOLUTE_TIMEOUT || TWENTY_FOUR_HOURS)

export const SESSION_OPTIONS = {
    // store: new RedisStore({ client: redisClient }),
    secret: SESSION_SECRET,
    name: SESSION_NAME,
    cookie: {
        maxAge: +SESSION_IDLE_TIMEOUT
        // secure: IN_PROD,
        // httpOnly: true,
        // sameSite: true
    },
    rolling: true,
    resave: false,
    saveUninitialized: false
}
