import express, { urlencoded } from "express";
import userRouter from "./routes/user.route.js";

const app = express()

app.use(express.json())

app.use(urlencoded({extended:true}))

app.use('/worko/user',userRouter)

app.get('/',(req,res)=>{
    return res.send({message:"hello world"})
})


export default app