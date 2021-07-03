import { compare, hash } from 'bcryptjs';
import { Schema, model } from 'mongoose'
import { BCRYPT_WORK_FACT } from '../../config'
import { getHashedPass } from '../../controllers';

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
}, {
    timestamps: true
});

UserSchema.pre('save', async function(){
    if(this.isModified('password')){
        const hashedPass = getHashedPass(this.password)
        this.password = await hash(hashedPass, BCRYPT_WORK_FACT);
        // console.log(hashedPass, hashedPass.length, this.password.length)
    }
})

UserSchema.methods.matchPassword = function(password){
    const hashedPass = getHashedPass(password)
    return compare(hashedPass, this.password)
}

UserSchema.set('toJSON', {
    transform: (doc, {__v, password, ...rest}, options) => rest
})

export const User = model('User', UserSchema)