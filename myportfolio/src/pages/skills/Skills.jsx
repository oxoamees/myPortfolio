import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPenTool, FiAward, FiCode, FiVideo } from 'react-icons/fi';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    { icon: FiPenTool, title: 'UI/UX DESIGNER', desc: 'Creating intuitive user combining deep industry knowledge with innovative techniques.' },
    { icon: FiAward, title: 'BRANDING', desc: 'Creating intuitive user combining deep industry knowledge with innovative techniques.' },
    { icon: FiCode, title: 'DEVELOPMENT', desc: 'Creating intuitive user combining deep industry knowledge with innovative techniques.' },
    { icon: FiVideo, title: 'MOTION', desc: 'Creating intuitive user combining deep industry knowledge with innovative techniques.' },
  ];

  return (
    <section id="skills" className="section-padding">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">SERVICE EXPERTISE</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            Combining deep industry knowledge with innovative techniques to deliver standout solutions. 
            Our expertise spans UI/UX design, branding, development, and motion.
          </p>
        </motion.div>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col key={index} lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="service-card h-100"
              >
                <service.icon className="display-6 mb-3" />
                <h3 className="h5 fw-bold mb-3">{service.title}</h3>
                <p className="text-secondary small">{service.desc}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;