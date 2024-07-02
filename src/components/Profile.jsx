import React, { useEffect } from 'react'

export default function Profile() {
    let name=localStorage.getItem('UserName')
    let lastName=localStorage.getItem('lastName')
    let email=localStorage.getItem('UserEmail')
    let age =localStorage.getItem('Age')
    useEffect(()=>{
      document.title='Profile'
    })

  return (
    <div className='bg-success m-auto w-50 mt-5 text-center'>
        <h2 className='m-2'>Name : {name} {lastName}</h2>
        <h2 className='m-2'>Email : {email}</h2>
        <h3 className='mb-2'>Age : {age} </h3>
        
    </div>
  )
}
