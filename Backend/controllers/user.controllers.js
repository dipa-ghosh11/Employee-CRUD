import { User } from "../models/user.models.js";


// create user
const createUser=async(req, res)=>{

    try{
        const {name, phone, position, salary}= req.body;
        const user=await User.findOne({phone});
        
        const newUser = new User({
            name,
            phone,
            position,
            salary
        });
        if(user){
            return res.status(400).json({success: false, message:"User already exist"})
        }
        await newUser.save();
        res.status(200).json({success: true, message: "User created successfully"});
    }

    catch(error){
        console.log("Error occurred: ", error);
        res.status(500).json({success: false, message: "Internal server error"});
    }
}



// get user
const getUser=async(req, res)=>{
    try{
        
        const viewUser= await User.find()

        if(!viewUser){
            res.status(404).json({success: true, message: "User not found"});
        }
        res.status(200).json({success: true, message: "User found",users: viewUser})

    }

    catch(error){
        res.status(500).json({success:false, message: "Internal server error"})
    }
}


// update user
const updateUser=async(req, res)=>{
    try {
        const userId=req.params.id;
        const updateduser=await User.findByIdAndUpdate(userId, req.body, {new:true});
    
        if(!updateduser){
            res.status(404).json({success: false, message: "User not found"});
        }
        return res.status(200).json({success: true, message: "User updated successfully"});
    } 
    catch (error) {
        console.log("Error: ",error);
        res.status(500).json({success: true, message: "Internal server error"});
    }
}

// delete user
const deleteUser=async(req, res)=>{
    try {
        const userId=req.params.id;
        const deleteduser= await User.findByIdAndDelete(userId);

        if(!deleteduser){
            return res.status(404).json({success: false, message: "User not found"})
        }
        return res.status(200).json({success: true, message:"User deleted successfully"})
    } 
    catch (error) {
         console.log("Error: ", error);
         res.status(500).json({
             success: true,
             message: "Internal server error"
         });
    }
}


export {createUser, getUser, updateUser, deleteUser}