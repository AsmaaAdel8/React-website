import React from 'react'
import { Navigate } from 'react-router-dom'

export default function CheckUser({children}) {
    // console.log(children);
    let name = localStorage.getItem('UserName')
    if(name){
        return children;
    }else{
        return <Navigate to='login'/>
    }
 
}