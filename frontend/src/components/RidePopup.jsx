import React from 'react'

const RidePopup = (props) => {
  return (
    <div>
     <h5
    className="p-1 text-center w-[93%]  absolute top-0"
    onClick={() => {
      props.setridePopuppanel(false);
    }}
  >
    <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
  </h5>
  <h3 className="text-2xl font-semibold mb-5 ">New Ride Available</h3>
  <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg '>
    <div className='flex items-center gap-3 '>
        <img className='h-12 rounded-full object-cover w-12' src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt=""  />
        <h2 className='text-xl font-medium'>Riders Name</h2>
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
            Kankariya Lake,Ahmedabad
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-3 border-b-2">
        <i className="text-lg ri-map-pin-2-fill"></i>
        <div>
          <h3 className="text-lg font-medium">562/11-A</h3>
          <p className="text-sm -mt-1 text-gray-600">Ambavadi</p>
        </div>
      </div>
      <div className="flex items-center gap-5 p-3">
        <i className="ri-currency-line"></i>
        <div>
          <h3 className="text-lg font-medium">
            ₹200
          </h3>
          <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
        </div>
      </div>
    </div>
  <div className='flex  mt-5 w-full items-center justify-between'>
  <button 
    onClick={()=>{
        props.setridePopuppanel(false);
    }}
    className=" mt-1 bg-gray-300 text-gray-700 font-semibold p-3 px-10 rounded-lg">
      Ignore
    </button>
  
  <button 
    onClick={()=>{
        props.setridePopuppanel(false);
        props.setconfirmridePopuppanel(true);
    }}
    className=" bg-green-600 text-white font-semibold p-3  px-10 rounded-lg">
      Accept
    </button>

  </div>
  </div></div>
  )
}

export default RidePopup