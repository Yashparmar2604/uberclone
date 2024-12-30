import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {

  const [ridePopuppanel, setridePopuppanel] = useState(true);
  const ridePopuppanelref = useRef(null);
  const [confirmridePopuppanel, setconfirmridePopuppanel] = useState(false);
  const confirmridePopuppanelref = useRef(null);
  useGSAP(()=>{
    if(ridePopuppanel){
     gsap.to(ridePopuppanelref.current,{
       transform:'translateY(0)'
     })
    }else{
     gsap.to(ridePopuppanelref.current,{
       transform:'translateY(100%)'
     })
    }
   },[ridePopuppanel])
   useGSAP(()=>{
    if(confirmridePopuppanel){
     gsap.to(confirmridePopuppanelref.current,{
       transform:'translateY(0)'
     })
    }else{
     gsap.to(confirmridePopuppanelref.current,{
       transform:'translateY(100%)'
     })
    }
   },[confirmridePopuppanel])

  return (
    <div className="h-screen ">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
       <CaptainDetails/>
      </div>
      <div ref={ridePopuppanelref} className="fixed w-full z-10 bottom-0  translate-y-full bg-white px-3 py-10 pt-12">
        <RidePopup setridePopuppanel={setridePopuppanel} setconfirmridePopuppanel={setconfirmridePopuppanel}/>
      </div>
      <div ref={confirmridePopuppanelref} className="fixed w-full z-10  h-screen bottom-0  translate-y-full bg-white px-3 py-10 pt-12">
        <ConfirmRidePopup setconfirmridePopuppanel={setconfirmridePopuppanel} setridePopuppanel={setridePopuppanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
