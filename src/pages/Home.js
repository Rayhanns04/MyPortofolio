import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Work from '../components/Work';

const Home = () => {
  return (
    <div>
      <Hero />
      <Work />
      <Project />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
