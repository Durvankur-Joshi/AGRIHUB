const express = require('express')
require("dotenv").config();
const DbConnect=require("./config/db")

const farmerAuthRoute=require("./Routes/farmerAuthRoutes")
const farmerDashboardRoute=require('./Routes/farmerDashboardRoutes')
const productRoute=require('./Routes/productRoute')

const PORT = process.env.PORT 
DbConnect()

const app=express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("I am alive")
})

app.use("/api/farmer/auth",farmerAuthRoute)
app.use("/api/farmer",farmerDashboardRoute)
app.use("/api/farmer/products",productRoute)

app.listen(PORT,()=>{
    console.log("Server is running on port: ",PORT)
})