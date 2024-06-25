import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
  
  const [username,setUsername]=useState('');
  const [useremail,setUseremail]=useState('')
  const [userpassword,setUserpassword]=useState()

  var getData=()=>{
    var name=localStorage.getItem('UserName');
    var email=localStorage.getItem('UserEmail')
    var password=localStorage.getItem('UserPassword')

    if(name===username && email===useremail && password===userpassword){
      navigate('/home', { replace: true });
      alert(`Welcome ${name}`)
    }else{
      alert('Your userName or Email or Password was wrong try again')
    }
  }
  let submitData=(e)=>{
    e.preventDvalte();
    getData();
  }
 return (
    <> 
      <div className='w-75 m-auto py-5'>
        <h2>Login Form</h2>
        <form onSubmit={submitData}>
          <div>
            <label htmlFor="user">UserName</label>
            <input 
              type="text"
              id='user'
              value={username}
              autoComplete="username"
              className="form-control my-2" name='user'
              onChange={(e)=>setUsername(e.target.value)}
              required 
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id='email'
              value={useremail}
              autoComplete="email"
              className="form-control my-2"  name="email" 
              onChange={(e)=>setUseremail(e.target.value)}
             required
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id='password'
              value={userpassword}
              className="form-control my-2"
              autoComplete="current-password"
              onChange={(e)=>setUserpassword(e.target.value)}
              name="password" required
            />
          </div>
          <button type='submit' className="btn btn-info my-3 float-end">register</button>
        </form>
        </div>
    </>
  )
}
