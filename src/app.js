import express, { urlencoded } from "express";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import adminRouter from "./routes/admin.route.js";


const app = express()

app.use(cookieParser())
app.use(express.json())

app.use(urlencoded({extended:true}))

app.use('/worko/user',userRouter)

app.use("/worko/admin",adminRouter)

app.get('/',(req,res)=>{
    return res.send({message:"hello world"})
})


export default app