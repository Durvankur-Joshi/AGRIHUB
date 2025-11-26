const express=require('express')
const router=express.Router()
const authMiddleware=require('../middleware/authMiddleware')
const { farmerDashboard }=require('../controllers/farmerDashboard')

route.get('/dashboard',authMiddleware,farmerDashboard)

module.exports=router