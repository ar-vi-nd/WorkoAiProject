import dbconnect from "./db.js";
import app from "./app.js";
import dotenv from 'dotenv'
dotenv.config()

// console.log(process.env.MONGO_URI)

dbconnect().then(
    ()=>{
        app.on('error',(error)=>{console.log(error)})
        app.listen(process.env.PORT||7000,console.log("server connected on port 7000"))
    }
).catch((error)=>{
    console.log("error in setting up servr ",error)
})

