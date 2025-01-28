
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


const captainSchema=new mongoose.Schema({
 
     fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'Firstname Must be atleast 3 character or long']
        },
        lastname:{
            type:String,
            minlength:[3,'Lastname Must be atleast 3 character or long']
        }
     },
     email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
      },
      password:{
        type:String,
        required:true,
        select:false,
      },
      socketId:{
        type:String,
      },

      status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
      },

      vehicle:{
        color:{
            type:String,
            required:true,
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'Plate number should be atleast 3 charater or long']
         },
         capacity:{
            type:Number,
            required:true,
            min:[1,'Capactiy must be atleast 1']
         },
         vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto']

        }
      },
      location:{
        ltd:{
            type:Number,
        },
         lng:{
            type:Number
         }
      }



})

captainSchema.methods.genrateAuthToken=function (){
    const token=jwt.sign({_id:this._id},process.env.SECRET_KEY,{expiresIn:'24h'})
    return token;
}

captainSchema.methods.comparepassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

captainSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,12);
}




const captainModel=mongoose.model('captain',captainSchema)
module.exports=captainModel;

