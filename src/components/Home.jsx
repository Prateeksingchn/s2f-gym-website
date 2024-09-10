import React, { useState, useEffect, Suspense, lazy } from "react";
import GymLoader from "./Loader";

// Lazy load components
const HeroSection = lazy(() => import("./HeroSection"));
const Features = lazy(() => import("./FeaturesSection"));
const GymImageGallery = lazy(() => import("./GymImageGallery"));
const Testimonials = lazy(() => import("./Testimonials"));
const CallToAction = lazy(() => import("./CallToAction"));
const Blog = lazy(() => import("./Blog"));
const Map = lazy(() => import("./Map"));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical components
    const preloadComponents = async () => {
      await Promise.all([
        import("./HeroSection"),
        import("./FeaturesSection"),
        import("./GymImageGallery"),
      ]);
      setIsLoading(false);
    };

    preloadComponents();
  }, []);

  if (isLoading) {
    return <GymLoader />;
  }

  return (
    <div title="Welcome to S2F.">
      <main>
        <Suspense fallback={<GymLoader />}>
          <HeroSection />
          <Features />
          <GymImageGallery />
          <Testimonials />
          <CallToAction />
          <Blog />
          <Map />
        </Suspense>
      </main>
    </div>
  );
};

export default Home;