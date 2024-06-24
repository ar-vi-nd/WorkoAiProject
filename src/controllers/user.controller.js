import User from "../models/user.model.js"


const getAllUsers = async(req,res)=>{
try {
    const users = await User.find({})
    return res.status(200).json({users})
} catch (error) {
    return res.status(400).json("error fetching users")
}
}


export {getAllUsers}