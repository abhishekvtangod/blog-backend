import { body } from "express-validator";

export const userValidator = (method)=>{
    switch(method){
        case 'createUser' : {
            return [ 
                // body('userName', 'userName doesn\'t exists').exists(),
                body('email', 'Invalid email').exists().isEmail().normalizeEmail()
                // body('password', 'Passwords must be bw 4 to 16 characters').isLength({min:4, max:16})
                // body('confirmPassword', 'Passwords do not match').custom((value, {req})=> (value === req.body.password))
               ]   
        }
    }
}