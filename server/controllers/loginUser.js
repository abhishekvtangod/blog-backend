import { validationResult } from "express-validator";
import { User } from "../database/models";
import { BadRequest, Unauthorized } from "../errors";

export const isLoggedIn = (req) => !!req.session.userId

export const loginUserDirect = (req, userId) => {
    req.session.userId = userId
}

export const loginUser = async (req, res, next) => {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
    //   res.status(422).json({ errors: errors.array() });
    //   return;
        let e = JSON.stringify(errors)
        // throw new BadRequest(e)
        throw new BadRequest(e)
    }
    const { email, password } = req.body
    
    const user = await User.findOne({ email })
    
    if(!user || !(await user.matchPassword(password))){
        throw new Unauthorized("Incorrect email or password")
    }

    loginUserDirect(req, user.id)

    res.json({ message: 'OK'})
    // res.json(user)

}