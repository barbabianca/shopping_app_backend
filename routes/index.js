const express = require('express')
const { createUser,loginUser, getUsers } = require('../controllers/userController')
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

router.post('/upload', upload.single('banner'), (req, res) => {
    console.log(req.file);
    return res.status(200).json({
        statusCode: 200,
        message: 'File uploaded successfully'
    });

  });

module.exports = router