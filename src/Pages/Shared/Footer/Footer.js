import React from "react";
import "./Footer.css";
import footerImg from "../../../assets/slcr-logo-footer.svg";

const Footer = () => {
  // footer start
  return (
    <div className="footer-container">
      <div className="footer container p-5 mx-auto row mt-5">
        <div className="col-md-6 col-lg-3 col-12 ">
          <img src={footerImg} alt="" />
          <hr className="footer-hr" />
          <p className="footer-text">
            Firm offer any possible carpentry and carpentry administrations you
            may require. we adore finding the correct answer.
          </p>
          <div className="col-md-4 col-6 ps-5">
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
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Quick Link</h3>
          <hr className="footer-hr" />
          <p className="footer-text">Home</p>
          <p className="footer-text">About</p>
          <p className="footer-text">Services</p>
          <p className="footer-text">Details</p>
          <p className="footer-text">Patients</p>
          <p className="footer-text">Blog</p>
        </div>
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Services</h3>
          <hr className="footer-hr" />
          <p className="footer-text">Anxiety Disorder</p>
          <p className="footer-text">Couple Therapy</p>
          <p className="footer-text">Individual Coaching</p>
          <p className="footer-text">Depression Therapy</p>
          <p className="footer-text">Dating & Relationship</p>
          <p className="footer-text">Self Esteem Therapy</p>
        </div>
        <div className="col-md-6 col-lg-3 col-12  ">
          <h3 className="footer-title">Book Appointment</h3>
          <hr className="footer-hr" />
          <p className="footer-text">(1800) 574 9687</p>
          <p className="footer-text">65, Street, New Youk, MAC 5245</p>
          <p className="footer-text"> hi@psychare.com</p>
          <p className="footer-text">Contact us now for a quote about consultation ( Available 24/7 )</p>
          
        </div>
        <p className="footer-last-text text-center mt-5">© 2021 -Psychare Mental Health. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
