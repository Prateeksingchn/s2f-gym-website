import React from 'react';

const FeaturesSection = () => {
  return (
    <div id="features" className="bg-[#142341] h-full">
      <div className="container h-full mx-auto px-4 py-20 ">
        <div className="md:w-2/3 lg:w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
            <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
          </svg>
          
          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Transform Your Body and Mind at Singh's Fitness Farm (S2F)
          </h2>
          <p className="text-gray-600 dark:text-gray-300">At S2F, we offer a comprehensive approach to fitness that caters to all levels and goals. Our state-of-the-art facilities and expert trainers are here to guide you on your journey to a healthier, stronger you.</p>
        </div>
        <div
          className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
        >
          <FeatureCard
            imgSrc="https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fE1vZGVybiUyMGd5bSUyMEVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D"
            title="Modern Equipment"
            description="Access to a wide range of cutting-edge fitness equipment to support your workout routines."
            linkText="Learn more"
          />
          <FeatureCard
            imgSrc="https://plus.unsplash.com/premium_photo-1663050901483-ee8703cc8372?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3ltJTIwVHJhaW5lcnN8ZW58MHx8MHx8fDA%3D"
            title="Expert Trainers"
            description="Personalized guidance from certified fitness professionals to help you achieve your goals."
            linkText="Meet our team"
          />
          <FeatureCard
            imgSrc="https://images.unsplash.com/photo-1518609571773-39b7d303a87b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltJTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D"
            title="Diverse Classes"
            description="A variety of group fitness classes including yoga, HIIT, spinning, and more for all fitness levels."
            linkText="View schedule"
          />
          <FeatureCard
            imgSrc="https://plus.unsplash.com/premium_photo-1700583712176-0652e672ba18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TnV0cml0aW9uJTIwcGxhbnxlbnwwfHwwfHx8MA%3D%3D"
            title="Nutrition Guidance"
            description="Customized meal plans and nutritional advice to complement your fitness regimen and maximize results."
            linkText="Get started"
            isLastCard={true}
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ imgSrc, title, description, linkText, isLastCard = false }) => {
  const baseClasses = "group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10";
  const lastCardClasses = "group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10";

  return (
    <div className={isLastCard ? lastCardClasses : baseClasses}>
      <div className={`relative space-y-8 py-12  p-8 ${isLastCard ? 'transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800' : ''}`}>
        <img
          src={imgSrc}
          className="w-12"
          width="512"
          height="512"
          alt={`${title} illustration`}
        />

        <div className="space-y-2">
          <h5
            className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary"
          >
            {title}
          </h5>
          <p className="text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
        <a href="#" className="flex items-center justify-between group-hover:text-secondary">
          <span className="text-sm">{linkText}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>                
        </a>
      </div>
    </div>
  );
};

export default FeaturesSection;