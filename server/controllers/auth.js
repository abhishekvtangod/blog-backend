import { SESSION_NAME } from "../config"

export const isLoggedIn = (req) => !!req.session.userId

export const logInSession = (req, userId) => {
    req.session.userId = userId
}

export const logOutSession = (req, res) => {
    return new Promise((resolve, reject) => {
        req.session.destroy((err) => {
            if(err){
                reject(err)
            }
            res.clearCookie(SESSION_NAME)
            resolve()
        })
    })
}