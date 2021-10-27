import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="services-container p-5">
     <div className="row text-center"> <h6 className="service-title text-center "><hr className="hr"/>PROGRAM OFFERINGS</h6>
     <h2 className="services-title">Magical & Inspirational lessons for help seeking people .</h2></div>
        <div className="services row g-md-4  g-lg-4 container mx-auto my-4">
            {
                services.map(service=><Service service={service} key={service.id}></Service>)
            }
        </div>
    </div>
  );
};

export default Services;
