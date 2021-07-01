import { User } from '../database/models'
import { validationResult } from "express-validator";
import { loginUser } from './loginUser';

export const createUser = async (req, res, next) => {
    try{
        const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

        if (!errors.isEmpty()) {
          res.status(422).json({ errors: errors.array() });
          return;
        }
        const { username, email, password } = req.body
        
        const found = await User.exists({ email })
        if(found){
            throw new Error('Email already exists')
        }

        const user = await User.create({
            username,
            email,
            password
          })
        
        loginUser(req, user.id)

        res.json({ message: 'OK'})
        // res.json(user)
    } catch(err){
        return next(err)
    }
}