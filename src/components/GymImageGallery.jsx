import React, { useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageCard = ({ image, onClick, index }) => (
  <div
    className={`group relative overflow-hidden rounded-lg bg-gray-800 cursor-pointer transform transition-all duration-300 hover:shadow-xl ${
      index % 4 === 0 || index % 4 === 3 ? "row-span-1" : "row-span-2"
    } ${image.className || ""}`}
    onClick={onClick}
  >
    <img
      src={image.url}
      alt={image.caption}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
      <p className="text-white text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        {image.id}. {image.caption}
      </p>
    </div>
  </div>
);

const gymImages = [
  { id: 1, url: "/public/gym1.png", caption: "State-of-the-art equipment" },
  { id: 2, url: "/public/gym2.png", caption: "Spacious workout area" },
  { id: 3, url: "/public/gym3.png", caption: "Professional trainers" },
  { id: 4, url: "/public/gym6.png", caption: "Energetic Zumba classes" },
  { id: 5, url: "/public/gym5.png", caption: "Cardio zone" },
  { id: 6, url: "/public/gym4.png", caption: "Weight training area" },
  { id: 7, url: "/public/gym7.png", caption: "Modern locker rooms" },
  { id: 8, url: "/public/gym11.png", caption: "Indoor swimming pool" },
  { id: 9, url: "/public/gym9.png", caption: "Relaxing sauna" },
  { id: 10, url: "/public/gym13.png", caption: "Nutrition consultation area" },
  { id: 11, url: "/public/gym8.png", caption: "Welcoming reception" },
  { id: 12, url: "/public/gym12.png", caption: "Healthy smoothie bar" },
  { id: 13, url: "/public/gym10.png", caption: "High-energy Zumba session" },
  { id: 14, url: "/public/gym14.png", caption: "Group fitness classes" },
  { id: 15, url: "/public/gym12.png", caption: "Additional group fitness", className: "hidden sm:hidden md:block lg:block" },
  { id: 16, url: "/public/gym3.png", caption: "More group activities", className: "hidden lg:block" },
  { id: 17, url: "/public/gym1.png", caption: "Extra equipment showcase", className: "hidden lg:block" },
];

const GymImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : gymImages.length - 1
    );
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex < gymImages.length - 1 ? prevIndex + 1 : 0
    );
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "Escape") setSelectedImage(null);
    },
    [handlePrevious, handleNext]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 px-0 pb-0">
      <div className="relative flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90"></div>
        
        {/* Decorative gym elements */}
        <svg className="absolute top-2 left-2 sm:top-4 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-gray-600 opacity-20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
        </svg>
        
        <svg className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gray-600 opacity-20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
        </svg>
        
        <div className="relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight flex flex-col sm:flex-row items-center justify-center">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-0 sm:mr-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
            </svg>
            <span>Experience Our <span className="text-yellow-400 mx-1 sm:mx-3">World-Class</span> Gym</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 sm:mt-6 md:mt-8 mb-6 sm:mb-10 md:mb-14 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl mx-auto">
            Discover state-of-the-art facilities and expert trainers to help you achieve your fitness goals
          </p>
        </div>
      </div>

      <div className="h-auto sm:h-full lg:h-[1500px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-auto bg-gradient-to-r from-gray-900 to-gray-800 p-4">
        {gymImages.map((image, index) => (
          <ImageCard
            key={image.id}
            image={image}
            onClick={() => {
              setSelectedImage(image);
              setCurrentIndex(index);
            }}
            index={index}
          />
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[2001] flex items-center justify-center p-4"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>
          <img
            src={gymImages[currentIndex].url}
            alt={gymImages[currentIndex].caption}
            width={gymImages[currentIndex].width}
            height={gymImages[currentIndex].height}
            className="max-w-full max-h-[80vh] object-contain"
          />
          <p className="absolute bottom-4 left-4 right-4 text-center text-white text-lg font-semibold bg-black bg-opacity-50 py-2 px-4 rounded-full">
            {gymImages[currentIndex].id}. {gymImages[currentIndex].caption}
          </p>
        </div>
      )}
    </div>
  );
};

export default GymImageGallery;