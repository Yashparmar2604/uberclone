const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

const userschema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First Name should be of 3 letter or long']
        },
        lastname:{
            type:String,
           
            minlength:[3,'Last Name should be of 3 letter or long']
        }

    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[5,'Email must be of 5 leeter or long']
    },
    password:{
        type:String,
        required:true,
        select:false
        
    },
    socketId:{
        type:String,
    }
})



userschema.methods.genrateAuthToken=function (){
    const token=jwt.sign({id:this._id},process.env.SECRET_KEY,{ expiresIn:'24h' })
    return token;
}

userschema.methods.comparepassword=async function (password){
    return await bcrypt.compare(password,this.password);

}


userschema.statics.hashpassword=async function(password){
    const salt=await bcrypt.genSalt(10);
    return  await bcrypt.hash(password,salt);
    
}


const userModel=mongoose.model('user',userschema);

module.exports=userModel

