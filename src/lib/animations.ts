
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

// Custom styles for the React Flow diagram
export const applyFlowStyles = () => {
  useEffect(() => {
    // Add custom styles to the document head for React Flow
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .interactive-mindmap .react-flow__node {
        transition: transform 0.3s ease, opacity 0.3s ease !important;
        opacity: 0;
      }
      
      .interactive-mindmap .react-flow__node.animated {
        opacity: 1;
      }
      
      .interactive-mindmap .react-flow__edge path {
        stroke-width: 2;
      }
      
      .interactive-mindmap .react-flow__node:hover {
        filter: drop-shadow(0 0 8px rgba(4, 150, 255, 0.5));
      }
      
      .interactive-mindmap .react-flow__controls {
        bottom: 10px;
        right: 10px;
        left: auto;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
      }
      
      .interactive-mindmap .react-flow__minimap {
        bottom: 10px;
        left: 10px;
        border-radius: 4px;
        overflow: hidden;
        opacity: 0.8;
      }
    `;
    
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
};
