import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: "Aman Singh",
    role: "Mobile Developer",
    avatar: "/api/placeholder/100/100",
    content: "Joining Singh's Fitness Farm has transformed my life! The supportive community and expert trainers have helped me achieve my fitness goals beyond what I thought possible."
  },
  {
    name: "Priya Sharma",
    role: "Marketing Specialist",
    avatar: "/api/placeholder/100/100",
    content: "The atmosphere at S2F is incredible! The trainers are knowledgeable and always encouraging. I've never felt more motivated to work out!"
  },
  {
    name: "Ravi Kumar",
    role: "Software Engineer",
    avatar: "/api/placeholder/100/100",
    content: "S2F is more than just a gym; it's a community. I've made lifelong friends and improved my health tremendously. Highly recommend!"
  },
  {
    name: "Neha Patel",
    role: "UX Designer",
    avatar: "/api/placeholder/100/100",
    content: "Singh's Fitness Farm keeps me motivated with its diverse class options. The friendly community and dedicated trainers create an amazing workout environment. I'm constantly challenged and inspired to reach new fitness goals."
  },
  {
    name: "Vikram Singh",
    role: "Project Manager",
    avatar: "/api/placeholder/100/100",
    content: "I've seen amazing results since joining S2F. The trainers are always there to guide you, and the community keeps you accountable. It's more than just a gym; it's a supportive environment that helps you reach your full potential."
  },
  {
    name: "Sita Devi",
    role: "Data Analyst",
    avatar: "/api/placeholder/100/100",
    content: "The supportive environment at Singh's Fitness Farm is unmatched. I feel empowered and inspired every time I step through the doors!"
  }
];

const TestimonialCard = ({ name, role, avatar, content, bgColor, textColor, gridArea }) => (
  <motion.div 
    className={`${bgColor} ${textColor} p-6 rounded-3xl shadow-lg flex flex-col justify-between`}
    style={{ gridArea }}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-lg font-medium mb-4">{content}</p>
    <div className="flex items-center">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm opacity-75">{role}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
          Transforming Lives
          <span className="block text-2xl font-normal mt-2 text-indigo-600">Our Members' Stories</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(150px,auto)]">
          <TestimonialCard {...testimonials[0]} gridArea="1 / 1 / 3 / 3" />
          <TestimonialCard {...testimonials[1]} gridArea="1 / 3 / 2 / 5" />
          <TestimonialCard {...testimonials[2]} gridArea="2 / 3 / 3 / 4" />
          <TestimonialCard {...testimonials[3]} gridArea="2 / 4 / 4 / 5" />
          <TestimonialCard {...testimonials[4]} gridArea="3 / 1 / 4 / 3" />
          <TestimonialCard {...testimonials[5]} gridArea="3 / 3 / 4 / 4" />
        </div>
        
        <div className="mt-12 text-center">
          <a href="#join-now" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-700 transition-colors duration-300">
            Start Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;