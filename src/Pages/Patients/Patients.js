import React from "react";
import "./Patients.css";
import experienceImg from '../../assets/experiance.jpg'
// private route
const Patients = () => {
  return (
    // patient section
    <div className="patient-container mt-5">
      <div className="row container  mx-auto patient">
        {/* patient left */}
        <div className=" col-md-6 mt-5 col-lg-3 patient-left">
          <h2 className="text-white">
            <strong>New Patient</strong> Special Offer
          </h2>
          <hr className="hr" />
          <p className="offer-sub-title">
            Consultation, Exam & 1st Treatment - Only $49
          </p>
          <button className="offer-btn">Get Offer</button>
        </div>
        {/* new patient */}
        <div className="col-md-6 mt-5 col-lg-9 px-5">
          <h1 className="patient-title ">New Patient</h1>
          <hr className="hr" />
          <h5 className="my-4 patient-sub-title">
            We offers our patient form(s) online so they can be finished it in
            the comfort of your own home or office.
          </h5>
          <p>
            <i className="fas fa-check"></i>All forms are PDF files. You will need
            AdobeReader® to view them...
          </p>
          <p>
            <i className="fas fa-check"></i>If you do not already have AdobeReader®
            installed on your computer, Click Here to download.
          </p>
          <p>
            <i className="fas fa-check"></i>Download the necessary form(s), print
            them out and fill in the required information.
          </p>
          <p>
            <i className="fas fa-check"></i>Fax us your printed and completed
            form(s) or bring it with you to your appointment
          </p>
          <img src={experienceImg} alt="" />
          <h1 className="patient-title my-4">First Visit Experience</h1>
          <h4 className="patient-sub-title ">Brief Paperwork</h4>
          <p className="patient-text">
            After entering the workplace, we have some short printed material
            for you to round out. The printed material gives us general data
            about yourself and your condition. Littleton Chiropractic offers our
            patient structures online so they can be finished in the
            accommodation of your own home or office.
          </p>
          <h4 className="patient-sub-title">Counsel</h4>
          <p className="patient-text">
            Once the printed material has been finished, you will have a counsel
            with the specialist to talk about your wellbeing related issues,
            worries, and additionally our future suggestions.
          </p>
          <h4 className="patient-sub-title"> History and Examination</h4>
          <p className="patient-text">
            With a specific end goal to figure out what your genuine issue is,
            the specialist will pose different inquiries identified with your
            wellbeing. Next, various particular tests will be performed to
            figure out which parts of your spine and sensory system are
            influenced.
          </p>
          <h4 className="patient-sub-title"> Computerized X-beam Studies</h4>
          <p className="patient-text">
            Your particular condition of wellbeing may oblige us to take x-beams
            to either discount a genuine condition or help us in building up the
            best treatment anticipate you.
          </p>
          <h4 className="patient-sub-title"> Plan Your Next Appointment</h4>
          <p className="patient-text">
            You will be given a helpful arrangement time for your subsequent
            visit. As a rule, patients are seen inside 1-2 days and are
            furnished with a total audit of discoveries. Future proposals will
            likewise be talked about amid this time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Patients;
