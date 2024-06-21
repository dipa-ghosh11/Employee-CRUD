import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose
        .connect(process.env.MONGO_URI, {dbName:"User_Crud_list", family:4})
        .then(()=>{
            console.log("Connected to database")
        })
        .catch((error)=>{
            console.log("Error occurred: ", error);
        })
}