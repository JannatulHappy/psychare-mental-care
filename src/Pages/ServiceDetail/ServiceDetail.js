import React from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css'
const ServiceDetail = () => {
    const {serviceId}=useParams()
    return (
        <div>
            <h2>hello{serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;