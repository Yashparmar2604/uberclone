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

router.post('/confirm',
    authmiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.confirmRide
)

router.get('/start-ride',
    authmiddleware.authCaptain,
    query('rideId').isMongoId().withMessage('Invalid ride id'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
    rideController.startRide
)

router.post('/end-ride',
    authmiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.endRide
)




module.exports=router;