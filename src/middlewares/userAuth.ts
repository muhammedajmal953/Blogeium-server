import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request { 
            userId:string
        }
    }
}

export function userAuth(req: Request, res: Response, next: NextFunction) {
    try {
        const auth = req.headers.authorization
        const token = auth?.split(' ')[1]



        if (!token) {
            res.status(401).json({ message: 'Access denined Please Login' })
        }
        const paylod = verifyToken(token!) as JwtPayload

        
        req.userId=paylod.payload

        

        if (!paylod) {
            res.status(401).json({ message: 'Access denined Please Login' })
        }

        next()
    } catch (error) {
        console.log('error in userAuth middle ware:-', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}