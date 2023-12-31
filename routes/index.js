const express = require('express')
const { createUser,loginUser, getUsers } = require('../controllers/userController')
const { addBanner,getBanners, updateBanner,deleteBanner } = require('../controllers/bannerController')
const { addProduct,getProducts, updateProduct } = require('../controllers/productController')

const router = express.Router()
const passport = require('passport')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+file.originalname.trim())
    }
  })
  
  const upload = multer({ storage })



router.post('/create-user', createUser)

router.post('/login-user', loginUser)

router.get('/get-users',passport.authenticate('jwt', {session:false}), getUsers)  

router.post('/add-banner',passport.authenticate('jwt', {session:false}),addBanner)

router.get('/get-banner',getBanners)

router.delete('/delete-banner/:bannerId',passport.authenticate('jwt', {session:false}),deleteBanner)


router.put('/update-banners/:bannerId',passport.authenticate('jwt', {session:false}),updateBanner)

router.post('/add-product',passport.authenticate('jwt', {session:false}),addProduct)

router.get('/get-products',getProducts)

router.put('/update-product/:productId',passport.authenticate('jwt', {session:false}),updateProduct)


router.post('/upload', passport.authenticate('jwt', {session:false}),upload.single('banner'), (req, res) => {
    console.log(req.file);
    return res.status(200).json({
        statusCode: 200,
        message: 'File uploaded successfully',
        data:`${process.env.BASE_URL}/files/${req.file.filename}`
    });

  });



module.exports = router