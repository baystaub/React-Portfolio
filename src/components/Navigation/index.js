import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Navigation(props) {
  return (
    <div>
      <Navbar expand="lg" bg="dark" sticky="top">
        <NavLink className="nav-link" to="/">
          <div className="text-light">
            <h4 className="nav-title-font">Bailey Staub</h4>
          </div>
        </NavLink>
        <ul className="navbar-nav ml-auto navitem-indent">
          <li className="nav-item">
            <NavLink to="/about">
              <div className="nav-font text-light p-1 mb-1">About-Me</div>
            </NavLink> 
          </li>
          <li className="nav-item">
            <NavLink to="/contact">
              <div className="nav-font text-light p-1 mb-1">Contact</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume">
              <div className="nav-font text-light p-1 mb-1">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;