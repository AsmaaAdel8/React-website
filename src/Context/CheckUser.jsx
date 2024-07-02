import React from 'react'
import { Navigate } from 'react-router-dom'

export default function CheckUser({Children}) {
 
    let name = localStorage.getItem('UserName')
    if(!name){
        return <Navigate to='login'/>
    }else{
        return Children;
    }
 
}
