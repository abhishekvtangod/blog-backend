import { isLoggedIn } from '../controllers/loginUser'
import { BadRequest } from '../errors'

export const guest = (req, res, next) => {
    if(isLoggedIn(req)){
        return next(new BadRequest('You are already logged in')) 
    }
    next()
}