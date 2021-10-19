import React from "react";
import "./Doctor.css";
import doctor1 from '../../../assets/doctor-1.jpg'
import doctor2 from '../../../assets/doctor-2.jpg'
import doctor3 from '../../../assets/doctor-3.jpg'
import doctor4 from '../../../assets/doctor-4.jpg'

const Doctor = () => {
  return (
    <div className="doctors-container">
      <div className="row my-5 container mx-auto">
        <h2 className="title">
          Our Doctors
          <hr className="hr" />
        </h2>

        <h5 className="sub-title" >
          Bring to the table win-win survival strategies to ensure proactive
          domination. At the end of the day, going forward, <br />a new normal
          that has evolved from generation X is on the runway heading towards.
        </h5>
        <div className="row my-5  container mx-auto">
          <div className="text-center doctor col-lg-3 col-md-6">
            <img className="img-fluid m-4" src={doctor1} alt="" />
            <h5 className="title">Susan Lopez </h5>
            <p className="sub-title">Founder & Senior consultant</p>
            <ul className="icon  list-unstyled">
            <li>
            <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-facebook-messenger"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </ul>
          </div>
          <div className="text-center doctor col-lg-3 col-md-6">
            <img className="img-fluid m-4" src={doctor2} alt="" />
            <h5 className="title">Richard  Drueld</h5>
            <p className="sub-title">Senior consultant, MBBS</p>
            <ul className="icon list-unstyled ">
            <li>
            <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-facebook-messenger"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </ul>
          </div>
          <div className="text-center doctor col-lg-3 col-md-6">
            <img className="img-fluid m-4" src={doctor3} alt="" />
            <h5 className="title">Orbek Miel</h5>
            <p className="sub-title">Senior consultant, MBBS</p>
            <ul className="icon list-unstyled ">
            <li>
            <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-facebook-messenger"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </ul>
          </div>
          
          <div className="text-center doctor col-lg-3 col-md-6">
            <img className="img-fluid m-4" src={doctor4} alt="" />
            <h5 className="title">Michel Joe </h5>
            <p className="sub-title">Senior consultant, MBBS</p>
            <ul className="icon list-unstyled ">
            <li>
            <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-facebook-messenger"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
