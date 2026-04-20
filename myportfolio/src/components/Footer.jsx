import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiInstagram, FiDribbble, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiBehance } from "react-icons/si";

const Footer = () => {
  const footerSections = {
    Pages: ['Home', 'About', 'Projects', 'Services', 'Blog'],
    'Inner Pages': ['Project Single', 'Service Single', 'Blog Single', 'Contact'],
    'Utility Pages': ['Style Guide', 'Licenses', 'Password Protected', 'Changelog', '404'],
  };

  const socialIcons = [
    { icon: FiInstagram, link: '#' },
    { icon: FiDribbble, link: '#' },
    { icon: FiLinkedin, link: '#' },
    { icon: SiBehance, link: '#' },  
  ];

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row className="g-4 mb-5">
          <Col lg={4}>
            <h2 className="h2 fw-bold mb-3">DESIGNER</h2>
            <p className="text-light-emphasis small mb-4">
              Creating meaningful digital experiences through innovative design and strategic thinking.
            </p>

            <div className="d-flex gap-3">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="bg-secondary bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center text-white text-decoration-none"
                  style={{ width: '36px', height: '36px' }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </Col>

          {Object.entries(footerSections).map(([title, links], index) => (
            <Col key={index} sm={6} lg={2}>
              <h5 className="fw-bold mb-3">{title}</h5>
              <ul className="list-unstyled">
                {links.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-light-emphasis text-decoration-none small hover-link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>

        <hr className="border-secondary" />

        <div className="text-center pt-3">
          <p className="text-light-emphasis small mb-0">
            &copy; 2024 ellion. All rights reserved.
          </p>
        </div>
      </Container>

      <style>{`
        .hover-link:hover {
          color: white !important;
          text-decoration: underline !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;