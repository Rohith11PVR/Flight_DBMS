import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            ABC FLIGHTS
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/addf"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Add Flights
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/userinfo"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                View Customers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/view"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                View Flight
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/bookings"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                View Bookings
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to="/alogout"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Log out
              </NavLink>
            </li>
            
          </ul>
          <div className="nav-icon" onClick={handleClick} to ='/contact'>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;