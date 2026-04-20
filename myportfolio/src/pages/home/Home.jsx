import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  const stats = [
    { value: '25+', label: 'PROJECTS COMPLETED' },
    { value: '2+ YRS', label: 'WEB DESIGN EXPERIENCE' },
    { value: '15+', label: 'HAPPY CLIENTS' },
    { value: '100%', label: 'CLIENT SATISFACTION' }
  ];

  return (
    <section
      id="home"
      className="min-vh-100 d-flex align-items-center position-relative"
      style={{
        overflow: 'hidden',
        paddingTop: '80px'
      }}
    >
      {/* Background Image with Slow Zoom Animation */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(120deg, rgba(0, 0, 0, 0.29), rgba(0, 0, 0, 0.51))',
          zIndex: 1
        }}
      />

      <Container className="py-5">
        <Row className="justify-content-center text-center">
          <Col
            lg={10}
            xl={8}
            style={{
              position: 'relative',
              zIndex: 2
            }}
          >
            {/* Top Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="d-flex justify-content-center gap-3 mb-4 flex-wrap"
            >
              <span className="text-light opacity-75">
                [ CREATING DIGITAL EXPERIENCES ]
              </span>
              <span className="fw-semibold text-white">
                WEB DESIGN • UI/UX • FRONTEND
              </span>
              <span className="text-light opacity-75">
                [ DESIGN THAT IMPACTS ]
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="fw-bold mb-4 text-white"
              style={{
                fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                lineHeight: '1.2'
              }}
            >
              I DESIGN WEBSITES
              <br />
              THAT BUILD BRANDS
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-light opacity-75 mx-auto mb-5"
              style={{ maxWidth: '600px', fontSize: '1.1rem',color:'white' }}
            >
              I am a passionate Web Designer & UI/UX Developer focused on
              creating modern, responsive, and user-centered digital experiences.
            
            </motion.p>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              style={{
                padding: '12px 25px',
                borderRadius: '30px',
                border: 'none',
                background: '#ffffff',
                color: '#000000',
                fontWeight: '600',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              LET’S WORK TOGETHER
              <FiArrowRight />
            </motion.button>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="row g-4 mt-5 pt-5 border-top border-secondary"
            >
              {stats.map((stat, index) => (
                <Col key={index} xs={6} md={3}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div
                      style={{
                        fontSize: '1.8rem',
                        fontWeight: 'bold',
                        color: '#fffefe'
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-light opacity-75 small">
                      {stat.label}
                    </div>
                  </motion.div>
                </Col>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;