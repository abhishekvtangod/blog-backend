import { User } from '../database/models'
import { validationResult } from "express-validator";
import { BadRequest } from '../errors';
import { logInSession } from './auth';

export const createUser = async (req, res, next) => {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    if (!errors.isEmpty()) {
    //   res.status(422).json({ errors: errors.array() });
    //   return;
        let e = JSON.stringify(errors)
        // throw new BadRequest(e)
        throw new BadRequest(e)
    }
    const { username, email, password } = req.body
    
    const found = await User.exists({ email })
    if(found){
        throw new BadRequest('Email already exists')
    }

    const user = await User.create({
        username,
        email,
        password
        })
    
    logInSession(req, user.id)
    res.json({ message: 'OK'})
    // res.json(user)
}