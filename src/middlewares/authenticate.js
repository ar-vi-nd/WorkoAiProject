import jwt from 'jsonwebtoken'
import Admin from '../models/admin.model.js'
const authenticateUser = async(req,res,next)=>{
    try {
        const token = req.cookies?.accessToken||req.header("Authorization")?.replace("Bearer ","")

        if(!token){
            throw new Error("Unauthorized access")
        }

        console.log(token)
    
        const decodedToken = jwt.verify(token,process.env.SECRET_KEY)
    
        console.log(decodedToken)

        const admin = await Admin.findById(decodedToken.adminId)

        console.log("admin : ",admin)

        if(!admin){
            throw new Error("error authenticating user");
        }
        req.admin = admin
        console.log(req.admin)

        next()
    } catch (error) {
        return res.status(400).json({error:`Error Authenticating User ${error}`})
    }
}

export {authenticateUser}