import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";
import NavBar from "../navbar";
import { useParams } from "react-router-dom";
import "./Af.css"

const Addflightdate = () => {
  const [date, setdate] = useState("");
  const {id}=useParams();

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/addfk", {
        id:id,
        date:date,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <><NavBar/>
    <div className="addflight">
      <h1  style={{ color:'greenyellow'}} className='f'>Add dates to the flight ...</h1>
      <h1  style={{ color:'greenyellow'}} className='f'>{id}</h1>
      <br/>
      <br/>
      <label style={{ fontSize:'20px'}}  className="op ">Enter the date : </label>
      <input
        type="date"
        onChange={(e) => {
          setdate(e.target.value);
        }}
      />

      
      <br/>
      <button className="z" onClick={register}>Add</button>
    </div>
    </>
  );
};

export default Addflightdate;
