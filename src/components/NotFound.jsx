import React from 'react'
import err from '../img/blue-screen.png'
import './App.modules.css'

export default function NotFound() {
  return (
    <div className='m-auto'>
      <img src={err} className='m-auto w-50 err' alt='not found img' width={500} height={500} />
      <h2 className='text-center h1 text-bold'>Not Found</h2>
    </div>
  )
}
