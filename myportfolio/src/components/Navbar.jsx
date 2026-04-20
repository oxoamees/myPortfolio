import React, { useState, useEffect } from 'react';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['HOME', 'ABOUT', 'SKILLS', 'EDUCATION', 'EXPERIENCE', 'PROJECTS', 'CONTACT'];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <BootstrapNavbar
        expanded={expanded}
        expand="lg"
        fixed="top"
        className={scrolled ? 'navbar-scrolled' : 'navbar-transparent'}
      >
        <Container>
          <BootstrapNavbar.Brand href="#home" className="fw-bold fs-2">
            DESIGNER
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          >
            {expanded ? <FiX size={24} /> : <FiMenu size={24} />}
          </BootstrapNavbar.Toggle>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Nav.Link
                    href={`#${link.toLowerCase()}`}
                    className="mx-2 fw-medium"
                    onClick={() => setExpanded(false)}
                  >
                    {link}
                  </Nav.Link>
                </motion.div>
              ))}
            </Nav>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </motion.div>
  );
};

export default NavbarComponent;