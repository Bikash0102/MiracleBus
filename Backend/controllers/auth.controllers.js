
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generatetokenandsetcookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
   try {
       const { firstName, lastName,email, password, confirmPassword } = req.body;
           console.log(firstName);
       if (password !==confirmPassword) {
           return res.status(400).json({ error: "passwords don't match" });
       }

       const users = await User.findOne({firstName});
       if (users) {
           return res.status(400).json({ error: "user already exists" });
       }

       const salt = await bcrypt.genSalt(10);
       const hashpassword = await bcrypt.hash(password, salt);
       const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${firstName}`;
    //    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;


       const newUser = new User({
           firstName,
           lastName,
           email,
           password:hashpassword,
         profilepic:boyProfilePic,
        //    profilepic: gender === "male" ?boyProfilePic : girlProfilePic,
       });

       await newUser.save();
       generatetokenandsetcookie(newUser._id, res);

       return res.status(201).json({
           _id: newUser._id,
           firstName: newUser.firstName,
           lastName: newUser.lastName,
           profilepic: newUser.profilepic
       });
   } catch (error) {
       console.error("Error in signup controller:", error.message);
       return res.status(500).json({ error: "Internal Server Error" });
   }
};


export const login= async(req,res)=>
{
    try{
   const{email,password}=req.body;
   console.log(email);
   console.log(password);
   const user=await User.findOne({email});
   console.log(user);
   const isPasswordCorrect=await bcrypt.compare(password,user?.password||"");
   console.log(isPasswordCorrect)
   if(!user|| !isPasswordCorrect)
   {
      return res.status(400).json({error:"Invaild username or password"});
   }
   
   const jwt =generatetokenandsetcookie(user._id,res);
   res.status(200).json({
      _id:user._id,
      fullName:user.firstName,
      lastName:user.lastName,
      profilepic:user.profilepic,
      token:jwt
      
   })
   

    }
    catch(error)
    {
        console.log("Error in login  controller",error.message);
        res.status(500).json({error:"Internal server Error"})
    
    }
    

}
export const logout = (req, res) => {
	try {
		// res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};