import mongoose from "mongoose"
// const mongoose_uri = "mongodb://127.0.0.1/workoai"

const dbconnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        
    } catch (error) {
        console.log("error connecting database ",error)
    }
}

export default dbconnect