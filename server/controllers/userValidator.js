import { body } from "express-validator";

var email = body('email', 'Invalid email').exists().isEmail().normalizeEmail()


export const userValidator = (method)=>{
    switch(method){
        case 'createUser' : {
            return [ 
                email
                // body('userName', 'userName doesn\'t exists').exists(),
                // body('password', 'Passwords must be bw 4 to 16 characters').isLength({min:4, max:16})
                // body('confirmPassword', 'Passwords do not match').custom((value, {req})=> (value === req.body.password))
               ]   
        }
        case 'loginUser' : { 
            return [ 
                email
                // body('userName', 'userName doesn\'t exists').exists(),
                // body('password', 'Passwords must be bw 4 to 16 characters').isLength({min:4, max:16})
                // body('confirmPassword', 'Passwords do not match').custom((value, {req})=> (value === req.body.password))
               ]
        }

    }
}