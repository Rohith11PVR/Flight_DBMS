import React, { useEffect, useState } from "react";
import Axios from 'axios';
import './App.css';
import RegisterA from "./Components/RegisterA";
import RegisterU from "./Components/Users/Register"
import LoginA from "./Components/LoginA";
import LoginU from "./Components/Users/Login";
import NavBar from "./navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Addflight from "./Components/Addflight";
import Home from "./Components/Home";
import Edit from "./Components/Edit";
import Landing from "./landing";
import Viewcustomers from "./Components/viewCustomers";
import Viewflights from "./Components/Viewbuses";
import Homegif from "./Components/Users/Mediator";
import Logout from "./Components/Admin/Logout";

import User from "./Components/Users/Welcome";
import Searchflights from "./Components/Searchflights";
import Bookflights from "./Components/Bookflights";
import Showseats from "./Components/Showseats";
import App1 from "./Payment";
import Bookings from "./Components/Admin/viewBookings";
import Bookings1 from "./Components/Admin/viewBookings1";
import NavBaru from "./Components/Users/navbaru";
import Logoutuser from "./Components/Users/Logoutuser";
import Addflightdate from "./Components/Addflightdate";
import Viewflightdate from "./Components/Displayfd";
import Bookingsuser from "./Components/Users/OldBookings";


function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path='/'  element ={<Landing/>} />
        <Route exact path='/mediator'  element ={<Homegif/>} />
        {/* <Route exact path='/showseats/:id/:date/:username' element ={<Showseats/>} /> */}
        <Route exact path='/showseats/:id/:date/:from/:to/:name/:username' element ={<Showseats/>} />
        <Route exact path='/searchflight/:username' element ={<Searchflights/>} />
        <Route exact path='/book/:from/:to/:date/:username' element ={<Bookflights/>} />
        <Route exact path='/home' element ={<Home/>} />
        <Route exact path='/register'element  ={<RegisterA/>} />
        <Route exact path='/login' element ={<LoginA/>} />
        <Route exact path='/loginu' element ={<LoginU/>} />
        <Route exact path='/registeru'element  ={<RegisterU/>} />
        <Route exact path='/addf'element  ={<Addflight/>} />
        <Route exact path='/view'element  ={<Viewflights/>} />
        <Route exact path='/edit/:id'element  ={<Edit/>} />
        <Route exact path='/userinfo'element  ={<Viewcustomers/>} />
        <Route exact path='/alogout'element  ={<Logout/>} />
        <Route exact path='/bookings'element  ={<Bookings/>} />
        <Route exact path='/welcome/:username'element  ={<NavBaru/>} />   {/* navbaru.js page */}
        <Route exact path='/payment'element  ={<App1/>} />
        <Route exact path='/booking/:username'element  ={<Bookings1/>} />
        <Route exact path='/homeuser/:username'element  ={<User/>} />
        <Route exact path='/logoutuser'element  ={<Logoutuser/>} />
        <Route exact path='/date/:id'element  ={<Addflightdate/>} />
        <Route exact path='/viewdate/:id'element  ={<Viewflightdate/>} />
        <Route exact path='/previousbookings/:username'element  ={<Bookingsuser/>} />

      </Routes>
    </Router>
  );

}

export default App;