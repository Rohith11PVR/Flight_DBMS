import React, {  useState } from "react";
import Axios from 'axios';
import NavBaru from "./navbaru";
import {useNavigate } from 'react-router-dom';

// import isEmpty from "is-empty";

const LoginU = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState ("");
const navigate = useNavigate();



  const [loginStatus, setLoginStatus] = useState(false);

  Axios.defaults.withCredentials = true;


    
  const login = () => {
    // if(isEmpty(password) || isEmpty(username)){alert("invalid credentials");}
    Axios.post("http://localhost:3001/loginu", {
      username: username,
      password: password,
    }).then((response) => {
      if (!response.data.auth) {
        alert("you have not registered!");
        setLoginStatus( false);
      } else {
        console.log(response.data);
        localStorage.setItem("token", response.data.token)
        setLoginStatus (true);
      }
    });
}

return(
  
  <div className="mot">



    
  <div className="loginlo">
        <div className="form">
        <h1>Enter Details</h1>
        <input 
          type="text" required className="bcd"
          placeholder="                         Username..." 
          onChange = { (e) => {
            setUsername (e.target.value);
          }}
          
        /> <br/>
        <input 
          type="password" className="abc"
          placeholder="                         Password..." required
          onChange = { (e) => {
            setPassword (e.target.value);
          }}
        /><br/>
        <button className = 'btq' onClick={login}>Login</button>
        </div>
      </div>

      {loginStatus && navigate(`/welcome/${username}`)  }
  </div>

);

}

export default LoginU;


// import React, {  useState } from "react";
// import Axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import  st from './LoginU.css';


// const LoginU = () => {
// const [username, setUsername] = useState("");
//   const [password, setPassword] = useState ("");
//   const navigate=useNavigate();

//   const [loginStatus, setLoginStatus] = useState(false);

//   Axios.defaults.withCredentials = true;
//   const login = () => {
//     Axios.post("http://localhost:3001/login", {
//       username: username,
//       password: password,
//     }).then((response) => {
//       if (!response.data.auth) {
//         setLoginStatus( false);
//       } else {
//         console.log(response.data);
//         localStorage.setItem("token", response.data.token)
//         setLoginStatus (true);
//       }
//     });
// }

// return(
//   <div style={{height:'100vh',width:'100vw',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} className = 'd'>
//     <div style={{marginBottom:'1.5em'}}>
//     </div>

//   <div id="login" style={{backgroundColor:'rgb(135, 206, 235)'}}  className={st.container}>
  
//   <fieldset style={{borderRadius:'0.5em',border:'2px solid white',padding:'2em 2em',display:'flex',flexDirection:'column'}}>
//   <header style={{fontFamily:'Roboto,sans-serif',fontSize:'1.6em',color:'white',marginBottom:'1em',alignSelf:'center'}} className={st.j}> USER LOGIN </header>
//     <div style={{marginBottom:'1em'}} className={st.wrapper}>
//       {/* <input type="text" placeholder="your@email.com" /> */}
//       <input style={{borderRadius:'1em',padding:'0.8em 1.4em'}}
//   type="text" 
//   placeholder="Username..." 
//   onChange = { (e) => {
//     setUsername (e.target.value);
//   }}
// />
//     </div>
//     <div className={st.wrapper}>
//       {/* <input type="password" placeholder="password" /> */}
//       <input style={{borderRadius:'1em',padding:'0.8em 1.4em',marginTop:'1em'}}
//   type="password" 
//   placeholder="Password..."
//   onChange = { (e) => {
//     setPassword (e.target.value);
//   }}
// />
//     </div>
//     <button className="k" style={{width:'100%'}} id="continue" type="button">Login</button>
//   </fieldset>
// </div>


// </div>







// );


// }

// export default LoginU;