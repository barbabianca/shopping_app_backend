const Banners = require('../models/banner')

const addBanner = async (req,res)=>{
    try {
        console.log('Log for LoginUser',req.body)
       
         const newBanner = new Banners(req.body)
        newBanner.save()
        .then(result =>{
            return res.status(201).json({
                statusCode:201,
                message: 'Banner added successfully'

            })
    })
            .catch(err => {
                return res.status(400).json({
                    statusCode:400,
                    message: 'Bad request'
                })
            })
        } catch {
            return res.status(503).json({
                statusCode: 503,
                message: 'Server error1'
            })
        }
    }
const getBanners = async (req,res)=>{
        try {
            console.log('Log for getBanners',req.body)
           Banners.find()
            .then(result =>{
                return res.status(200).json({
                    statusCode:200,
                    message: 'Banners fetched successfully',
                    data:result
    
                })
        })
                .catch(err => {
                    return res.status(400).json({
                        statusCode:400,
                        message: 'Bad request'
                    })
                })
            } catch {
                return res.status(503).json({
                    statusCode: 503,
                    message: 'Server error1'
                })
            }
        }
const updateBanner = async (req,res)=>{
            try {
                console.log('Log for updateBanner',req.body)
                const bannerID = req.params.bannerID
               
                Banners.findOneAndUpdate({_id:bannerID}, req.body)
                .then(result =>{
                    return res.status(200).json({
                        statusCode:200,
                        message: 'Banner updated successfully'
        
                    })
            })
                    .catch(err => {
                        return res.status(400).json({
                            statusCode:400,
                            message: 'Bad request'
                        })
                    })
                } catch {
                    return res.status(503).json({
                        statusCode: 503,
                        message: 'Server error1'
                    })
                }
            }
const deleteBanner = async (req,res)=>{
                try {
                    console.log('Log for deleteBanner',req.body)
                    const bannerID = req.params.bannerID
                   
                    Banners.findOneAndDelete({_id:bannerID})
                    .then(result =>{
                        return res.status(200).json({
                            statusCode:200,
                            message: 'Banner deleted successfully'
            
                        })
                })
                        .catch(err => {
                            return res.status(400).json({
                                statusCode:400,
                                message: 'Bad request'
                            })
                        })
                    } catch {
                        return res.status(503).json({
                            statusCode: 503,
                            message: 'Server error1'
                        })
                    }
                }

    module.exports = {
        addBanner,
        getBanners,
        updateBanner,
        deleteBanner
    }