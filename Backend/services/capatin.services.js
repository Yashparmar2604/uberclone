const captainModel=require('../models/captin.model')

 module.exports.createCaptain=async({
    firstname,lastname,email,password,color,plate,capacity,vehicleType
 })=>{
    if( !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fileds are required');
    }
    const captain=captainModel.create({
        fullname:{
            firstname,
            lastname
        
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType
        }
    })

    return captain;
     

 }