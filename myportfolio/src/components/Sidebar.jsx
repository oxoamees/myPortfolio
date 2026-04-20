import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiDribbble, FiLinkedin, FiGithub } from 'react-icons/fi';
import { SiBehance } from "react-icons/si";

const Sidebar = () => {
  const socialIcons = [
    { icon: FiInstagram, link: 'https://instagram.com', color: '#E4405F' },
    { icon: FiDribbble, link: 'https://dribbble.com', color: '#EA4C89' },
    { icon: FiLinkedin, link: 'https://linkedin.com', color: '#0A66C2' },
    { icon: SiBehance, link: 'https://behance.net', color: '#1769FF' }, // ✅ FIXED
    { icon: FiGithub, link: 'https://github.com', color: '#333' },
  ];

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="position-fixed start-0 top-50 translate-middle-y z-3 d-none d-lg-block"
      style={{ left: '20px' }}
    >
      <div className="d-flex flex-column gap-3">
        {socialIcons.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white shadow rounded-circle d-flex align-items-center justify-content-center text-decoration-none"
            style={{ width: '40px', height: '40px' }}
          >
            <social.icon size={18} style={{ color: social.color }} />
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;