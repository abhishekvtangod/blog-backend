import { logOutSession } from "./auth"

export const logoutUser = async (req, res) => {
    await logOutSession(req, res)

    res.json({ message: "logged out"})
}