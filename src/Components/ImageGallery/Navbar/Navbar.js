import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <header className="logo">
          <span className="the">The</span>
          <span className="title">Siren</span>
        </header>

        <ul className="list">
          <li>
            <NavLink className="nav-links" to="/">
              <span className="word">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Bollywood">
              <span className="word">Bollywood</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Technology">
              <span className="word">Technology</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Hollywood">
              <span className="word">Hollywood</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Fitness">
              <span className="word">Fitness</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/Food">
              <span className="word">Food</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
