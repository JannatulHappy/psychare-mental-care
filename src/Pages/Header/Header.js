import React from "react";
import { NavLink } from "react-router-dom";
import UpHeader from "./UpHeader/UpHeader";
import logo from "../../assets/logo.svg";

import "./Header.css";
const Header = () => {
  return (
    <div>
      <UpHeader></UpHeader>
      <div className="header my-3 mx-auto row container-lg">
        <div className="col-lg-3 col-md-6  col-12">
          <img src={logo} alt="" />
        </div>
        <nav className="header-middle col-lg-4 col-md-6 col-12 ">
          <NavLink to="/home"> Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/patients">Patients</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
        <div className="col-lg-5 col-md-6 col-12 header-right">
          <NavLink className="header-btn" to="/login">
            LOGIN
          </NavLink>
          <span>
            <i className="fas fa-shopping-cart"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
