import { useState, useEffect } from 'react';

export const useImages = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    import(`../data/${category.toLowerCase()}Images.js`)
      .then((module) => {
        setImages(module.default);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error loading images:', error);
        setIsLoading(false);
      });
  }, [category]);

  return { images, isLoading };
};