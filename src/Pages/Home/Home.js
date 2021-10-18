import React from "react";
import Patients from "../Patients/Patients";
import About from "./About/About";

import Banner from "./Banner/Banner";
import Doctor from "./Doctor/Doctor";
import Process from "./Process/Process";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Process></Process>
      <Doctor></Doctor>
    </div>
  );
};

export default Home;
