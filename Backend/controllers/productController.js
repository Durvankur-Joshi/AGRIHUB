const Product = require('../models/Product')
const uploadToCloudinary=require('../utils/uploadToCloudlinary')

exports.addProduct = async (req,res)=>{
    try{
        const {name, description , category , price , quantity , unit , location }=req.body
        
        if(!req.file){
            return res.status(400).json({message:"Product image required"})
        }

        const imageUrl=await uploadToCloudinary(req.file.path)

        const product = await Product.create({
            farmerId:req.user.id,
            name,
            description,
            category,
            price,
            quantity,
            unit,
            location,
            images:[imageUrl]
        })

        res.status(201).json({message:"Product added ",product})
    }catch(err){
        res.status(500).json({message:"Error adding product ",err})
    }
}

exports.getMyProducts = async (req,res)=>{
    try{
        const farmerId=req.user.id
        const products=(await Product.find({farmerId}))

        return res.json({
            message:"Products fetched successfully",
            products
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message:"Error fetching products ",
            err
        })
    }
}