import React from "react";

const App = () => {
  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
            Transform Your Life at <br />
            <span className="text-orange-500 whitespace-wrap sm:whitespace-nowrap">Singh's Fitness Farm</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Join our growing community of fitness enthusiasts who are achieving their goals with <span className="whitespace-nowrap">Singh's Fitness Farm</span>. Start your journey today!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Start Your Transformation
            </a>
            <a
              href="#"
              className="px-8 py-3 text-lg font-semibold text-orange-500 bg-white border-2 border-orange-500 rounded-full hover:bg-orange-50 transition duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-800 dark:text-orange-400 dark:border-orange-400 dark:hover:bg-gray-700"
            >
              View Success Stories
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex -space-x-4 mb-4">
              {[
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`S2F member ${index + 1}`}
                  className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-lg"
                />
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Join 100+ members already transforming their lives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;