import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    type: 'testimonial',
    name: "Aman Singh",
    role: "Mobile Developer",
    avatar: "/api/placeholder/100/100",
    content: "Joining Singh's Fitness Farm has transformed my life! The supportive community and expert trainers have helped me achieve my fitness goals beyond what I thought possible.",
    rating: 5,
    className: "bg-blue-100 text-blue-800"
  },
  {
    type: 'testimonial',
    name: "Priya Sharma",
    role: "Marketing Specialist",
    avatar: "/api/placeholder/100/100",
    content: "The atmosphere at S2F is incredible! The trainers are knowledgeable and always encouraging. I've never felt more motivated to work out!",
    rating: 5,
    className: "bg-green-100 text-green-800"
  },
  {
    type: 'testimonial',
    name: "Ravi Kumar",
    role: "Software Engineer",
    avatar: "/api/placeholder/100/100",
    content: "S2F is more than just a gym; it's a community. I've made lifelong friends and improved my health tremendously. Highly recommend!",
    rating: 4,
    className: "bg-gray-200 "
  },
  {
    type: 'testimonial',
    name: "Ravi Kumar",
    role: "Software Engineer",
    avatar: "/api/placeholder/100/100",
    content: "S2F is more than just a gym; it's a community. I've made lifelong friends and improved my health tremendously. Highly recommend!",
    rating: 4,
    className: "bg-purple-100 text-purple-800"
  },
  {
    type: 'slogan',
    content: 'Cultivating Strength, Harvesting Health',
    video: '/slogan.mp4',
    className: "bg-yellow-100 hidden md:block lg:block xl:block text-yellow-800"
  },
  {
    type: 'testimonial',
    name: "Neha Patel",
    role: "UX Designer",
    avatar: "/api/placeholder/100/100",
    content: "Singh's Fitness Farm keeps me motivated with its diverse class options. The friendly community and dedicated trainers create an amazing workout environment.",
    rating: 5,
    className: "bg-red-100 text-red-800"
  },
  {
    type: 'testimonial',
    name: "Vikram Singh",
    role: "Project Manager",
    avatar: "/api/placeholder/100/100",
    content: "I've seen amazing results since joining S2F. The trainers are always there to guide you, and the community keeps you accountable.",
    rating: 5,
    className: "bg-indigo-100 text-indigo-800"
  },
  {
    type: 'billboard',
    src: './running-img2.webp',
    alt: 'Fitness Farm Billboard',
    video: '/running.mp4', // Add the path to your video file
    className: "bg-pink-200 hidden md:block lg:block xl:block"
  },
  {
    type: 'testimonial',
    name: "Sita Devi",
    role: "Data Analyst",
    avatar: "/api/placeholder/100/100",
    content: "The supportive environment at Singh's Fitness Farm is unmatched. I feel empowered and inspired every time I step through the doors!",
    rating: 4,
    className: "bg-teal-100 text-teal-800"
  },
  {
    type: 'product',
    src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJpbGxib2FyZCUyMGZpdG5lc3N8ZW58MHwxfDB8fHww',
    alt: 'Fitness Farm Water Bottle',
    video: '/water-bottle.mp4',
    className: "bg-orange-200 hidden md:block lg:block xl:block"
  }
];

const getBentoGridStyle = (index) => {
  const baseStyle = "col-span-1";
  
  // Styles for sm and larger devices
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
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.error("Error playing video:", error));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  switch (item.type) {
    case 'testimonial':
      return (
        <motion.div 
          className={`h-[300px] sm:h-[400px] md:h-full lg:h-full p-3 rounded-lg shadow-md flex flex-col justify-between overflow-hidden group sm:p-4 sm:rounded-3xl sm:shadow-lg md:p-6 ${item.className}`}
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
              className="font-medium mb-2 sm:mb-3 md:mb-4 text-[17px] sm:text-xl md:text-base line-clamp-4 group-hover:line-clamp-none transition-all duration-300"
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
              <h3 className="font-bold text-xs sm:text-sm md:text-base">{item.name}</h3>
              <p className="text-xxs sm:text-xs md:text-sm text-gray-500">{item.role}</p>
            </div>
          </motion.div>
        </motion.div>
      );
    case 'image':
    case 'billboard':
    case 'product':
      return (
        <motion.div 
          className={`h-[300px] sm:h-[400px] md:h-full lg:h-full rounded-lg overflow-hidden shadow-md sm:rounded-3xl sm:shadow-lg ${item.className} relative group`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={item.src} 
            alt={item.alt} 
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" 
          />
          {item.video && (
            <video 
              ref={videoRef}
              src={item.video} 
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
              loop 
              muted 
              playsInline
              preload="auto"
            />
          )}
        </motion.div>
      );
    case 'slogan':
      return (
        <motion.div 
          className={`p-3 rounded-lg shadow-md flex items-center justify-center h-full sm:p-4 sm:rounded-3xl sm:shadow-lg md:p-6 overflow-hidden relative group ${item.className}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h3 className="text-4xl font-bold text-center mt-24 sm:text-base md:text-lg lg:text-5xl z-10 group-hover:opacity-0 transition-opacity duration-300">
            {item.content}
          </h3>
          <video 
            ref={videoRef}
            src={item.video} 
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            loop 
            muted 
            playsInline
          />
        </motion.div>
      );
    default:
      return null;
  }
};

const CarouselItem = ({ item }) => {
  return (
    <div className="px-4 py-6">
      <GridItem item={item} />
    </div>
  );
};

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    onClick={onClick}
  >
    <ChevronLeft size={24} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition-all duration-300"
    onClick={onClick}
  >
    <ChevronRight size={24} />
  </button>
);

const TestimonialsBentoGrid = () => {
  const visibleTestimonials = testimonials.filter(item => 
    !item.className || !item.className.includes('hidden')
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section className="bg-gray-100 py-6 sm:py-8 md:py-12 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4">
        <motion.h2 
          className="text-[1.7rem] font-extrabold text-center mb-4 text-gray-800 sm:text-3xl sm:mb-6 md:text-4xl md:mb-8 lg:text-5xl lg:mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Members Say
        </motion.h2>
        
        {/* Carousel for sm and smaller screens */}
        <div className="md:hidden lg:hidden xl:hidden">
          <Slider {...sliderSettings}>
            {visibleTestimonials.map((item, index) => (
              <CarouselItem key={index} item={item} />
            ))}
          </Slider>
        </div>
        
        {/* Bento grid for md and larger screens */}
        <div className="hidden md:grid grid-cols-3 gap-5 lg:grid-cols-6 lg:gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className={getBentoGridStyle(index)}>
              <GridItem item={item} />
            </div>
          ))}
        </div>

        <motion.div 
          className="mt-8 sm:mt-8 md:mt-12 lg:mt-16 text-center"
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