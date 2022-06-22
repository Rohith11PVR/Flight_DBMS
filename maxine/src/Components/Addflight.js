import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";
import NavBar from "../navbar";

const Addflight = () => {
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [c, setc] = useState("");
  const [d, setd] = useState("");
  const [e, sete] = useState("");
  const [f, setf] = useState("");
  const [g, setg] = useState("");

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/addf", {
      app: a,
      bpp: b,
      cpp: c,
      dpp: d,
      epp: e,
      fpp: f,
      gpp: g,
    }).then((response) => {
      console.log(response);
    });
    Axios.post("http://localhost:3001/addfk", {
      app: a,
      dpp: d,
    }).then((response) => {
      console.log(response);
    });

  };

  return (
    <><NavBar/>
    <div className="addflight">
      <h1  style={{color:'goldenrod'}} className="uj ">ADD FLIGHT</h1>
      {/* <Link to="/edit" >
        <button className="btn btn-contact"> edit </button>
      </Link> */}
      <br/>

      <label>Flight name</label>
      <input
        type="text"
        onChange={(e) => {
          seta(e.target.value);
        }}
      />
      <br/>
      <label>From location</label>
      <input
        type="text"
        onChange={(e) => {
          setb(e.target.value);
        }}
      />
      <br/>
      <label>To location</label>
      <input
        type="text"
        onChange={(e) => {
          setc(e.target.value);
        }}
      />
      <br/>
      <label>Duration</label>
      <input
        type="number"
        onChange={(e) => {
          setd(e.target.value);
        }}
      />
      <br/>
      <label>Departure Time </label>
      <input
        type="time"
        onChange={(e) => {
          sete(e.target.value);
        }}
      />
      <br/>
      <label>No of seats </label>
      <input
        type="number"
        onChange={(e) => {
          setf(e.target.value);
        }}
      />
      <br/>
      <label>Cost of seat </label>
      <input
        type="number"
        onChange={(e) => {
          setg(e.target.value);
        }}
      />
      <br/>
      <button className="kj" onClick={register}> ADD</button>
    </div>
    </>
  );
};

export default Addflight;
