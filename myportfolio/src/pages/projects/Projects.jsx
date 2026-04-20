import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';

import commerceImg from '../../assets/commerce.png';
import travelImg from '../../assets/traveling.png';
import gameImg from '../../assets/game.png';
import blogImg from '../../assets/blog.png';


const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'FURNIMART',
      category: ' E-commerce website',
      image: commerceImg,
    },
    {
      title: 'SKYSCANNER',
      category: 'E-commerce website',
      image: travelImg,
    },
    {
      title: ' GAMEING SPOT',
      category: 'Gameing website',
      image: gameImg,
    },
    {
      title: 'LANDING PAGE',
      category: 'Busniess website',
      image: blogImg,
    },
  ];

  return (
    <section id="projects" className="bg-light section-padding">
      <Container>

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <span className="text-secondary small fw-medium">
            (FEATURED WORK)
          </span>
          <h2 className="display-5 fw-bold mt-3">
            MY PROJECTS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <Row className="g-4 mb-5">
          {projects.map((project, index) => (
            <Col key={index} lg={6} md={6} sm={12}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="project-card bg-white overflow-hidden shadow-sm rounded-3"
              >

                {/* Image */}
                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100"
                    style={{
                      height: '300px',
                      objectFit: '',
                      transition: '0.4s ease',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="h5 fw-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-secondary small mb-0">
                    {project.category}
                  </p>
                </div>

              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-outline-dark d-inline-flex align-items-center gap-2 px-4 py-2"
          >
            SEE ALL WORKS
            <FiArrowRight />
          </motion.button>
        </div>

      </Container>
    </section>
  );
};

export default Projects;