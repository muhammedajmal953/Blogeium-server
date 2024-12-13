import { Request, Response } from "express";
import { UserServices } from "../services/userServices";


export class UserController{
    constructor(private _userService: UserServices) { 

    }
    
    async createUser(req:Request,res:Response):Promise<any> {
        try {
            const formData = req.body
            console.log('user controller create User',formData);
            
            const result = await this._userService.createUser(formData)
            if (!result.success) {
                return res.status(400).json(result)
            }

            return res.status(200).json(result)
        } catch (error) {
            console.log("Error from userController.createUser", error);
            return res.status(500).json({
                message: "Internal Server Error",
            } )
        }
    }

    async loginUser(req:Request,res:Response):Promise<any> {
        try {
          
            const formData = req.body
            const result = await this._userService.login(formData)
            if (!result.success) {
                return res.status(400).json(result)
            }
            return res.status(200).json(result)
        } catch (error) {
            console.log("Error from userController.loginUser", error);
            return res.status(500).json({
                message: "Internal Server Error",
            } )
        }
    }


    async getUser(req: Request, res: Response):Promise<any> {
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
        } )
      }
    }
}