import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FacialImg from '../../../image/facial.png';
import './Facial.css';

const Facial = () => {
    return (
        <div className="main-facial-box py-5">
            <Container>
                <div className="py-5 my-3">
                <Row className="align-items-center">
                    <Col lg={7} sm={12}>
                        <img src={FacialImg} className="img-fluid" alt="" />
                    </Col>
                    <Col lg={5} sm={12}>
                        <div className="facial-text">
                            <h2 className="facial-title">Let Us Handle Your Screen <span>Professionally</span></h2>
                            <p className="facial-description">We give a qualityful service as your demand. We Make a team for our salon to do good work and customer satisfiction our main priority.We do stunning and amazing anti age face treatment for woment . Do a good face treatment protect your face from dirty.</p>
                            <div>
                                <Row>
                                    <Col lg={6}>
                                        <div className="facial-review">
                                        <h1>500+</h1>
                                        <h4>Happy Customer</h4>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="facial-review">
                                        <h1>50+</h1>
                                        <h4>Total Service</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    );
};

export default Facial;