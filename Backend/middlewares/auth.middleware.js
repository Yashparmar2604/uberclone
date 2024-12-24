const userModel=require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const captainModel = require('../models/captin.model');
const blacklistTokenModel=require('../models/blacklist.model')


module.exports.authUser= async(req,res,next)=>{
    const token=req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    if(!token){
        return res.status(401).json({message:'Please login to access this resource'});
    }

    const isBlacklisted=await blacklistTokenModel.findOne({token: token})
     if(isBlacklisted){
        return res.status(401).json({message:'Please login to access this resource'});
     }
    
    
    try{
        const decoded=jwt.verify(token,process.env.SECRET_KEY);
        
        const user=await userModel.findById(decoded._id);
        
       req.user=user;
       return next();
    }catch(err){
        return res.status(500).json({message:'Error occurred while verifying token'});
    }

}


module.exports.authCaptain=async(req,res,next)=>{
    const token=req.cookies.token || req.headers.authorization.split?.(' ')[1];
    if(!token){
        return res.status(401).json({message:'Please login to access this resource'});
    }

    const isBlacklisted=await blacklistTokenModel.findOne({token: token})
    if(isBlacklisted){
       return res.status(401).json({message:'Please login to access this resource'});
    }
    try{
        
        const decoded=jwt.verify(token,process.env.SECRET_KEY);
        
        const captain=await captainModel.findById(decoded._id);
       
        req.captain=captain
        return next();
    }catch(err) {
        console.error(err); // Log the error for debugging
        return res.status(500).json({message:'Error occurred while verifying token'});
    }

   


}