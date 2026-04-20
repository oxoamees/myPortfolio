import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="bg-light section-padding">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-secondary small fw-medium">(SELF)</span>
              </div>
              
              <p className="fs-4 text-secondary mb-5" style={{ lineHeight: '1.6' }}>
                Innovative product designer with a passion for aesthetics and usability. 
                I design purposeful, user-friendly products that blend form and function, 
                creating memorable experiences that align with both practical needs and visual appeal.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline-custom"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                LET'S CONTACT
                <FiArrowRight />
              </motion.button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;