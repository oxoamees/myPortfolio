import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Experience from '../pages/experience/Experience';
import Projects from '../pages/projects/Projects';
import Skills from '../pages/skills/Skills';
import Education from '../pages/education/Education';
import Contact from '../pages/contact/Contact';

function MainLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}




export default MainLayout;