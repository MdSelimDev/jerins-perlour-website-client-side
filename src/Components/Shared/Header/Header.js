import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import headerLogo from '../../image/group.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
  <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="header-logo" src={headerLogo} alt="" />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="ms-auto">
      <Nav.Link as={Link} className="header-menu-list" to="/">Home</Nav.Link>
      <Nav.Link as={Link} className="header-menu-list" to="/">Our Service</Nav.Link>
      <Nav.Link as={Link} className="header-menu-list" to="/">Testimonials</Nav.Link>
      <Nav.Link as={Link} className="header-menu-list" to="/">Contact Us</Nav.Link>
      <Nav.Link as={Link} className="log-in-btn" to="/login">Login <i className="fas fa-sign-in-alt ms-1"></i></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;