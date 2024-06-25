import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'


export default function MasterLayout() {
  return (
    <div>
         <NavBar/>
        <div className="container">
           
            <div>
            <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}
