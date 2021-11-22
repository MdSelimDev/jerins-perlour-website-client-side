import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../../Shared/Header/Header';
import BannerImg from '../../../image/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-main-box">
            <Header />
            <div className="py-5">
                <Container>
                    <Row className="align-items-center"> 
                        <Col lg={5} sm={12}>
                            <div className="banner-text">
                                <h1 className="banner-head-title">Beauty Salon <br/> For Every Women</h1>
                                <p className="banner-para-text">We give a qualityful service as your demand. We Make a team for our salon to do good work and customer satisfiction our main priority.</p>
                                <Link className="common-button" to="/">Set An Appointment <i className="fas fa-arrow-right ms-2"></i></Link>
                            </div>
                        </Col>
                        <Col lg={7} sm={12}>
                            <div className="banner-img">
                                <img src={BannerImg} className="img-fluid" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;