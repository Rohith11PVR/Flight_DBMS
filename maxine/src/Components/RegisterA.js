import React, {  useState } from "react";

import Axios from 'axios';

const RegisterA = () =>{
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState ("");

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/register", {
          username: usernameReg,
          password: passwordReg,
        }).then((response) => {
          console.log(response);
        });
      };

      return (
<div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input 
          type="text" 
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        /><br/>
        <label>password</label>
        <input 
          type="text"
          onChange={(e) =>{
            setPasswordReg(e.target.value);
          }} 
        /> <br />
        <button onClick={register}> Register</button>
      </div>
      );
}

export default RegisterA;