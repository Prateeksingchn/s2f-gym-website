import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';
import { gymImages } from '../data/GymImageGallery';

const GymImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('Equipment');
  const [images, setImages] = useState([]);

  const categories = useMemo(() => ['Equipment', 'Facilities', 'Zumba'], []);

  useEffect(() => {
    const filteredImages = gymImages.filter(img => img.category === activeFilter);
    setImages(filteredImages);
  }, [activeFilter]);

  const openLightbox = useCallback((index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  }, [images]);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  }, [images]);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      setSelectedImage(images[newIndex]);
      return newIndex;
    });
  }, [images]);

  const ImageCard = React.memo(({ image, index, openLightbox }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
      whileHover={{ scale: 1.03 }}
      onClick={() => openLightbox(index)}
    >
      <img src={image.url} alt={image.caption} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
        <p className="text-white text-sm font-medium">{image.caption}</p>
      </div>
    </motion.div>
  ));

  return (
    <div className="min-h-screen bg-gray-900 px-6 py-16">
      <h1 className="text-5xl font-bold text-white mb-8 text-center">
        Our Facilities
      </h1>
      
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {images.map((image, index) => (
            <ImageCard key={image.url} image={image} index={index} openLightbox={openLightbox} />
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          >
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors duration-300">
              <X className="w-8 h-8" />
            </button>
            <button onClick={prevImage} className="absolute left-4 text-white hover:text-blue-400 transition-colors duration-300">
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button onClick={nextImage} className="absolute right-4 text-white hover:text-blue-400 transition-colors duration-300">
              <ChevronRight className="w-12 h-12" />
            </button>
            <motion.img
              key={currentIndex}
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-14 left-0 right-0 text-center"
            >
              <p className="text-white text-xl font-medium mb-6">{selectedImage.caption}</p>
              <div className="flex justify-center space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center">
                  <Instagram className="w-5 h-5 mr-2" />
                  Share
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center">
                  <Facebook className="w-5 h-5 mr-2" />
                  Share
                </button>
                <button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center">
                  <Twitter className="w-5 h-5 mr-2" />
                  Share
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default React.memo(GymImageGallery);