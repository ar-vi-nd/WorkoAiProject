import mongoose,{Schema} from "mongoose";

const userSchema = new Schema(
    {
        name : {
            type : String,
            required : true,
        },
        email:{
            type : String,
            required : true
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
        }

    }
)

const User = mongoose.model("User",userSchema)

export default User