import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Captainlogin = () => {
     const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [captainData, setcaptainData] = useState({})
    
      const sumbitHandler=(e)=>{
        e.preventDefault();
        setcaptainData({
            email:email,
            password:password
        })
        
        
        setEmail('');
        setPassword('');
      }
  return (
    <div className="p-7 h-screen flex flex-col justify-between ">
    <div>
      <img
        className="w-20 mb-3"
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        alt=""
      />
      <form onSubmit={(e)=>{
          
          sumbitHandler(e);
      }}>
        <h3 className="text-lg font-medium mb-2">Whats's Your email </h3>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 broder w-full text-lg placeholder:text-base"
          placeholder="email@example.com"
        />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>

        <input
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="bg-[#eeeeee] mb-7 rounded px-4 py-2 broder w-full text-lg placeholder:text-base"
          type="password"
          placeholder="Password"
        />

        <button className="bg-[#111] text-white font-semibold  mb-3 rounded px-4 py-2  w-full text-lg placeholder:text-base">
          Login
        </button>
      </form>
      <p className="text-center">
      Join a flet?
        
        <Link to="/captain-signup" className="text-blue-600">
          Register As a captain
        </Link>
      </p>
    </div>
    <div>
      <Link
      to='/login'
       className="bg-[#d5622d] flex items-center justify-center text-white font-semibold  mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base">
        Sign in As User
      </Link>
    </div>
  </div>
  )
}

export default Captainlogin