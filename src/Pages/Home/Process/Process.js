import React from "react";
import "./Process.css";
import process from "../../../assets/the-process.jpg";
const Process = () => {
  return (
    <div className="process-container ">
      <div className="process row my-5  container mx-auto">
        <div className="col-lg-6 col-md-12 process-left">
          <img className="img-fluid px-5" src={process} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 process-right mt-2">
          <h6 className="sub-title ">
            <i className="fas fa-grip-lines"></i>
            <i className="fas fa-grip-lines"></i>
            <i className="fas fa-grip-lines"></i>THE PROCESS
          </h6>
          <h2 className="my-4">An Amazing Tagline For Your Process...</h2>
          <p>
            Mental health, a state of well-being in which the individual
            realizes his or her own abilities, can cope with the normal stresses
            of life, can work productively and fruitfully, and is able to make a
            contribution to his or her community" according to the World Health
            Organization (WHO).
          </p>
          <div className="d-flex mt-5 mb-3">
          <i className="fas fa-grin-hearts"></i>
            <div className="mx-4">
              <h6 className="title">TALK TO US FIRST</h6>
              <p>
                Struggling? Get free, confidential support from a real human
                over phone, text or webchat.
              </p>
            </div>
          </div>
          <div className="d-flex mb-3">
          <i class="fas fa-address-book"></i>
            <div className="mx-4">
              <h6  className="title">BOOK YOUR SESSION</h6>
              <p>
                Simplify your booking process—Get contracts signed,
                questionnaires answered, and fees paid—all during booking.
              </p>
            </div>
          </div>
          <div className="d-flex mb-3">
          <i class="far fa-handshake"></i>
            <div className="mx-4">
              <h6  className="title">COME SIT WITH ME</h6>
              <p>
                Turn a gray day into all the colors of the rainbow by sitting
                down on a buddy bench and having a chat with a friends like us
                in this imaginative Level 2 Ready-to-Read inspired by Psychare!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
