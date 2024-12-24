import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import Captainsignup from './pages/Captainsignup'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogOut from './pages/UserLogOut'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CapatinProtectWrapper'
import CaptainLogOut from './pages/CaptainLogOut'


const App = () => {
  
  return (
    <div >
      <Routes>
      <Route path='/' element={<Start />}/>
        <Route path='/login' element={<UserLogin />}/>
        <Route path='/signup' element={<UserSignup />}/>
        <Route path='/captain-login' element={<Captainlogin />}/>
        <Route path='/captain-signup' element={<Captainsignup />}/>
        <Route path='/home' element={
          <UserProtectWrapper>
          <Home/>
          </UserProtectWrapper>}
           />
           <Route  path='/users/logout' element={
            <UserProtectWrapper>
              <UserLogOut/>
            </UserProtectWrapper>
                   
           } />
            <Route path='/captain-home' element={
             <CaptainProtectWrapper>
            <CaptainHome />
            </CaptainProtectWrapper>
          

        } />
            <Route path='/captain/logout' element={
             <CaptainProtectWrapper>
            <CaptainLogOut />
            </CaptainProtectWrapper>
          

        } />

      </Routes>
    </div>
  )
}

export default App