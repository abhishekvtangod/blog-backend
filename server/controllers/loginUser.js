export const isLoggedIn = (req) => !!req.session.userId

export const loginUser = (req, userId) => {
    req.session.userId = userId
} 