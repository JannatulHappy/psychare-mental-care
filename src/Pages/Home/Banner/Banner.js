import React from "react";
import "./Banner.css";
// import banner1 from "../../../assets/banner-3.jpg";
const Banner = () => {
  return (
    <div className="banner ">
      <div className="row container mx-auto">
        <div className="col-md-12 col-lg-5 banner-left fw-bold text-uppercase text-center text-white">
            <h6  className=""><i className="fas fa-grip-lines"></i>
            <i className="fas fa-grip-lines"></i>Best Psychologist in BD</h6>
            <h1 className="mt-5 mb-4 fw-bolder">Transform Your  Mindset & Achieve Your Goals</h1>
            <h6 className="text-secondary ">amazing therapies an advice to help your achieve your goals and talking important decisions in your life </h6>
        </div>
        <div className="col-md-12 col-lg-7"></div>
      </div>
    </div>
  );
};

export default Banner;
