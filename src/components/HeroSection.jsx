import React from 'react';
// import Container from "./Container";

const HeroSection = () => {
  return (
    <div className="relative" id="home">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-orange-400 to-red-600 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-yellow-400 to-green-300 dark:to-indigo-600"></div>
      </div>
      <div>
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-6xl">Welcome to <span className="text-orange-400 dark:text-white">Singh's Fitness Farm</span></h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300 text-lg">Embark on a journey of fitness and wellness at S2F. Our state-of-the-art facilities, expert trainers, and supportive community are here to help you achieve your health goals and unlock your full potential.</p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-orange-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Start Your Fitness Journey
                </span>
              </a>
              <a
                href="#"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-orange-400/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
              >
                <span
                  className="relative text-base font-semibold text-orange-400 dark:text-white"
                >
                  Explore Our Programs
                </span>
              </a>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">State-of-the-Art Equipment</h6>
                <p className="mt-2 text-gray-500">Top-tier machines for optimal workouts</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Expert Personal Trainers</h6>
                <p className="mt-2 text-gray-500">Tailored guidance for your fitness goals</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Supportive Community</h6>
                <p className="mt-2 text-gray-500">Motivating environment for all fitness levels</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="https://plus.unsplash.com/premium_photo-1661920538067-c48451160c72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJlYWRtaWxsfGVufDB8MHwwfHx8MA%3D%3D" className="h-32 w-auto mx-auto" loading="lazy" alt="Treadmill" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="https://plus.unsplash.com/premium_photo-1670505062610-b9041ebe603c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VpZ2h0c3xlbnwwfDB8MHx8fDA%3D" className="h-32 w-auto mx-auto" loading="lazy" alt="Free Weights" />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltJTIwZ3JvdXB8ZW58MHwwfDB8fHww" className="h-32 w-auto m-auto" loading="lazy" alt="Yoga Mat" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="https://images.unsplash.com/photo-1652363723082-b1fdca4bdbd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwY3ljbGluZ3xlbnwwfDB8MHx8fDA%3D" className="h-32 w-auto mx-auto" loading="lazy" alt="Cycling Machine" />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img src="https://images.unsplash.com/photo-1534368270820-9de3d8053204?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGd5bSUyMHNxdWF0fGVufDB8MHwwfHx8MA%3D%3D" className="h-32 w-auto m-auto" loading="lazy" alt="Kettlebell" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="https://plus.unsplash.com/premium_photo-1661963295739-fb37c0b3a616?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3ltJTIwcm93aW5nfGVufDB8MHwwfHx8MA%3D%3D" className="h-32 w-auto mx-auto" loading="lazy" alt="Rowing Machine" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;