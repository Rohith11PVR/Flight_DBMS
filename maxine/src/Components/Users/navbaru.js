import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Navbaru.css";

function NavBaru() {
  const [click, setClick] = useState(false);
  const {username}=useParams();

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to={`/welcome/${username}`} className="nav-logo">
            {username} Page
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to={`/homeuser/${username}`}
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
                to={`/searchflight/${username}`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Book
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                exact
                to={`/previousbookings/${username}`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Prev Bookings
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/logoutuser"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Logout
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

export default NavBaru;