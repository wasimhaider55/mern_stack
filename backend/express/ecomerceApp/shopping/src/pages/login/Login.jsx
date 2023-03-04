import React, { useState } from 'react'
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import {NotificationManager} from 'react-notifications';
import { useNavigate } from 'react-router-dom';




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate = useNavigate();
  
  const login = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:3001/api/user/login",{
      email : email,
      password : password,
    }).then(res => {
      localStorage.setItem("token",res.headers.token)
      NotificationManager.success(`user has successfully logged in!` , " " ,3000);
      navigate("/home");
    }).catch(err => {
      NotificationManager.error(err.response.data , " " ,3000)
      
    });
  }

  return (
    <div className="container">
      <div className="auth-form-container">
        <form action="" className='auth-form' onSubmit={(e) => login(e)}> 
        <div className="auth-form-content">
          <h3 className="auth-form-title">Login</h3>
          
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


          <div className="d-grid gap-2 mt-3">
            <button type='submit' className='btn btn-primary'>Login</button>
          </div>
        </div>
        </form>
      </div>
    </div>
    
  )
}

export default Login