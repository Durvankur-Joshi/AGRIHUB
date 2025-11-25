const Farmer = require("../models/Farmer")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.registerFarmer= async (req,res)=>{
    try{
        const {name,email,phone,password,location}=req.body

        if(!name || !email || !phone || !password || !location){
            return res.status(400).json({message:"All fields are required"})
        }
        const farmerExists = await Farmer.findOne({email})
        if(farmerExists){
            return res.status(400).json({message:"Email Already exists"})
        }

        const hashedPass=await bcrypt.hash(password,10)

        const farmer=await Farmer.create({
            name,
            email,
            phone,
            password:hashedPass,
            location
        })

        return res.status(201).json({
            message:"Farmer registere successfully",
            farmerId:farmer._id
        })
    }catch(err){
        return res.status(500).json({message:"Server error",err})
    }
}

exports.loginFarmer=async (req,res)=>{
    try{
        const {email,password}=req.body
        
        if(!email||!password){
            return res.status(400).json({message:"Email and password required"})
        }

        const farmer = await Farmer.findOne({email})
        if(!farmer){
            return res.status(400).json({message:"Invalid email"})
        }

        const isMatch = await bcrypt.compare(password,farmer.password)
        if(!isMatch){
            return res.status(400).json({message:"Invalid password"})
        }

        const token = jwt.sign(
            {id:farmer._id,role:farmer.role},
            process.env.JWT_SECRET,
            {expiresIn:"7d"}
        )

        return res.json({
            message:"Login Successful",
            token,
            farmer:{
                id:farmer._id,
                name:farmer.name,
                email:farmer.email,
                role:farmer.role
            }
        })
    }catch(err){
        return res.status(500).json({message:"Server Error", error})
    }
}