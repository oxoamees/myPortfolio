import React, { useState } from 'react';
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowAlert(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">LET'S CONNECT</h2>
          <p className="text-secondary">Have a project in mind? Let's bring your ideas to life</p>
        </motion.div>

        {showAlert && (
          <Alert variant="success" className="text-center">
            Thank you for your message! I will get back to you soon.
          </Alert>
        )}

        <Row className="g-5">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="h3 fw-bold mb-4">Get in Touch</h3>
              <div className="mb-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: '48px', height: '48px' }}>
                    <FiMail size={20} />
                  </div>
                  <div>
                    <p className="text-secondary small mb-0">Email</p>
                    <p className="fw-medium mb-0">malikamees562@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: '48px', height: '48px' }}>
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <p className="text-secondary small mb-0">Phone</p>
                    <p className="fw-medium mb-0">+92 3214555748</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-dark rounded-circle d-flex align-items-center justify-content-center text-white" style={{ width: '48px', height: '48px' }}>
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <p className="text-secondary small mb-0">Location</p>
                    <p className="fw-medium mb-0">Islamabad, Pakistan </p>
                  </div>
                </div>
              </div>

              <div className="bg-dark text-white p-4 p-md-5 rounded-4 mt-5">
                <h4 className="h4 fw-bold mb-3">LET'S COLLABORATE</h4>
                <p className="text-light-emphasis small mb-4">
                  My approach is rooted in research, where I dig deep into user behaviors and feedback to inform
                </p>
                <div className="d-flex gap-3">
                  <input
                    type="email"
                    placeholder="Type your email..."
                    className="form-control rounded-pill"
                  />
                  <button className="btn btn-light rounded-pill px-10  fw-medium"  style={{ width: "160px", height: "48px" }}>
                    Sign up
                  </button>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="py-3"
                    placeholder="Enter your name"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="py-3"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="py-3"
                    placeholder="Tell me about your project"
                  />
                </Form.Group>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary-custom w-100 justify-content-center"
                >
                  Send Message
                  <FiSend />
                </motion.button>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;