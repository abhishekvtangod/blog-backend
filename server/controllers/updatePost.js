import { Post } from "../database/models/post"
import { BadRequest } from "../errors"

export const updatePost = async (req, res, next) => {
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
    const { username, title, description, content } = req.body
    console.log(username, req.session.username);
    // if(username !== req.session.username){
    //     throw new BadRequest('Not authorized to edit this blog')
    // }

    const post = await Post.findByIdAndUpdate(req.params.id, { title, description, content}, {new: true})

    res.json({ 
        message: 'Post Updated',
        post
    })
    // res.json(user)
}