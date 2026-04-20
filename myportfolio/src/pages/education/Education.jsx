import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBookOpen, FiCalendar } from 'react-icons/fi';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationData = [
    {
      degree: "Master's in Design",
      institution: "Design Institute of Technology",
      year: "2020 - 2022",
      description: "Specialized in User Experience Design and Interactive Media"
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "University of Creative Arts",
      year: "2016 - 2020",
      description: "Major in Software Engineering with focus on HCI"
    }
  ];

  return (
    <section id="education" className="bg-light section-padding">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">EDUCATION</h2>
          <p className="text-secondary">My academic background and professional certifications</p>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={8}>
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 p-md-5 rounded-4 shadow-sm mb-4"
              >
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-start gap-3">
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <FiBookOpen className="fs-2" />
                      <h3 className="h4 fw-bold mb-0">{edu.degree}</h3>
                    </div>
                    <p className="fw-medium mb-2">{edu.institution}</p>
                    <p className="text-secondary small mb-0">{edu.description}</p>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-secondary">
                    <FiCalendar />
                    <span>{edu.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;