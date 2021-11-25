import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import headerLogo from "../../image/group.png";
import useFirebase from "../useFirebase/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, HandleLogOut } = useFirebase();

  return (
    <Navbar className="sticky-top bg-white" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className="header-logo" src={headerLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} className="header-menu-list" to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} className="header-menu-list" to="/services">
              Our Service
            </Nav.Link>
            <Nav.Link as={Link} className="header-menu-list" to="/">
              Testimonials
            </Nav.Link>
            <Nav.Link as={Link} className="header-menu-list" to="/">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} className="header-menu-list" to="/dashboard">
              Dashboard
            </Nav.Link>
            {user.email && (
              <Nav.Link className="header-menu-list">
                {user.displayName}
              </Nav.Link>
            )}
            {user.email ? (
              <Nav.Link onClick={HandleLogOut} className="log-in-btn">
                LogOut <i className="fas fa-sign-out-alt ms-1"></i>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} className="log-in-btn" to="/login">
                Login <i className="fas fa-sign-in-alt ms-1"></i>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
