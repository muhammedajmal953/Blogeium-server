import mongoose, { Schema } from "mongoose";
import { IBlog } from "../Interfaces/IBlog";
import { ObjectId } from "mongodb";




const blog = new Schema<IBlog>({
    heading: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    postedBy: {
        type: ObjectId,
        ref: 'users'
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

export const Blog = mongoose.model('Blog', blog)