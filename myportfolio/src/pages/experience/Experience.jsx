import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experienceData = [
    {
      title: "Senior Product Designer",
      company: "Creative Design Agency",
      location: "New York, USA",
      period: "2022 - Present",
      description: "Leading product design initiatives and mentoring junior designers."
    },
    {
      title: "UI/UX Designer",
      company: "Digital Solutions Inc",
      location: "San Francisco, USA",
      period: "2020 - 2022",
      description: "Designed user-centric interfaces for web and mobile applications."
    },
    {
      title: "Junior Designer",
      company: "Startup Studio",
      location: "Los Angeles, USA",
      period: "2019 - 2020",
      description: "Assisted in creating visual designs and brand identities."
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">WORK EXPERIENCE</h2>
          <p className="text-secondary">Professional journey and career milestones</p>
        </motion.div>

        <Row className="justify-content-center">
          <Col lg={8}>
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-4 p-md-5 rounded-4 shadow-sm mb-4 border-start border-4 border-dark"
              >
                <div className="d-flex flex-column flex-md-row justify-content-between gap-3">
                  <div className="flex-grow-1">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <FiBriefcase className="fs-2" />
                      <h3 className="h4 fw-bold mb-0">{exp.title}</h3>
                    </div>
                    <p className="fw-medium mb-2">{exp.company}</p>
                    <div className="d-flex flex-wrap gap-3 text-secondary small mb-3">
                      <span className="d-flex align-items-center gap-1">
                        <FiMapPin size={14} /> {exp.location}
                      </span>
                      <span className="d-flex align-items-center gap-1">
                        <FiCalendar size={14} /> {exp.period}
                      </span>
                    </div>
                    <p className="text-secondary mb-0">{exp.description}</p>
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

export default Experience;