import mongoose,{Schema} from "mongoose";

const adminSchema = new Schema(
    {
        name : {
            type : String,
            required : true,
        },
        email:{
            type : String,
            required : true
        },
        password:{
            type:String,
            required:true
        },
        age:{
            type : Number,
            required : true
        },
        city:{
            type : String,
            required : true
        },
        zipcode:{
            type : String,
            required : true
        },
        isAdmin:{
            type : Boolean,
            default:false
        }

    }
)

const Admin = mongoose.model("Admin",adminSchema)

export default Admin