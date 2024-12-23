import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import Home from './pages/Start'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Start from './pages/Start'
import { UserDataContext } from './context/userContext'

const App = () => {
  
  return (
    <div >
      <Routes>
      <Route path='/' element={<Start />}/>
        <Route path='/login' element={<UserLogin />}/>
        <Route path='/signup' element={<UserSignup />}/>
        <Route path='/captain-login' element={<Captainlogin />}/>
        <Route path='/captain-signup' element={<Captainsignup />}/>

      </Routes>
    </div>
  )
}

export default App