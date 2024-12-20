const captainModel=require('../models/captin.model');
const captainService=require('../services/capatin.services');
const {validationResult}=require('express-validator')
const blacklistTokenModel=require('../models/blacklist.model')


module.exports.registerCaptain=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()});
    }
    
    const {fullname,email,password,vehicle}=req.body;

    const iscaptainAlreadyexits=await captainModel.findOne({email});

    if(iscaptainAlreadyexits){
        return res.status(400).json({message:'Captain already exits'});
    }

    const hassedpassword=await captainModel.hashPassword(password)
     
    const captain=await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password:hassedpassword,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType:vehicle.vehicleType
    });

    const token=captain.genrateAuthToken();

    res.status(201).json({token,captain});


}

module.exports.loginCaptain=async(req,res,next)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors.array()});
    }

    const {email,password}=req.body;
    const captain=await captainModel.findOne({email}).select('+password');
    if(!captain){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const ismatch=await captain.comparepassword(password);
    if(!ismatch){
        return res.status(401).json({message:'Invalid email or password'});
    }

    const token=captain.genrateAuthToken();
    res.cookie("token",token);
    res.status(200).json({token,captain});

}


module.exports.captainProfile=async(req,res,next)=>{
    res.status(200).json({captain:req.captain})
}


module.exports.logoutCaptain=async(req,res,next)=>{
   
    const token=req.cookies.token || req.headers.authorization.split(' ')[1];
    await blacklistTokenModel.create({token})
    res.clearCookie('token');

  res.status(200).json({message:'Logged Out'})
}