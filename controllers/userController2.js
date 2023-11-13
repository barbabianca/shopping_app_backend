const Users = require('../models/users')
const md5 = require('md5')

const createUser = async (req, res) => {
    try {
        console.log(req.body); // Log the body to see what you're getting in the request

        if (!req.body.password) {
            // Handle the case where password is not provided
            return res.status(400).json({
                statusCode: 400,
                message: 'Password is required'
            });
        }

        const user = await Users.findOne({ email: req.body.email });
        if (user) {
            return res.status(409).json({
                statusCode: 409,
                message: 'Email already exists'
            });
        }

        req.body.password = md5(req.body.password);
        const newUser = new Users(req.body);
        
        const result = await newUser.save();
        return res.status(201).json({
            statusCode: 201,
            message: 'User created successfully',
            data: result
        });

    } catch (err) {
        console.error(err);
        return res.status(503).json({
            statusCode: 503,
            message: 'Server error',
            error: err.message
        });
    }
}


module.exports = {
    createUser 
}