import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbconnection.js";
import router from "./routes/user.routes.js";

const app=express();
dotenv.config({path:"./.env"})


dbConnection();


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

app.use('/api', router)

app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on port ${process.env.PORT}`);
})