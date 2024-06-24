import { getAllUsersService, getUserByIdService, createUserService, updateUserService, updateUserPartialService, deleteUserService } from "../services/user.service.js";
import { UserDTO, UserUpdateDTO } from "../dto/user.dto.js";

const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsersService();
        return res.status(200).json({ users });
    } catch (error) {
        return res.status(400).json("Error fetching users");
    }
};

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await getUserByIdService(userId);
        return res.status(200).json({ user });
    } catch (error) {
        return res.status(400).json(`Error fetching user: ${error.message}`);
    }
};

const createUser = async (req, res) => {
    try {
        const userDTO = new UserDTO(req.body);
        const createdUser = await createUserService(userDTO);
        return res.status(201).json({ message: 'User created successfully', data: createdUser });
    } catch (error) {
        return res.status(500).json({ error: `Internal server error: ${error.message}` });
    }
};

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const userDTO = new UserUpdateDTO(req.body);
        const updatedUser = await updateUserService(userId, userDTO);
        return res.status(200).json({ message: 'User updated successfully', data: updatedUser });
    } catch (error) {
        return res.status(500).json({ error: `Internal server error: ${error.message}` });
    }
};

const updateUserPartial = async (req, res) => {
    try {
        const { userId } = req.params;
        const userUpdateDTO = new UserUpdateDTO(req.body);
        const updatedUser = await updateUserPartialService(userId, userUpdateDTO);
        return res.status(200).json({ message: 'User updated successfully', data: updatedUser });
    } catch (error) {
        return res.status(500).json({ error: `Internal server error: ${error.message}` });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const deletedUser = await deleteUserService(userId);
        return res.status(200).json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
        return res.status(500).json({ error: `Internal server error: ${error.message}` });
    }
};

export { getAllUsers, getUserById, createUser, updateUser, updateUserPartial, deleteUser };
















// import { isValidObjectId } from "mongoose"
// import User from "../models/user.model.js"
// import { userJoiSchema,userUpdateSchema} from "../services/validationschema.js"



// const getAllUsers = async(req,res)=>{
// try {
//     const users = await User.find({})
//     return res.status(200).json({users})
// } catch (error) {
//     return res.status(400).json("error fetching users")
// }
// }

// const getUserById = async(req,res)=>{
//     try {
//         const {userId} = req.params
//         console.log(userId)
//         if(!isValidObjectId(userId)){
//             return res.status(404).json({error:"Invalid userId"})
//         }        
//         const user = await User.findById(userId)
//         return res.status(200).json({user})
//     } catch (error) {
//         return res.status(400).json("error fetching user")
//     }
// }

// const createUser = async(req,res)=>{
//     try {
//         const { body } = req;
    
//         const { error, value } = userJoiSchema.validate(body);
    
//         if (error) {
//             console.log(error)
//           return res.status(400).json({ error: error.details[0].message });
//         }

//         const {email} = body

//         const oldUser = await User.findOne({email})

//         if(oldUser){
//             return res.status(401).json({error: "User with this email already exist" })
//         }

//         const createdUser = await User.create(body)

//         if(!createdUser){
//             return res.status(400).json("Error creating user")
//         }
    
//         return res.status(201).json({ message: 'User created successfully', data: createdUser });
//       } catch (err) {
//         console.error('Error creating user:', err);
//         return res.status(500).json({ error: 'Internal server error' });
//       }
// }

// const updateUser = async (req, res) => {
//   try {
//     const { userId } = req.params 


//     if(!isValidObjectId(userId)){
//         return res.status(404).json({error:"Invalid userId"})
//     }   

//     const { body } = req;

//     const { error, value } = userJoiSchema.validate(body)

//     if (error) {
//       return res.status(400).json({ error: error.details[0].message });
//     }

//     const {email} = body

//     const oldUser = await User.findOne({email})
//     console.log(oldUser)

//     // console.log(oldUser._id.equals(userId))

//     if(oldUser&&!oldUser._id.equals(userId)){
//         return res.status(401).json({error: "User with this email already exist" })
//     }

//     const updatedUser = await User.findByIdAndUpdate(userId,value, { new: true });

//     if (!updatedUser) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     return res.status(200).json({ message: 'User updated successfully', data: updatedUser });
//   } catch (err) {
//     console.error('Error updating user:', err);
//     return res.status(500).json({ error: 'Internal server error' });
//   }
// };

// const updateUserPartial = async(req,res)=>{
//     try {
//         const {userId} = req.params;

//         if(!isValidObjectId(userId)){
//             return res.status(404).json({error:"Invalid userId"})
//         }   

//         const { error, value } = userUpdateSchema.validate(req.body, {
//           abortEarly: false,
//         });
    
//         if (error) {
//           return res.status(400).json({ error: error.details });
//         }

//         const {email} = req.body

//         if(email){

            
//             const oldUser = await User.findOne({email})
//             console.log(oldUser)
            
//             // console.log(oldUser._id.equals(userId))
            
//             if(oldUser&&!oldUser._id.equals(userId)){
//                 return res.status(401).json({error: "User with this email already exist" })
//             }
            
//         }
//     const updatedUser = await User.findByIdAndUpdate(userId,{$set:value}, { new: true });

//     if (!updatedUser) {
//         return res.status(404).json({ error: 'User not found' });
//       }
  
//       return res.status(200).json({ message: 'User updated successfully', data: updatedUser });

//       } catch (err) {
//         console.error("Error updating user:", err);
//         return res.status(500).json({ error: "Internal server error" });
//       }
// }

// const deleteUser = async(req,res)=>{
//     try {
//         const {userId} = req.params
//         if(!isValidObjectId(userId)){
//             return res.status(404).json({error:"Invalid userId"})
//         }   

//         const deletedUser = await User.findByIdAndDelete(userId)

//         if(!deletedUser){
//             return res.status(404).json("User Not found")
//         }

//         return res.status(200).json({message:"User deleted successfully",deletedUser})

//     } catch (error) {
        
//     }
// }


// export {getAllUsers,getUserById,createUser,updateUser,updateUserPartial,deleteUser}