import React, { useState } from 'react'
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  
  const register = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:3001/api/user/register",{
      name : fullName,
      email : email,
      password : password,
      address : address
    }).then(res => {
      NotificationManager.success(`user ${res.data.email} has been successful registered` , " " ,3000)
      // navigate("/login");
    }).catch(err => {
      NotificationManager.error(err.response.data , " " ,3000)
      
    });
  }
  return (
    <div className="container">
      <div className="auth-form-container">
        <form action="" className='auth-form' onSubmit={(e) => register(e)}> 
        <div className="auth-form-content">
          <h3 className="auth-form-title">Register</h3>
          <div className="from-group mt-3">
            <label htmlFor=""> Full Name </label>
            <input type="text" 
              className='form-control mt-1'
              placeholder='Enter Full Name Here.....'
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </div>

          <div className="from-group mt-3">
            <label htmlFor=""> Email Address </label>
            <input type="text" 
              className='form-control mt-1'
              placeholder='Enter Email Address Here.....'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="from-group mt-3">
            <label htmlFor=""> Enter Password </label>
            <input type="text" 
              className='form-control mt-1'
              placeholder='Enter Password  Here.....'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <div className="from-group mt-3">
            <label htmlFor=""> Address </label>
            <input type="text" 
              className='form-control mt-1'
              placeholder='Enter address  Here.....'
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type='submit' className='btn btn-primary'> Submit</button>
          </div>
        </div>
        </form>
      </div>
    </div>
    
  )
}

export default Register