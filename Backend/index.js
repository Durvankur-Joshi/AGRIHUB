const express = require('express')
require("dotenv").config();
const DbConnect=require("./config/db")
const farmerAuthRoute=require("./Routes/farmerAuthRoutes")

const PORT = process.env.PORT 
DbConnect()

const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("I am alive")
})

app.use("/api/farmer/auth",farmerAuthRoute)

app.listen(PORT,()=>{
    console.log("Server is running on port: ",PORT)
})