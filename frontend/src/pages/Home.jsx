import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchpanel from "../components/LocationSearchpanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDrivier from "../components/WaitingForDrivier";

const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [panelopen, setpanelopen] = useState(false);
  const panelRef = useRef(null);
  const panelcloseref = useRef(null)
  const [vehiclepanel, setvehiclepanel] = useState(false)
  const vehiclepanelref = useRef(null)
  const [confirmridepanel, setconfirmridepanel] = useState(false)
  const confirmridepanelref=useRef(null);
  const [vehicleFound, setvehicleFound] = useState(false)
  const vehiclefoundref = useRef(null);
  const [DriverFound, setDriverFound] = useState(false)
  const DriverFoundref = useRef(null);



  const sumbitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelopen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding:24
        
      })
      gsap.to(panelcloseref.current,{
        opacity:1
      })
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
       
      })
      gsap.to(panelcloseref.current,{
        opacity:0
      })
    }
  }, [panelopen]);

  useGSAP(()=>{
   if(vehiclepanel){
    gsap.to(vehiclepanelref.current,{
      transform:'translateY(0)'
    })
   }else{
    gsap.to(vehiclepanelref.current,{
      transform:'translateY(100%)'
    })
   }
  },[vehiclepanel])

  useGSAP(()=>{
    if(confirmridepanel){
     gsap.to(confirmridepanelref.current,{
       transform:'translateY(0)'
     })
    }else{
     gsap.to(confirmridepanelref.current,{
       transform:'translateY(100%)'
     })
    }
   },[confirmridepanel])


   useGSAP(()=>{
    if(vehicleFound){
     gsap.to(vehiclefoundref.current,{
       transform:'translateY(0)'
     })
    }else{
     gsap.to(vehiclefoundref.current,{
       transform:'translateY(100%)'
     })
    }
   },[vehicleFound])

   useGSAP(()=>{
    if(DriverFound){
     gsap.to(DriverFoundref.current,{
       transform:'translateY(0)'
     })
    }else{
     gsap.to(DriverFoundref.current,{
       transform:'translateY(100%)'
     })
    }
   },[DriverFound])

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div  className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5  
          ref={panelcloseref}
          onClick={(e)=>{
            setpanelopen(false)
          }}
          className="absolute opacity-0 top-6 right-6 text-2xl ">
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              sumbitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setpanelopen(true);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              value={pickup}
              onChange={(e) => {
                setpickup(e.target.value);
              }}
              type="text"
              placeholder="Add a Pickup Location"
            />
            <input
              onClick={() => {
                setpanelopen(true);
              }}
              value={destination}
              onChange={(e) => {
                setdestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter Your Destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white   h-0">
          <LocationSearchpanel  setpanelopen={setpanelopen} setvehiclepanel={setvehiclepanel}/>
        </div>
      </div>
      <div ref={vehiclepanelref}className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
      
        <VehiclePanel setconfirmridepanel={setconfirmridepanel}  setvehiclepanel={setvehiclepanel} />

      </div>
      <div ref={confirmridepanelref}className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
      
      <ConfirmRide setconfirmridepanel={setconfirmridepanel} setvehicleFound={setvehicleFound}/>

    </div>
    <div ref={vehiclefoundref} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
      
      <LookingForDriver setvehicleFound={setvehicleFound}/>

    </div>
    <div  ref={DriverFoundref} className="fixed w-full z-10 bottom-0  bg-white px-3 py-6 pt-12">
      
      <WaitingForDrivier setDriverFound={setDriverFound} />

    </div>

    </div>
  );
};

export default Home;
