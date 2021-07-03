import { Schema, model } from 'mongoose'

const PostSchema = new Schema({
    title: String,
    description: String,
    content: String,
    username: String,
    // image: String,
    createdAt: {
      type: Date,
      default: new Date()
    }
})

export const Post = model('Post', PostSchema)
