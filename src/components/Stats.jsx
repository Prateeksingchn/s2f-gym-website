import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, MapPin, Settings, RefreshCw, GraduationCap, BarChart } from 'lucide-react';

const HighlightsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const itemRefs = useRef([]);

  const content = [
    {
      title: "Transform Your Life at S2F",
      description: "Experience a holistic approach to fitness that goes beyond physical exercise.",
      image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        { icon: Users, title: "Community Support", description: "Join a supportive community on your fitness journey." },
        { icon: MapPin, title: "Convenient Location", description: "Easy access with ample parking." },
      ],
    },
    {
      title: "State-of-the-Art Equipment",
      description: "Push your limits with our cutting-edge fitness equipment.",
      image: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600",
      features: [
        { icon: Settings, title: "Latest Technology", description: "Advanced fitness tech for optimal performance." },
        { icon: RefreshCw, title: "Regular Maintenance", description: "Ensuring safety and best experience." },
      ],
    },
    {
      title: "Expert Personal Trainers",
      description: "Our certified trainers are dedicated to your success.",
      image: "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
      features: [
        { icon: GraduationCap, title: "Certified Professionals", description: "Experienced in various fitness disciplines." },
        { icon: BarChart, title: "Personalized Plans", description: "Custom fitness plans for your goals." },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = contentRef.current.scrollTop;
      const itemHeight = contentRef.current.scrollHeight / content.length;
      const newIndex = Math.round(scrollPosition / itemHeight);
      
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    contentRef.current.addEventListener('scroll', handleScroll);
    return () => contentRef.current?.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  const scrollToSection = (index) => {
    contentRef.current.scrollTo({
      top: index * (contentRef.current.scrollHeight / content.length),
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex h-[90vh] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      

      {/* Scrollable content section - adjusted width */}
      <div 
        ref={contentRef} 
        className="w-1/2 overflow-y-scroll px-24 py-16 snap-y snap-mandatory scrollbar-hide"
      >
        {content.map((item, index) => (
          <motion.div
            key={index}
            ref={el => itemRefs.current[index] = el}
            className="min-h-screen flex items-center snap-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="max-w-lg">
              <motion.h2 
                className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {item.title}
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                {item.description}
              </motion.p>
              <div className="space-y-8">
                {item.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 + featureIndex * 0.2, ease: "easeOut" }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      featureIndex === 0 ? 'bg-blue-500' : 'bg-purple-500'
                    }`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Vertical navigation line and dots */}
      <div className="fixed top-1/2 left-8 transform -translate-y-1/2 flex flex-col items-center z-1">
        <div className="h-64 w-px bg-gray-600 relative">
          {content.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className={`absolute w-3 h-3 rounded-full transition-all duration-300 -left-1 ${
                index === activeIndex ? 'bg-white scale-150' : 'bg-gray-500 hover:bg-gray-300'
              }`}
              style={{ top: `${(index / (content.length - 1)) * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Fixed image section - adjusted width and added overlay */}
      <div className="w-1/2  bg-gray-800 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
            <img
              src={content[activeIndex].image}
              alt={content[activeIndex].title}
              className="w-[500px] h-[500px] object-cover object-center rounded-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HighlightsSection;