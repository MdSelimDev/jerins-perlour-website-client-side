import React from 'react';
import { Col } from 'react-bootstrap';
import './HomeService.css';

const HomeService = ({ service }) => {
    
    const { title , img,price,description} = service;

    return (
        <Col lg={4} sm={12}>
            <div className="text-center px-4 py-5 rounded-3 single-services">
                <img src={img} alt="" />
                <h2 className="service-title pt-4 pb-2">{title}</h2>
                <h3 className="service-price py-2">${price}</h3>
                <p className="service-descrip">{description}</p>
            </div>
        </Col>
    );
};

export default HomeService;