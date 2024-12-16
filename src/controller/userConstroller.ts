import { Request, Response } from "express";
import { UserServices } from "../services/userServices";
import { verifyToken } from "../utils/jwt";


export class UserController {
    constructor(private _userService: UserServices) {

    }

    async createUser(req: Request, res: Response): Promise<any> {
        try {
            const formData = req.body
            const result = await this._userService.createUser(formData)
            if (!result.success) {
                return res.status(400).json(result)
            }

            return res.status(200).json(result)
        } catch (error) {
            console.log("Error from userController.createUser", error);
            return res.status(500).json({
                message: "Internal Server Error",
            })
        }
    }

    async loginUser(req: Request, res: Response): Promise<any> {
        try {

            const formData = req.body
            const result = await this._userService.login(formData)

            
            if (!result.success) {
                return res.status(400).json(result)
            }

            res.cookie('token', result.data, {
                httpOnly: true,
                expires:new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
            })

            return res.status(200).json(result)
        } catch (error) {
            console.log("Error from userController.loginUser", error);
            return res.status(500).json({
                message: "Internal Server Error",
            })
        }
    }


    async getUser(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.query

            const result = await this._userService.getUser(id as string)
            if (!result.success) {
                return res.status(400).json(result)
            }
            return res.status(200).json(result)
        } catch (error) {
            console.log("Error from userController.loginUser", error);
            return res.status(500).json({
                message: "Internal Server Error",
            })
        }
    }

    async isLoggedIn(req: Request, res: Response):  Promise<any> {
        try {
            const { token } = req.cookies
            console.log('hitted authentcation');

            console.log(req.cookies.token);
            
            
            if (!token) return res.status(400).json({ success: false, message: 'please login' })
            
            let paylod = verifyToken(token)


            if(!paylod) return res.status(401).json({success:false,message:'please login'})
            
          
            
            return res.status(200).json({success:true,message:'user is logged in'})
        } catch (error) {
            console.log("Error from userController.isLoggedIn", error);
            return res.status(500).json({
                message: "Internal Server Error",
            })
        }
    }


    async logout(req: Request, res: Response):  Promise<any> {
        try {
            res.clearCookie('token', {
                httpOnly:true
            })

            return  res.status(200).json({success:true,message:'user logged out'})
        } catch (error) {
            console.log("Error from userController.isLoggedIn", error);
            return res.status(500).json({
                message: "Internal Server Error",
            }) 
        }
    }
}