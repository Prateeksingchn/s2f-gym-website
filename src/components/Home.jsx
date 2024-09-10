import React from "react";
import GymImageGallery from "./GymImageGallery";
import Features from "./FeaturesSection";
import HeroSection from "./HeroSection";
// import Layout from '../layouts/Layout';
import Testimonials from "./Testimonials";
import CallToAction from "./CallToAction";
import Blog from "./Blog";
import Map from "./Map";
import "../App.css";

const Home = () => {
  return (
    <div title="Welcome to S2F.">
      <main className="">
        <HeroSection />
        <Features />
        <GymImageGallery />
        <Testimonials />
        <CallToAction />
        <Blog />
        <section>
          <h2>Our Location</h2>
          <Map />
        </section>
      </main>
    </div>
  );
};

export default Home;
