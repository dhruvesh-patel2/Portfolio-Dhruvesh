import { useState, useEffect, useRef } from 'react';
import cardsData from './cardsData';

const useSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  
  const onTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  
  const onTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    const swipeThreshold = 50; 

    if (deltaX > swipeThreshold) {
      
      prevSlide();
    } else if (deltaX < -swipeThreshold) {
    
      nextSlide();
    }
  };

  const prevIndex = (activeIndex - 1 + cardsData.length) % cardsData.length;
  const nextIndex = (activeIndex + 1) % cardsData.length;

  return {
    activeIndex,
    isMobile,
    prevSlide,
    nextSlide,
    prevIndex,
    nextIndex,
    onTouchStart,
    onTouchEnd,
  };
};

export default useSlider;
