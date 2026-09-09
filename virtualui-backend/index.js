import express from "express";
import { connectDB } from "./config/connectDB.js";
import dotenv from "dotenv";
dotenv.config();


const app = express()

app.get("/", (req,res)=>{
    res.json("Hello from server")
})
const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})