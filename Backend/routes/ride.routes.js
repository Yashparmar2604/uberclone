const express=require('express');
const router=express.Router();
const {body,query}=require('express-validator');
const rideController=require('../controllers/ride.controller');
const authmiddleware=require('../middlewares/auth.middleware')


router.post('/create',
    authmiddleware.authUser,
    body('pickup').isString().isLength({min:3}).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto','car','motorcycle']).withMessage('Invalid vehicleType address'),
    rideController.createRide

),

router.get('/get-fare',
    authmiddleware.authUser,
    query('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup'),
    query('destination').isString().isLength({min:3}).withMessage('Invalid destination'),
    rideController.getFare

)




module.exports=router;