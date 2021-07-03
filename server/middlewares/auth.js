import { SESSION_ABSOLUTE_TIMEOUT } from '../config'
import { isLoggedIn, logOutSession } from '../controllers'
import { BadRequest, Unauthorized } from '../errors'

export const guest = (req, res, next) => {
    if(isLoggedIn(req)){
        return next(new BadRequest('You are already logged in')) 
    }
    next()
}

export const notGuest = (req, res, next) => {
    if(!isLoggedIn(req)){
        return next(new Unauthorized('You must be logged in')) 
    }
    next()
}

export const active = async (req, res, next) => {
    if(isLoggedIn(req)){
        const now = Date.now()
        const { createdAt } = req.session
        if(now > createdAt + SESSION_ABSOLUTE_TIMEOUT){
            await logOutSession(req, res)
            return next(new Unauthorized('Session Expired'))
        }
    }
    next()
}
