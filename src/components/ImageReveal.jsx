import React, { useEffect, useRef } from 'react';

export default function ImageReveal({ src, alt, className = "" }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Wipe/fade layer */}
      <div className="absolute inset-0 bg-primary/20 transition-transform duration-1000 ease-out origin-left scale-x-100 group-[.active]:scale-x-0 z-10" />
      
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-110 group-[.active]:scale-100 filter brightness-[0.93] contrast-[1.02]"
      />
    </div>
  );
}
