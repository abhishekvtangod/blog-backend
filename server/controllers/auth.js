import { SESSION_NAME } from "../config"

export const isLoggedIn = (req) => !!req.session.userId

export const logInSession = (req, userId, username) => {
    req.session.userId = userId,
    req.session.username = username,
    req.session.createdAt = Date.now()
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