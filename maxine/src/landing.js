import React from "react";
import "./Ho.css"
import { Link } from 'react-router-dom';
const Gome =()=>{
    return(
        <>
        {/* <NavBar/> */}
        <div className="gome">
           <div className="welcome-text">
        <h1>
        WeLCOME  <span>to Air-X</span></h1>
     
        {/* <a href="#">Admin </a> */}
        <Link to="/login" >
        <button className="h" > Admin </button> 
        </Link>

       
        
     
        {/* <a href="#">User</a> */}
        <Link to="mediator" >
        <button className="h" > User </button>
      </Link>
      </div>
       </div> 
      
        </>

        
         
    );

}

export default Gome;