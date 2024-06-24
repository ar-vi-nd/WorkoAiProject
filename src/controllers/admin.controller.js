import Admin from "../models/admin.model.js";
import { adminJoiSchema, loginValidationSchema } from "../services/validationschema.js";
import jwt from "jsonwebtoken"


const createAdmin = async(req,res)=>{

    try {
        
        const { body } = req;
    
        const { error, value } = adminJoiSchema.validate(body);
    
        if (error) {
            console.log(error)
          return res.status(400).json({ error: error.details[0].message });
        }

        const {email} = body

        const oldAdmin = await Admin.findOne({email})

        if(oldAdmin){
            return res.status(401).json({error: "Admin with this email already exist" })
        }

        const createdAdmin = await Admin.create(body)

        if(!createdAdmin){
            return res.status(400).json("Error creating Admin")
        }
    
        return res.status(201).json({ message: 'Admin created successfully', data: createdAdmin });

} catch (error) {
    return res.status(500).json({ error: `Internal server error ${error}` });
        
}
}

const loginAdmin = async(req,res)=>{
    

    try {

        const { body } = req;
    
        const { error, value } = loginValidationSchema.validate(body);
        if (error) {
            console.log(error)
          return res.status(400).json({ error: error.details[0].message });
        }

        const {email,password}= body

        console.log(email)

        const admin = await Admin.findOne({$and:{email,password }})

        if(!admin){
            return res.status(404).json({error:"Invalid Credentials"})
        }

        console.log(admin)

        const accessToken = jwt.sign({adminId:admin._id},process.env.SECRET_KEY)

        console.log(accessToken)

        return res.status(200).cookie("accessToken",accessToken).json({admin,accessToken})


        
    } catch (error) {

        return res.status(400).json({error:`Error logging user ${error}`})
        
    }
}

const adminLogout = async(req,res)=>{
    return res.status(200).clearCookie("accessToken").json({message:"User Logout Successfully"})
    
}

export {loginAdmin,createAdmin,adminLogout}