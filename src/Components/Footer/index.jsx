import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import siteData from '../../siteData.json';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="text-center align-items-center">
          <Col xs={12} sm={6} md={6} lg={3} className="mb-4 text-center">
            <img src={siteData.Navbar[0].image} alt="Logo" className="footer-logo" />
            <div className="social-icons">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
          <Col xs={6} sm={3} md={4} lg={3} className="mb-4">
            <ul className="list-unstyled">
              {siteData.footerLinks.slice(0, 3).map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={6} sm={3} md={4} lg={3} className="mb-4">
            <ul className="list-unstyled">
              {siteData.footerLinks.slice(3, 6).map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <ul className="list-unstyled">
              {siteData.footerLinks.slice(6).map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
