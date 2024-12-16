import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./utils/connection";
import cors from "cors"
import userRouter from "./routes/userRoutes";
import cookieParser from 'cookie-parser';

dotenv.config()
const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin: 'https://blogium-client-ysly.vercel.app/',
    credentials:true
}))
 
app.use(cookieParser())

app.use('/', userRouter)

console.log('frontendurl',process.env.Front_End);


app.listen(process.env.PORT, () => {
    console.log('blog hub is connected')
})


