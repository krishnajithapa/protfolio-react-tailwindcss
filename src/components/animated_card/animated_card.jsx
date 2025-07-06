import { useEffect, useRef, useState } from "react";

/**
 * AnimatedCard component animates its children into view every time it scrolls into the viewport.
 * @param {ReactNode} children - Content to render inside the card.
 * @param {number} delay - Optional delay (ms) before animation starts.
 */
const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleIntersect = ([entry]) => {
      if (entry.isIntersecting) {
        timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
      } else {
        clearTimeout(timeoutRef.current);
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.1,
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutRef.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] transform
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
