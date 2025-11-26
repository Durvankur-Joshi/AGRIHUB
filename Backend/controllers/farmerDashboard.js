const Product = require('../models/Product')
const Order = require('../models/Order')

exports.farmerDashboard = async (req,res)=>{
    try{
        const farmerId=req.user.id

        const totalProducts= await Product.countDocuments({farmerId});

        const totalOrders = await Order.countDocuments({farmerId});

        const totalRevenuData = await Order.aggregate([
            {$match:{farmer:farmerId,status:"COMPLETED"}},
            {$group:{_id:null,total:{$sum:"$totalAmount"}}}
        ])

        const totalRevenu=totalRevenuData[0]?.total || 0

        const recentOrders=await Order.find({farmerId})
            .sort({createdAt:-1})
            .limit(5)
            .populate("productId","name price")

        const lowStockProducts = await Product.find({
            farmerId,
            quantity:{$lt:10}
        }).select("name quantity")

        const monthlySales = await Order.aggregate([
            {$match:{farmerId:farmerId,status:"COMPLETED"}},
            {
                $group:{
                    _id:{month:{month:"$createdAt"}},
                    total:{$sum:"$totalAmount"}
                }
            },
            {$sort:{"_id.month":1}}
        ])

        return res.json({
            totalProducts,
            totalOrders,
            totalRevenu,
            recentOrders,
            lowStockProducts,
            monthlySales
        })
    }catch(err){
        console.log("Error: ",err)
        return res.status(500).json({
            message:"Error fetching dashboard data",
            error:error.message
        })
    }
}