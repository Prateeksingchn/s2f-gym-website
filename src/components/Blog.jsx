import React from "react";

const BlogPost = ({ imageSrc, imageAlt, title, description }) => (
  <article className="group rounded-3xl bg-white border border-gray-100 dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 transition-all duration-300 hover:shadow-orange-600/20">
    <div className="relative overflow-hidden rounded-t-3xl">
      <img
        src={imageSrc}
        alt={imageAlt}
        loading="lazy"
        className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        {description}
      </p>
      <a 
        href="#" 
        className="inline-block text-orange-400 dark:text-orange-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
      >
        Read more
      </a>
    </div>
  </article>
);

const FitnessContent = () => {
  const blogPosts = [
    {
      imageSrc: "https://images.unsplash.com/photo-1434596922112-19c563067271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWZmZWN0aXZlJTIwRnVsbCUyMEJvZHklMjBXb3Jrb3V0fGVufDB8MHwwfHx8MA%3D%3D",
      imageAlt: "Effective Full-Body Workout",
      title: "10 Effective Full-Body Workouts for Beginners",
      description: "Kickstart your fitness journey with these beginner-friendly workouts designed to target all major muscle groups...",
    },
    {
      imageSrc: "https://plus.unsplash.com/premium_photo-1700053460290-f47d0726e7db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TnV0cml0aW9uJTIwVGlwc3xlbnwwfDB8MHx8fDA%3D",
      imageAlt: "Nutrition Tips",
      title: "Nutrition Tips: Fuel Your Workouts for Maximum Results",
      description: "Learn how to optimize your diet to support your fitness goals and enhance your performance at the gym...",
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bSUyMFN1Y2Nlc3MlMjBTdG9yeXxlbnwwfDB8MHx8fDA%3D",
      imageAlt: "Member Success Story",
      title: "S2F Success Story: Sarah's 50-Pound Weight Loss Journey",
      description: "Be inspired by Sarah's incredible transformation and learn about her strategies for long-term success...",
    },
  ];

  return (
    <section id="fitness-content" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white mb-4">
            Fitness Insights
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Explore our latest articles for expert fitness tips, inspiring success stories, and effective workout guides to help you achieve your health goals.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FitnessContent;
  