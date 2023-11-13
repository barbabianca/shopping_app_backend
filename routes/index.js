const express = require('express')
const { createUser,loginUser, getUsers } = require('../controllers/userController')

const router = express.Router()

const passport = require('passport')


router.post('/create-user', createUser)

router.post('/login-user', loginUser)

router.get('/get-users',passport.authenticate('jwt', {session:false}), getUsers)  


module.exports = router