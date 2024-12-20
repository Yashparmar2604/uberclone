const express=require('express')
const router=express.Router();
const {body}=require('express-validator');
const captaincontroller=require('../controllers/captain.controller');
const authmiddleware=require('../middlewares/auth.middleware')





router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage
    ('First name must be at least 3 charcters long'),
    body('password').isLength({min:6}).withMessage
    ('Password must be atleast 6 character or long'),
    body('vehicle.color').isLength({min:3}).withMessage('Color must be at least 3 charater or long'),
    body('vehicle.plate').isLength({min:3}).withMessage('Plate must be at least 3 charater or long'),
    body('vehicle.capacity').isInt({min:1}).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn(['car','motorcycle','auto']).withMessage('Invalid vehicle type')


],
captaincontroller.registerCaptain
)


router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Invalid Password')
],captaincontroller.loginCaptain);

router.get('/profile',authmiddleware.authCaptain,captaincontroller.captainProfile);
router.get('/logout',authmiddleware.authCaptain,captaincontroller.logoutCaptain)



module.exports=router
