import { User } from "../database/models"

export const homeController = async (req, res) => {
    const user = await User.findById(req.session.userId)
    
    res.json(user)
}  