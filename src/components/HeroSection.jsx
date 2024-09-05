import React from 'react';
import { ArrowRight, Dumbbell, Users, Zap } from 'lucide-react';
import '../App.css';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex items-center overflow-hidden" id="home">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-600">Singh's Fitness Farm</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Embark on a journey of fitness and wellness. Our state-of-the-art facilities, expert trainers, and supportive community are here to help you achieve your health goals and unlock your full potential.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#"
              className="btn btn-primary"
            >
              Start Your Fitness Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#"
              className="btn btn-secondary"
            >
              Explore Our Programs
            </a>
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
        </div>
      </div>
      
      <EquipmentCarousel />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
    <div className="text-orange-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const EquipmentCarousel = () => (
  <div className="absolute bottom-0 left-0 right-0 py-8 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent">
    <div className="flex animate-carousel">
      {[...Array(2)].map((_, index) => (
        <React.Fragment key={index}>
          <CarouselItem src="https://plus.unsplash.com/premium_photo-1661920538067-c48451160c72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJlYWRtaWxsfGVufDB8MHwwfHx8MA%3D%3D" alt="Treadmill" />
          <CarouselItem src="https://plus.unsplash.com/premium_photo-1670505062610-b9041ebe603c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VpZ2h0c3xlbnwwfDB8MHx8fDA%3D" alt="Free Weights" />
          <CarouselItem src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwZ3JvdXB8ZW58MHwwfDB8fHww" alt="Yoga Mat" />
          <CarouselItem src="https://images.unsplash.com/photo-1652363723082-b1fdca4bdbd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwY3ljbGluZ3xlbnwwfDB8MHx8fDA%3D" alt="Cycling Machine" />
          <CarouselItem src="https://images.unsplash.com/photo-1534368270820-9de3d8053204?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGd5bSUyMHNxdWF0fGVufDB8MHwwfHx8MA%3D%3D" alt="Kettlebell" />
          <CarouselItem src="https://plus.unsplash.com/premium_photo-1661963295739-fb37c0b3a616?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwcm93aW5nfGVufDB8MHwwfHx8MA%3D%3D" alt="Rowing Machine" />
        </React.Fragment>
      ))}
    </div>
  </div>
);

const CarouselItem = ({ src, alt }) => (
  <div className="w-48 flex-shrink-0 mx-2">
    <img src={src} alt={alt} className="w-full h-32 object-cover rounded-lg" />
  </div>
);

export default HeroSection;