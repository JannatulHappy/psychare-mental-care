import React from "react";
import "./About.css";
import aboutImg from "../../../assets/about.png";
import aboutDoctor from "../../../assets/about-doctor.jpg";
import aboutSign from "../../../assets/about-sign.jpg";
const About = () => {
  return (
    <div className="about-container">
      <div className="row about container my-5 mx-auto">
        <div className="col-md-12 col-lg-6 pe-5 col-12 about-left">
          <p>For Better Wellness & Hope</p>
          <hr className="hr" />
          <h1 className="about-title">Welcome to Psychare</h1>
          <h3 className="about-sub-title my-4">
            Psychological Care For Everyone Who Needs!
          </h3>
          <p>
            There's nothing we wont try. Never heard the word impossible. This
            time there's no stopping us. Michael Knight a young loner on a
            crusade to champion the cause of the innocent. The helpless. The
            power less in a world of criminals who operate above the law.
            <br /> Bring to the table win-win survival strategies to ensure
            proactive domination. At the end of the day, going forward, a new
            normal that has evolved from generation X is on the runway heading
            towards a streamlined cloud solution. User generated content in
            real-time.
          </p>
          <div className="row d-flex mt-5">
            <div className="col-md-6 ">
              <img className="img-fluid" src={aboutDoctor} alt="" />
            </div>
            <div className="col-md-6  about-doctor mt-2">
              <h5>Dr. James William</h5>
              <span>Chief Medical Officer</span>
              <img src={aboutSign} alt="" />
            </div>
          </div>
        </div>

        <div className="col-md-12 col-lg-6 my-4 col-12  about-right">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
