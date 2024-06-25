import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';

export default function LogOut() {
  useEffect(()=>{
    document.title='LogOut'
  })
   let logOut=()=>{
    localStorage.removeItem('UserName');
    return <Navigate to='login' />
   }
  return (
    <div>
        
    </div>
  )
}
