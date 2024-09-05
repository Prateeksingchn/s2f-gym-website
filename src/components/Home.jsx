import React from 'react';
import Stats from './Stats';
import Features from './FeaturesSection';
import HeroSection from './HeroSection';
// import Layout from '../layouts/Layout';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Blog from './Blog';

const Home = () => {
  return (
    <div title="Welcome to S2F.">
      <main className="space-y-40 mb-40 px-5">
        <HeroSection />
        <Features />
        <Stats />
        <Testimonials />
        <CallToAction />
        <Blog />
      </main>
    </div>
  );
};

export default Home;