import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number | undefined;

    const handleMouseMove = (e: MouseEvent) => {
      // Use requestAnimationFrame for smoothest performance
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        if (glowRef.current) {
          const x = e.clientX - 250;
          const y = e.clientY - 250;
          glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        }
      });

      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isVisible]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={glowRef}
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          top: 0,
          left: 0,
          background:
            "radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(16,185,129,0.03) 40%, transparent 70%)",
          transition: "opacity 0.4s ease",
          opacity: isVisible ? 1 : 0,
          willChange: "transform",
        }}
      />
    </div>
  );
}
