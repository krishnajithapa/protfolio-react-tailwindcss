import { useEffect, useRef, useState } from "react";

/**
 * AnimatedCard component animates its children into view when scrolled into viewport.
 * @param {ReactNode} children - Content to render inside the card.
 * @param {number} delay - Optional delay (ms) before animation starts.
 */
const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Callback for IntersectionObserver
    const handleIntersect = ([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    });

    const element = ref.current;
    if (element) observer.observe(element);

    // Cleanup observer on unmount
    return () => {
      if (element) observer.unobserve(element);
      observer.disconnect();
    };
  }, []); // Empty dependency array: run only once on mount

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-in-out transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
