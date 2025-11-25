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
    }catch{

    }
}