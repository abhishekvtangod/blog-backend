import { isLoggedIn } from '../controllers/loginUser'

export const guest = (req, res, next) => {
    if(isLoggedIn(req)){
        return next(new Error('You are already logged in')) 
    }
    next()
}