import React from 'react'
import Masterlayout from "./MasterLayout"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './NotFound'
import Home from './Home'
import Movies from './Movies'
import TvShows from './TvShows'
import People from './People'
import Login from './sign in & up/Login'
import SignUp from './sign in & up/SignUp'
import { Offline, Online } from 'react-detect-offline'
import err from './../img/blue-screen.png'
import Profile from './Profile'
import Dtailes from './Dtailes'
import LogOut from './sign in & up/LogOut'
import CheckUser from '../Context/CheckUser'

export default function App() {
 
  return (
    <BrowserRouter>
     <Online>
        <Routes>
          <Route path="/" element={<Masterlayout />}>
            <Route index element={<Home/>} />
            <Route path='movies' element={<Movies/>}/>
            <Route path='tvs' element={<TvShows/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='people' element={<People/>}/>
            <Route path='sign' element={<SignUp/>}/>
            <Route path='logOut' element={<LogOut/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='/details/:media/:id' element={<Dtailes/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Route>
        </Routes>
      </Online>
      <Offline > 
      <img src={err} className='m-auto w-50 err' alt='not found img' height={500} />
        <h1 className='text-center mt-5' >You Are offline</h1>
      </Offline>
    </BrowserRouter>
  )
  
}
