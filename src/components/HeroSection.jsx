import React, { useState, useEffect } from 'react';
import { ArrowRight, Dumbbell, Users, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1470&auto=format&fit=crop",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex items-center overflow-hidden" id="home">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[currentSlide]})` }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </motion.div>
      </AnimatePresence>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center py-20"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Welcome to{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">
              Singh's Fitness Farm
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Embark on a journey of fitness and wellness. Our state-of-the-art facilities, expert trainers, and supportive community are here to help you achieve your health goals and unlock your full potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold transition-all duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
            >
              Start Your Fitness Journey
              <ArrowRight className="inline-block w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Explore Our Programs
            </motion.a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <FeatureCard 
              icon={<Dumbbell className="w-8 h-8" />}
              title="State-of-the-Art Equipment"
              description="Top-tier machines for optimal workouts"
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8" />}
              title="Expert Personal Trainers"
              description="Tailored guidance for your fitness goals"
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8" />}
              title="Supportive Community"
              description="Motivating environment for all fitness levels"
            />
          </div>
        </motion.div>
      </div>
      
      <MarqueeCarousel />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
  >
    <div className="text-orange-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const MarqueeCarousel = () => {
  const carouselItems = [
    { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop&q=60", alt: "Treadmill" },
    { src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&auto=format&fit=crop&q=60", alt: "Free Weights" },
    { src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60", alt: "Yoga Mat" },
    { src: "https://images.unsplash.com/photo-1652363723082-b1fdca4bdbd2?w=500&auto=format&fit=crop&q=60", alt: "Cycling Machine" },
    { src: "https://images.unsplash.com/photo-1534368270820-9de3d8053204?w=500&auto=format&fit=crop&q=60", alt: "Kettlebell" },
    { src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop&q=60", alt: "Rowing Machine" },
  ];

  const doubledItems = [...carouselItems, ...carouselItems];

  return (
    <div className="absolute bottom-0 left-0 right-0 py-8 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent overflow-hidden">
      <div className="flex">
        <div className="flex animate-marquee">
          {doubledItems.map((item, index) => (
            <div key={index} className="w-48 flex-shrink-0 mx-2">
              <img src={item.src} alt={item.alt} className="w-full h-32 object-cover rounded-lg shadow-md" />
            </div>
          ))}
        </div>
        <div className="flex animate-marquee">
          {doubledItems.map((item, index) => (
            <div key={`duplicate-${index}`} className="w-48 flex-shrink-0 mx-2">
              <img src={item.src} alt={item.alt} className="w-full h-32 object-cover rounded-lg shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;