import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  useEffect(()=>{
    document.title='Regiser'
  });

  const navigate=useNavigate();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

const [user,setUser]=useState('');
const [email,setEmail]=useState('');
const [lastname,setLastName]=useState('')
const [password,setPassword]=useState('');
const [age,setAge]=useState('');
let getFormData=(e)=>{
  e.preventDefault();
  setData();
  navigate('/login', { replace: true });
}
let setData=()=>{
  localStorage.setItem("UserName",user);
  localStorage.setItem('lastName',lastname)
  localStorage.setItem("UserEmail",email);
  localStorage.setItem("Age",age);
  localStorage.setItem("UserPassword",password);
  
}
  return (<>
    <div className={'w-75 m-auto py-5'}>
        <h2>Registeration Form</h2>
        <form onSubmit={getFormData}>
          <div className="input-data my-2">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              ref={firstNameRef}
              className="form-control my-2"
              name="first_name"
              onChange={()=>{setUser(firstNameRef.current.value)}}
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              ref={lastNameRef}
              className="form-control my-2"
              onChange={()=>{setLastName(lastNameRef.current.value)}}
              name="last_name"
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              ref={ageRef}
              className="form-control my-2"
              onChange={()=>{setAge(ageRef.current.value)}}
              name="age"
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
                ref={emailRef}
              onChange={()=>{setEmail(emailRef.current.value)}}
              className="form-control my-2"
              name="email"
            />
          </div>
          <div className="input-data my-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              ref={passwordRef}
              className="form-control my-2"
              name="password"
              onChange={()=>{setPassword(passwordRef.current.value)}}
            />
          </div>
          <button className="btn btn-info my-3 float-end">register</button>
          <div className="clear-fix"></div>
        </form>
      </div> 
    </>)
}
