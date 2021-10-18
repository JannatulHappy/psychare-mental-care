import React from "react";
import { Link } from "react-router-dom";
import "./UpHeader.css";

const UpHeader = () => {
  return (
    <div className="up-header">
      <div className="row up-header-item container mx-auto ">
        <div className="col-md-6 col-12">
          <span>
            <strong>Location: </strong>1870 Alpaca Way Irvine, New York.
          </span>
          <span className="ms-4">
            <strong>Mail: </strong>
            <Link to="/" className="mail">
              hi@psychare.com
            </Link>
          </span>
        </div>
        <div className="col-md-4 col-6 ps-5">
          <ul className="icon ">
            <li>
            <i class="fab fa-facebook-f"></i>
            </li>
            <li>
              <i class="fab fa-facebook-messenger"></i>
            </li>
            <li>
              <i class="fab fa-twitter"></i>
            </li>
            <li>
              <i class="fab fa-instagram"></i>
            </li>
          </ul>
        </div>
        <div className="col-md-2 col-6">
          <button className="btn up-header-btn">BOOK ONLINE</button>
        </div>
      </div>
    </div>
  );
};

export default UpHeader;
