import { IUser } from "../Interfaces/IUser";
import { User } from "../models/userModel";
import { createToken } from "../utils/jwt";
import bcrypt from "bcryptjs";

export class UserServices {
    constructor() { }

    async createUser(data: IUser) {
        try {
            const existingUser = await User.findOne({ email: data.email })
            
            if (existingUser) {
                return {
                    success: false,
                    message:'email is already in use'
                }
            }
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(data.password, salt);
            data.password = hashedPassword;


            const newUser = new User(data);
            await newUser.save();

            const token = createToken(newUser._id);

            return {
                success: true,
                message: "User created successfully",
                data: token,
            };
        } catch (error) {
            console.log("Error from userServices.createUser", error);
            return {
                success: false,
                message: "something went wrong",
            };
        }
    }

    async login(data: IUser) {
        try {
            const user = await User.findOne({ email: data.email })
            
            if (!user) {
                return {
                    success: false,
                    message:'Please Register'
                }
            }

            
            const passwordCompare = bcrypt.compareSync(data.password,user.password)
            if (!passwordCompare) {
                return {
                    success: false,
                    message:'Password is incorrect'
                }
            }

            const token=createToken(user._id)

            return {
                success: true,
                message: 'Sign in successfully',
                data:token
            }
        } catch (error) {
            console.log("Error from userService.loginUser", error);
            return {
                message: "something went wrong",
            };
        }
    }

    async getUser(id:string) {
        try {
            const user = await User.findById(id)
            return {
                success: true,
                message: 'Get User successfully',
                data:user
            }
        } catch (error) {
            console.log("Error from userService.getUser", error);
            return {
                message: "something went wrong",
            };
        }
    }
      
    async editUser(id:string,updations:any) {
        try {
            const update=await User.findByIdAndUpdate(id,{$set:updations})
            return {
                success: true,
                message: 'Get User edited successfully',
                data:update
            }
        } catch (error) {
            console.log("Error from userService.editUser", error);
            return {
                message: "something went wrong,to edit profile",
            };
        }
    }
}
