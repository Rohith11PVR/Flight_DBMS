import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import NavBar from "../../navbar";
import './A.css'
const Bookings =()=>{

    const[username,setusername]=useState('');
    
    return(

       <>
       <NavBar/>
       <div className="home">

       <h1 className="klu" style={{color :'blue'}}> View Bookings of the Customers </h1>
       <br/>
       <br/>
       {/* <h2 className="ujn" style={{color : 'green'}}> Enter the username : </h2> */}
       <label style={{color :'black'}}>Please enter the username : </label>
       <br/>
       
            <input
                type="text" placeholder="username.."
                onChange={(e) => {
                    setusername(e.target.value);
            }}
        />
        <Link id={username} to={`/booking/${username}`} style={{marginLeft:'35px',width:'15px',backgroundColor:''}} >
                <button className="ky"> Search </button>
                </Link>
       
   </div>
   </>
        
    );

}

export default Bookings;