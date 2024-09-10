import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { gymImages } from '../data/GymImageGallery';

const GymImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const [filteredImages, setFilteredImages] = useState(gymImages);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index) => {
    setSelectedImage(filteredImages[index]);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredImages.length);
    setSelectedImage(filteredImages[(currentIndex + 1) % filteredImages.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
    setSelectedImage(filteredImages[(currentIndex - 1 + filteredImages.length) % filteredImages.length]);
  };

  const filterImages = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredImages(gymImages);
    } else {
      setFilteredImages(gymImages.filter(img => img.category === category));
    }
  };

  const categories = ['All', ...new Set(gymImages.map(img => img.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black px-10 py-16">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-white mb-8 text-center"
      >
        Experience Our World-Class Facilities
      </motion.h1>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex justify-center space-x-4 mb-8"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterImages(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeFilter === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex justify-center items-center h-64"
          >
            <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                onClick={() => openLightbox(index)}
              >
                <img src={image.url} alt={image.caption} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div>
                    <p className="text-white text-lg font-semibold">{image.caption}</p>
                    <p className="text-gray-300 text-sm">{image.category}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-blue-500 transition-colors duration-300">
              <X className="w-8 h-8" />
            </button>
            <button onClick={prevImage} className="absolute left-4 text-white hover:text-blue-500 transition-colors duration-300">
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button onClick={nextImage} className="absolute right-4 text-white hover:text-blue-500 transition-colors duration-300">
              <ChevronRight className="w-12 h-12" />
            </button>
            <motion.img
              key={currentIndex}
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 left-0 right-0 text-center"
            >
              <p className="text-white text-2xl font-bold mb-2">{selectedImage.caption}</p>
              <p className="text-gray-300 text-lg mb-4">{selectedImage.category}</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center">
                  <Instagram className="w-5 h-5 mr-2" />
                  Share on Instagram
                </button>
                <button className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center">
                  <Facebook className="w-5 h-5 mr-2" />
                  Share on Facebook
                </button>
                <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-full transition-colors duration-300 flex items-center">
                  <Twitter className="w-5 h-5 mr-2" />
                  Share on Twitter
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GymImageGallery;