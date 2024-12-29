import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchpanel =  (props) => {
   
     
    const locations=[
        "24B,Near Kapoor's cafe",
        "23B,Near random Kapoor's cafe",
        "20B,Near random 3 Kapoor's cafe",
        "18B,Near random 4 Kapoor's cafe"
    
    ]
  return (
    <div>
        {
            locations.map(function(elem,idx){
               return <div key={idx}  onClick={()=>{
                props.setvehiclepanel(true);
                props.setpanelopen(false);
               }} className="flex gap-4 border-2  border-white  active:border-black  p-3 rounded-xl  items-center my-2 justify-start  ">
                <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                  <i className="ri-map-pin-fill"></i>
                </h2>
                <h4 className="font-medium">{elem}</h4>
              </div>
 
            })
        }
      
    </div>
  );
};

export default LocationSearchpanel;
