import { hash } from 'bcryptjs';
import { Schema, model } from 'mongoose'
import { BCRYPT_WORK_FACT } from '../../config'
import crypto from 'crypto'

const UserSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

UserSchema.pre('save', async function(){
    if(this.isModified('password')){
        const hashedPass = crypto.createHash('sha256').update(this.password).digest('base64')
        this.password = await hash(hashedPass, BCRYPT_WORK_FACT);
        // console.log(hashedPass, hashedPass.length, this.password.length)
    }
})

export const User = model('User', UserSchema)