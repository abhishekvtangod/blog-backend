import { isLoggedIn } from '../controllers'
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

