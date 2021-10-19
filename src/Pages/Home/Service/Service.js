import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = (props) => {
  // destructured needed things
  const { name, image, title2Des, id } = props.service;
  return (
    // service container
    <div className="col-lg-4 col-md-6 col-12 px-4 service-container ">
      <div className="service">
        <div className="card pb-3 px-3 h-100">
          <img src={image} alt="" className="card-img-top card-img" />
          <div className="card-body p-3">
            <h5 className="service-title card-title">{name}</h5>
            <p className="card-text service-text">{title2Des.slice(0, 150)}.</p>
          </div>
          <Link to={`/service/${id}`}>
            <button className="psychare-btn">
              VIEW FOR DETAILS{" "}
              <i className="ps-2 fas fa-angle-double-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
