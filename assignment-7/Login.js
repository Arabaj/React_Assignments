import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage] = useState("")
    console.log(email);
    console.log('password',password);
    function handleLoginSubmit(event){
        event.preventDefault();
       const user=JSON.parse(localStorage.getItem('b26User'));
      //  console.log(user);
      //  console.log(typeof(user));
      if(email===user.email && password===user.password){
        toast.success('Login Successful'+ '  ' +user.username)
        
      }else{
        toast.error('Invalid Email or Password')
      }
    }
  return (
    <>
      <div className="container w-50 formContainer">
        <h3>Login</h3>
        <form  onSubmit={handleLoginSubmit}>
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
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
        <h3>{message}</h3>
      </div>
      <ToastContainer/> 
    </>
  );
};

export default Login;
