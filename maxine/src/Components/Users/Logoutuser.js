import React from "react";
import { Link } from 'react-router-dom';
import NavBaru from "./navbaru";
import './LoginU.css'
const Logoutuser=()=>{
    return(

       <><NavBaru/>
       <div className="home">
       <h1 className="abc" style={{color:'royalblue'}}> Log out page </h1>
       <Link  to="/" >
            <button className="k"> Logout </button>
        </Link>
    
   </div></>
        
    );

}

export default Logoutuser;