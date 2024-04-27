import { json } from "express";
import UserModels from "../models/User.js";

//Create Api


const createUser = async(req, res) => {
   try {
    const {name,fathername,email,phone}=req.body

    const NewUser = new UserModels({
        name,fathername,email,phone
    })
   await NewUser.save()
res.status(200).json({success:true,Message:'user created successfully',NewUser})

   } catch (error) {
    console.log("error")
    res.status(500).json({success:false,Message:'internally user error',NewUser})
   }
  };



  // Read Api

const GetUser =async(req,res)=> {

    try {
        const user= await UserModels.find()
        if(!user){
            return res.status(404).json({success:false,message:"user not found"})
        }
        res.status(200).json({success:true,user})


    } catch (error) {
        console.log(error)
        return res.status(500).json({success:false,message:"internal server error"})

    }
} 
  


// Get User by ID
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModels.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


//Update Api

const UpdateUser = async (req, res) => {
    try {
      const userId = req.params.id;
      const updatedUser = await UserModels.findByIdAndUpdate(
        userId,
        req.body,
        { new: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      res.status(200).json({ success: true, message: "User updated successfully", updatedUser });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };
  
  //Delete User

  const DeleteUser = async(req,res)=>{
    try {

        const userId = req.params.id
        const deleteUser = await UserModels.findOneAndDelete(userId);
        if(!deleteUser)
        {
            return res.status(404).json({success:false,message:"user not found"})
        }

        res.status(200).json({success:true,message:"user deleted successfully"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal server error" });

    }
  }


  export { createUser,GetUser,UpdateUser,DeleteUser,getUserById}; 
  