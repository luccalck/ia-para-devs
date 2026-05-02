import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
}

export function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
  as: Component = "div",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={`${className} ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-5"
      }`}
      style={isVisible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
