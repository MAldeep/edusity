import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
function NavBar() {
  return (
    <nav className=" col-12 justify-content-between align-items-center position-fixed top-0 left-0">
        <div className="container justify-content-between align-items-center d-flex">
            <img src={logo} className="logo" />
            <ul className=" d-flex gap-5 list-unstyled align-items-center p-3 m-0">
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className="btn btn-light">Contact us</button></li>
            </ul>
        </div>
    </nav>
  );
}

export default NavBar;
