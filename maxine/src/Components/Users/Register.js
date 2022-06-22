import React, {  useState } from "react";
import Axios from 'axios';
import './register.css';



const RegisterU = () =>{


    const [nameReg, setNameReg] = useState ("");
    const [ageReg,setageReg]=useState();
    const [genderReg,setgenderReg]=useState();
    const [emailReg, setEmailReg] = useState ("");
    const [addressReg, setAddressReg] = useState ("");
    const [phoneReg, setPhoneReg] = useState ("");
    const [passwordReg, setPasswordReg] = useState ("");
  

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/registeru", {
          name: nameReg,
          age: ageReg,
          gender:genderReg,
          email: emailReg,
          phone: phoneReg,
          address: addressReg,
          password: passwordReg,

        }).then((err,res) => {
          if(err){alert("the user is already registered"); }
        });
      };
     
       return (
        <div class="con">
       <div className="registration">
        {/* <div class="header"> */}
	     	<h2>Create Account</h2>
	      {/* </div> */}

        {/* <form id="form" class="form"> */}
        {/* <div class="form-control"> */}
        <label>Name</label>
        <input className="input--style-3"
          type="text" placeholder="Name.." required
          onChange={(e) => {
            setNameReg(e.target.value);
          }}  
        /><br/>
        {/* </div> */}

        {/* <div class="form-control"> */}
        <label>Age</label>
        <input className="input--style-3"
          type="number" placeholder="Age.." required
          onChange={(e) => {
            setageReg(e.target.value);
          }}
          /><br/>
          {/* </div> */}

          {/* <div class="form-control"> */}
        <label>Gender</label>
        <input className="input--style-3"
          type="text" placeholder="Gender" required
          onChange={(e) => {
            setgenderReg(e.target.value);
          }}
          /><br/>
          {/* </div> */}

        {/* <div class="form-control"> */}
        <label>Email</label>
        <input className="input--style-3"
          type="email" placeholder="Email" required
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          /><br/>
          {/* </div> */}

          {/* <div class="form-control"> */}
        <label>Phone</label>
        <input className="input--style-3"
          type="text" placeholder="mobileno.." required
          onChange={(e) => {
            setPhoneReg(e.target.value);
          }}
          /><br/>
          {/* </div> */}

          {/* <div class="form-control"> */}
        <label>Address</label>
        <input className="input--style-3"
          type="text" placeholder="Address.." required
          onChange={(e) => {
            setAddressReg(e.target.value);
          }}
          /><br/>
          {/* </div> */}

        {/* <div class="form-control"> */}
        <label>password</label>
        <input className="input--style-3"
          type="password" placeholder="password" required
          onChange={(e) =>{
            setPasswordReg(e.target.value);
          }} 
          /> <br />
          {/* </div> */}

        <button className = "k" onClick={register}> Register</button>
        {/* </form> */}
      </div>
      // </div>
      );
}

export default RegisterU;