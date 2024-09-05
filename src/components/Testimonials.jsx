import React from 'react';

const testimonials = [
  {
    name: "Aman Singh",
    role: "Mobile dev",
    avatar: "./images/avatars/avatar.webp",
    content: "Joining Singh's Fitness Farm has transformed my life! The supportive community and expert trainers have helped me achieve my fitness goals beyond what I thought possible."
  },
  {
    name: "Priya Sharma",
    role: "Marketing",
    avatar: "./images/avatars/avatar-1.webp",
    content: "The atmosphere at S2F is incredible! The trainers are knowledgeable and always encouraging. I've never felt more motivated to work out!"
  },
  {
    name: "Ravi Kumar",
    role: "Developer",
    avatar: "./images/avatars/avatar-2.webp",
    content: "S2F is more than just a gym; it's a community. I've made lifelong friends and improved my health tremendously. Highly recommend!"
  },
  {
    name: "Neha Patel",
    role: "Mobile dev",
    avatar: "./images/avatars/avatar-3.webp",
    content: "Singh's Fitness Farm keeps me motivated with its diverse class options. The friendly community and dedicated trainers create an amazing workout environment. I'm constantly challenged and inspired to reach new fitness goals."
  },
  {
    name: "Vikram Singh",
    role: "Manager",
    avatar: "./images/avatars/avatar-4.webp",
    content: "I've seen amazing results since joining S2F. The trainers are always there to guide you, and the community keeps you accountable. It's more than just a gym; it's a supportive environment that helps you reach your full potential."
  },
  {
    name: "Sita Devi",
    role: "Mobile dev",
    avatar: "./images/avatars/avatar-2.webp",
    content: "The supportive environment at Singh's Fitness Farm is unmatched. I feel empowered and inspired every time I step through the doors!"
  }
];

const TestimonialCard = ({ name, role, avatar, content }) => (
  <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
    <div className="flex gap-4">
      <img className="w-12 h-12 rounded-full" src={avatar} alt={`${name} avatar`} width="400" height="400" loading="lazy" />
      <div>
        <h6 className="text-lg font-medium text-gray-700 dark:text-white">{name}</h6>
        <p className="text-sm text-gray-500 dark:text-gray-300">{role}</p>
      </div>
    </div>
    <p className="mt-8">{content}</p>
  </div>
);

const Testimonials = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300" id="testimonials">
      <div className="container mx-auto">
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            What Our Members Say
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;