import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ServiceOne from '../../../image/icon/service-1.png';
import ServiceTwo from '../../../image/icon/service-2.png';
import ServiceThree from '../../../image/icon/service-3.png';
import HomeService from './HomeService/HomeService';

const HomeServices = () => {

    const services = [
        {
            id: 1,
            title: 'Anti Age Face Treatment',
            img: ServiceOne,
            price: 199,
            description: 'We do stunning and amazing anti age face treatment for woment . Do a good face treatment protect your face from dirty'
        },
        {
            id: 2,
            title: 'Hair Color & Styling',
            img: ServiceTwo,
            price: 99,
            description: 'We do stunning and amazing anti age face treatment for woment . Do a good face treatment protect your face from dirty'
        },
        {
            id: 3,
            title: 'Skin Care Treatment',
            img: ServiceThree,
            price: 299,
            description: 'We do stunning and amazing anti age face treatment for woment . Do a good face treatment protect your face from dirty'
        }
    ];


    return (
        <div className="py-5">
            <h1 className="main-title text-center py-5">Our Awesome <span>Services</span></h1>
            <div>
            <Container>
                    <Row>
                        {
                            services.map((data)=><HomeService key={data.id} service={data}></HomeService>)
                        }
                    </Row>
                    <div className="text-center py-5">
                    <Link to='/' className="common-button">Explore More <i className="fas fa-arrow-right ms-2"></i></Link>
                </div>
                </Container>
            </div>
        </div>
    );
};

export default HomeServices;