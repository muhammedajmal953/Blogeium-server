import express, { urlencoded } from "express";
import dotenv from "dotenv"
import { connectDB } from "./utils/connection";
import cors from "cors"
import userRouter from "./routes/userRoutes";
import { url } from "inspector";
dotenv.config()
const app = express()
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use('/',userRouter)

app.listen(process.env.PORT, () => {
    console.log('blog hub is connected')
})


