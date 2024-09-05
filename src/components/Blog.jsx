import React from "react";
// import Container from "./Container";

const FitnessContent = () => {
  return (
    <div id="fitness-content">
      <div>
        <div className="mb-12 space-y-2 text-center">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">
            Fitness Insights
          </h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Explore our latest articles for expert fitness tips, inspiring success stories, and effective workout guides to help you achieve your health goals.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1434596922112-19c563067271?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RWZmZWN0aXZlJTIwRnVsbCUyMEJvZHklMjBXb3Jrb3V0fGVufDB8MHwwfHx8MA%3D%3D"
                alt="Effective Full-Body Workout"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                10 Effective Full-Body Workouts for Beginners
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Kickstart your fitness journey with these beginner-friendly workouts designed to target all major muscle groups...
              </p>
              <a className="inline-block" href="#">
                <span className="text-orange-400 dark:text-orange-300">Read more</span>
              </a>
            </div>
          </div>

          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://plus.unsplash.com/premium_photo-1700053460290-f47d0726e7db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TnV0cml0aW9uJTIwVGlwc3xlbnwwfDB8MHx8fDA%3D"
                alt="Nutrition Tips"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Nutrition Tips: Fuel Your Workouts for Maximum Results
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Learn how to optimize your diet to support your fitness goals and enhance your performance at the gym...
              </p>
              <a className="inline-block" href="#">
                <span className="text-orange-400 dark:text-orange-300">Read more</span>
              </a>
            </div>
          </div>

          <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bSUyMFN1Y2Nlc3MlMjBTdG9yeXxlbnwwfDB8MHx8fDA%3D"
                alt="Member Success Story"
                loading="lazy"
                width="1000"
                height="667"
                className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                S2F Success Story: Sarah's 50-Pound Weight Loss Journey
              </h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Be inspired by Sarah's incredible transformation and learn about her strategies for long-term success...
              </p>
              <a className="inline-block" href="#">
                <span className="text-orange-400 dark:text-orange-300">Read more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessContent;
