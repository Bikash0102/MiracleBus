import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
       

    },
    email:
    {
        type:String,
        require:true,
        minlength:6,

    },
    password:
    {
        type:String,
        require:true,
      

    },
    profilepic:
    {
        type:String,
        default:"",
    }
},{timestamps:true})
const User=mongoose.model("Users",userSchema);
export default User;
