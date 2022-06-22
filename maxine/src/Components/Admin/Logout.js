import React from "react";
import { Link } from 'react-router-dom';
import NavBar from "../../navbar";
const Logout =()=>{
    return(

       <><NavBar/>
       <div className="home">

       <h1 className="abc" style={{color:'red'}}> Log out page </h1>
       <Link  to="/" >
                <button className="qwe"> Logout </button>
                </Link>
    
   </div></>
        
    );

}

export default Logout;