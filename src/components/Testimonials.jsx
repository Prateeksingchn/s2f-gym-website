import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    type: 'testimonial',
    name: "Aman Singh",
    role: "Mobile Developer",
    avatar: "/api/placeholder/100/100",
    content: "Joining Singh's Fitness Farm has transformed my life! The supportive community and expert trainers have helped me achieve my fitness goals beyond what I thought possible.",
    rating: 5
  },
  {
    type: 'testimonial',
    name: "Priya Sharma",
    role: "Marketing Specialist",
    avatar: "/api/placeholder/100/100",
    content: "The atmosphere at S2F is incredible! The trainers are knowledgeable and always encouraging. I've never felt more motivated to work out!",
    rating: 5
  },
  {
    type: 'image',
    src: 'https://plus.unsplash.com/premium_photo-1676243407463-468804b9ecaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9nb3xlbnwwfDB8MHx8fDA%3D',
    alt: 'Fitness Farm Logo on Building'
  },
  {
    type: 'testimonial',
    name: "Ravi Kumar",
    role: "Software Engineer",
    avatar: "/api/placeholder/100/100",
    content: "S2F is more than just a gym; it's a community. I've made lifelong friends and improved my health tremendously. Highly recommend!",
    rating: 4
  },
  {
    type: 'slogan',
    content: 'Cultivating Strength, Harvesting Health'
  },
  {
    type: 'testimonial',
    name: "Neha Patel",
    role: "UX Designer",
    avatar: "/api/placeholder/100/100",
    content: "Singh's Fitness Farm keeps me motivated with its diverse class options. The friendly community and dedicated trainers create an amazing workout environment.",
    rating: 5
  },
  {
    type: 'testimonial',
    name: "Vikram Singh",
    role: "Project Manager",
    avatar: "/api/placeholder/100/100",
    content: "I've seen amazing results since joining S2F. The trainers are always there to guide you, and the community keeps you accountable.",
    rating: 5
  },
  {
    type: 'billboard',
    src: 'https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJpbGxib2FyZCUyMGZpdG5lc3N8ZW58MHwwfDB8fHww',
    alt: 'Fitness Farm Billboard'
  },
  {
    type: 'testimonial',
    name: "Sita Devi",
    role: "Data Analyst",
    avatar: "/api/placeholder/100/100",
    content: "The supportive environment at Singh's Fitness Farm is unmatched. I feel empowered and inspired every time I step through the doors!",
    rating: 4
  },
  {
    type: 'product',
    src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJpbGxib2FyZCUyMGZpdG5lc3N8ZW58MHwxfDB8fHww',
    alt: 'Fitness Farm Water Bottle'
  }
];

const getBentoGridStyle = (index) => {
  const baseStyle = "col-span-1";
  
  // Styles for sm and larger devices (unchanged)
  const smStyle = index === 0 || index === 7 ? "sm:col-span-2" : "";

  // Styles for md devices (3-column grid)
  const mdStyle = (() => {
    if (index === 0) return "md:col-span-2";
    if (index === 2 || index === 4) return "md:col-span-2";
    if (index === 7 || index === 8) return "md:col-span-2";
    return "";
  })();

  // Styles for lg and xl devices (original bento grid)
  const lgStyle = (() => {
    switch (index) {
      case 0: return "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3";
      case 1: return "lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2";
      case 2: return "lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-2";
      case 3: return "lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3";
      case 4: return "lg:col-start-5 lg:col-end-7 lg:row-start-2 lg:row-end-4";
      case 5: return "lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4";
      case 6: return "lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4";
      case 7: return "lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-4";
      case 8: return "lg:col-start-4 lg:col-end-7 lg:row-start-4 lg:row-end-4";
      case 9: return "lg:col-start-3 lg:col-end-4 lg:row-start-4 lg:row-end-4";
      default: return "";
    }
  })();

  return `${baseStyle} ${smStyle} ${mdStyle} ${lgStyle}`;
};

const GridItem = ({ item }) => {
  switch (item.type) {
    case 'testimonial':
      return (
        <motion.div 
          className="bg-white h-[300px] sm:h-[400px] md:h-full lg:h-full p-3 rounded-lg shadow-md flex flex-col justify-between overflow-hidden group  sm:p-4 sm:rounded-3xl sm:shadow-lg md:p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <div>
            <motion.div 
              className="flex items-center mb-2 sm:mb-3 md:mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className={`${i < item.rating ? "text-yellow-400" : "text-gray-400"} sm:w-3 sm:h-3 md:w-4 md:h-4`} fill={i < item.rating ? "currentColor" : "none"} />
              ))}
            </motion.div>
            <motion.p 
              className="font-medium mb-2 sm:mb-3 md:mb-4 text-gray-600 text-[17px] sm:text-xl md:text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {item.content}
            </motion.p>
          </div>
          <motion.div 
            className="flex items-center mt-2 sm:mt-3 md:mt-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <img src={item.avatar} alt={item.name} className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full mr-2 sm:mr-3" />
            <div>
              <h3 className="font-bold text-gray-800 text-xs sm:text-sm md:text-base">{item.name}</h3>
              <p className="text-xxs sm:text-xs md:text-sm text-gray-500">{item.role}</p>
            </div>
          </motion.div>
        </motion.div>
      );
    case 'image':
    case 'billboard':
    case 'product':
      return (
        <motion.div className="h-[300px] sm:h-[400px] md:h-full lg:h-full rounded-lg overflow-hidden shadow-md sm:rounded-3xl sm:shadow-lg">
          <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
        </motion.div>
      );
    case 'slogan':
      return (
        <motion.div className="bg-green-500 p-3 rounded-lg shadow-md flex items-center justify-center h-full sm:p-4 sm:rounded-3xl sm:shadow-lg md:p-6">
          <h3 className="text-white text-4xl font-bold text-center sm:text-base md:text-lg lg:text-xl">{item.content}</h3>
        </motion.div>
      );
    default:
      return null;
  }
};

const TestimonialsBentoGrid = () => {
  return (
    <section className="bg-gray-100 py-6 sm:py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.h2 
          className="text-xl font-extrabold text-center mb-4 text-gray-800 sm:text-3xl sm:mb-6 md:text-4xl md:mb-8 lg:text-5xl lg:mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Members Say
        </motion.h2>
        
        <div className="grid grid-cols-1 gap-3 auto-rows-fr sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-6 lg:gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className={getBentoGridStyle(index)}>
              <GridItem item={item} />
            </div>
          ))}
        </div>
        
        <motion.div 
          className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.a
            href="#join-now"
            className="inline-block bg-green-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-4 lg:px-10 rounded-full text-xs sm:text-sm md:text-base lg:text-lg hover:bg-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Singh's Fitness Farm
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsBentoGrid;