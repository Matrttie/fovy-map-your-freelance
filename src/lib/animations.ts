
import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (
  options: IntersectionObserverInit = { threshold: 0.1 }
) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [options]);

  return [ref, isVisible] as const;
};

export const useSequentialFadeIn = (
  elementClass: string,
  baseDelay: number = 100
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(elementClass);
    
    elements.forEach((element, index) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.opacity = '0';
      htmlElement.style.transform = 'translateY(20px)';
      htmlElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
      setTimeout(() => {
        htmlElement.style.opacity = '1';
        htmlElement.style.transform = 'translateY(0)';
      }, baseDelay * (index + 1));
    });
    
    return () => {
      elements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.opacity = '';
        htmlElement.style.transform = '';
        htmlElement.style.transition = '';
      });
    };
  }, [elementClass, baseDelay]);
};
