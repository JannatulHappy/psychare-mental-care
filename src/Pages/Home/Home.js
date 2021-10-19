import React from "react";
import About from "./About/About";

import Banner from "./Banner/Banner";
import Doctor from "./Doctor/Doctor";
import Process from "./Process/Process";
import Services from "./Services/Services";


const Home = () => {
  return (
    <div>
      
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Process></Process>
      <Doctor></Doctor>
    </div>
  );
};

export default Home;
