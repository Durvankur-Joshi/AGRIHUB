const express=require('express')
const router = express.Router()
const auth = require('../middleware/authMiddleware')
const upload = require('../middleware/multer')
const {addProduct}=require('../controllers/productController')
const {getMyProducts}=require('../controllers/productController')

router.post('/add',auth,upload.single('image'),addProduct)

router.get('/my-products',auth,getMyProducts)

module.exports=router