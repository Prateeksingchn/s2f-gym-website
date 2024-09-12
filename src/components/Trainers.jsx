import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Trainer = ({ name, specialty, image, description }) => (
  <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 mx-2">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-80 object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-sm font-medium text-teal-400">{specialty}</p>
      </div>
    </div>
    <div className="p-4">
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const Trainers = () => {
  const trainers = [
    {
      name: "Priya Sharma",
      specialty: "Yoga & Meditation",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Priya is a certified yoga instructor with expertise in traditional and modern yoga practices."
    },
    {
      name: "Rahul Patel",
      specialty: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Rahul specializes in functional fitness and sports-specific training programs."
    },
    {
      name: "Anjali Desai",
      specialty: "Pilates & Barre",
      image: "https://images.unsplash.com/photo-1617868186608-87ae5c6f422c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Anjali combines classical Pilates with modern barre techniques for full-body workouts."
    },
    {
      name: "Vikram Singh",
      specialty: "CrossFit & HIIT",
      image: "https://images.unsplash.com/photo-1594381898978-7553ca0c5f4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Vikram is passionate about high-intensity workouts and helping clients achieve their fitness goals."
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-white mb-16">
          Our Expert Trainers
        </h2>
        <div className="md:hidden">
          <Slider {...settings}>
            {trainers.map((trainer, index) => (
              <Trainer key={index} {...trainer} />
            ))}
          </Slider>
        </div>
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer, index) => (
            <Trainer key={index} {...trainer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;