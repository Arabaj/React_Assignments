import React, { useState } from 'react'
import { toast } from 'react-toastify';
const Register = () => {
    const[username,setUsername]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    console.log(username,email,password);
  const handleRegisterSubmit=(event)=>{
    event.preventDefault();
    const payload={username,email,password}
    console.log(payload)
    localStorage.setItem('b26User',JSON.stringify(payload));
    // toast.success('Login Successful'+ '  ' + payload.username)
  }
  return (
    <div className="container w-50 formContainer">
        <h3>Register here...</h3>
        <form onSubmit={handleRegisterSubmit}>
        <div className="mb-3">
            <label className="form-label">
              Username
            </label>
            <input
              type="text"
              required='true'
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter Username"
              onChange={(event)=>{setUsername(event.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              required='true'
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(event)=>{setEmail(event.target.value)}}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1"
             className="form-label">
              Password{" "}
            </label>
            <input type="password" 
            required='true'
            className="form-control"
            placeholder="Enter password" 
            onChange={(e)=>{setPassword(e.target.value)}}
            />
          </div>
          <button  
          className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
  )
}

export default Register
