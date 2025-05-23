
import React ,{useState}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'


const ConfirmRidePopup = (props) => {

  const navigate=useNavigate();

    const [otp, setotp] = useState('')
  
    const submitHander=async(e)=>{
        e.preventDefault();
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
          params: {
              rideId: props.ride._id,
              otp: otp
          },
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
          }
      })

      if (response.status === 200) {
        props.setConfirmRidePopupPanel(false)
        props.setRidePopupPanel(false)
        navigate('/captain-riding', { state: { ride: props.ride } })
    }



    }
  
  
  
  
    return (
 <div>
    <h5
   className="p-1 text-center w-[93%]  absolute top-0"
   onClick={() => {
     props.setconfirmridePopuppanel(true);
   }}
 >
   <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
 </h5>
 <h3 className="text-2xl font-semibold mb-5 ">Confirm this ride to Start</h3>
 <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg '>
   <div className='flex items-center gap-3 '>
       <img className='h-12 rounded-full object-cover w-12' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt=""  />
       <h2 className='text-xl font-medium'>{props.ride?.user.fullname.firstname}</h2>
   </div>
   <h5 className='text-lg font-semibold'>
       2.2KM
   </h5>
 </div>
 <div className="flex gap-2 justify-between flex-col items-center  ">
   
   <div className="w-full mt-5">
     <div className="flex items-center gap-5 p-3 border-b-2">
       <i className="text-lg ri-map-pin-user-fill"></i>
       <div>
         <h3 className="text-lg font-medium">562/11-A</h3>
         <p className="text-sm -mt-1 text-gray-600">
           {props.ride?.pickup}
         </p>
       </div>
     </div>
     <div className="flex items-center gap-5 p-3 border-b-2">
       <i className="text-lg ri-map-pin-2-fill"></i>
       <div>
         <h3 className="text-lg font-medium">562/11-A</h3>
         <p className="text-sm -mt-1 text-gray-600">{props.ride?.destination}</p>
       </div>
     </div>
     <div className="flex items-center gap-5 p-3">
       <i className="ri-currency-line"></i>
       <div>
         <h3 className="text-lg font-medium">
           ₹{props.ride?.fare}
         </h3>
         <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
       </div>
     </div>
   </div>
  
  <div className='mt-6 w-full'>
   <form  onSubmit={(e)=>{
    submitHander(e)
   }}>
     
     <input type="text" 
     value={otp}
     onChange={(e)=>{
        setotp(e.target.value)
     }}
     className="bg-[#eee] px-6 py-4 text-base font-mono rounded-lg w-full mt-3"
     
     placeholder='Enter OTP'/>

   <button 
    className="w-full flex text-lg justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg">
     Confirm
   </button>
   <button  
   onClick={()=>{
       props.setconfirmridePopuppanel(false);
   }}
   className="w-full mt-1 text-lg bg-red-600 text-white font-semibold p-3 rounded-lg">
     Cancel
   </button>
   </form>
  </div>
 </div></div>
  )
}

export default ConfirmRidePopup