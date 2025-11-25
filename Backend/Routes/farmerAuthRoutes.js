const express=require('express')
const router=express.Router()
const {registerFarmer,loginFarmer}=require("../controllers/farmerAuthController")

router.post("/register",registerFarmer)

router.post("/login",loginFarmer)

module.exports=router