import { IUser } from "../Interfaces/IUser";
import mongoose, { Schema } from "mongoose";


const user = new Schema<IUser>({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    }
})


export const User=mongoose.model<IUser>('User',user)