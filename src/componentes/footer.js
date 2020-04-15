import React from "react";
import logo from "../assets/images/logo-footer.png";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="top">
          <Col md={4}>
            <img src={logo} alt="" />
            <div className="currency">
              <p>Currency</p>
              <Nav>
                <Nav.Link className="active">USD</Nav.Link>
                <Nav.Link>GBP</Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col xs={6} sm={4}>
                <p>We Are</p>
                <Nav className="d-block">
                  <Nav.Link>About Us</Nav.Link>
                  <Nav.Link>Missions</Nav.Link>
                  <Nav.Link>How We Do Help</Nav.Link>
                  <Nav.Link>Blog</Nav.Link>
                </Nav>
              </Col>
              <Col xs={6} sm={4}>
                <p>Explore</p>
                <Nav className="d-block">
                  <Nav.Link>Discover</Nav.Link>
                  <Nav.Link>Simple Guide</Nav.Link>
                  <Nav.Link>For donors</Nav.Link>
                  <Nav.Link>Beneficiary Orgs</Nav.Link>
                </Nav>
              </Col>
              <Col sm={4}>
                <p>Qustions</p>
                <Nav className="d-block">
                  <Nav.Link>FAQ</Nav.Link>
                  <Nav.Link>Help Center</Nav.Link>
                  <Nav.Link>Contact Us</Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="bottom">
          <Col lg={4}>
            <p>
              <span>&#169; 2019</span> All rights reserved
            </p>
          </Col>
          <Col lg={8}>
            <Nav>
              <Nav.Link>Trust and Safety</Nav.Link>
              <Nav.Link>Privacy Policy</Nav.Link>
              <Nav.Link>Terms of Use</Nav.Link>
              <Nav.Link>Cookie Policy</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
