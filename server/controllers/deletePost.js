import { Post } from "../database/models/post"
import { BadRequest } from "../errors"

export const deletePost = async (req, res, next) => {
    // const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

    // if (!errors.isEmpty()) {
    // //   res.status(422).json({ errors: errors.array() });
    // //   return;
    //     let e = JSON.stringify(errors)
    //     // throw new BadRequest(e)
    //     throw new BadRequest(e)
    // }
    // title: String,
    // description: String,
    // content: String,
    // username: String,
    // const { title, description, content } = req.body
    
    // const found = await User.exists({ email })
    // if(found){
    //     throw new BadRequest('Email already exists')
    // }
    const { username } = req.body
    if(username !== req.session.username){
        throw new BadRequest('Not authorized to delete this blog')
    }

    const post = await Post.findByIdAndRemove(req.params.id)
    res.json({ 
        message: 'Post Removed',
        post
    })
    // res.json(user)
}