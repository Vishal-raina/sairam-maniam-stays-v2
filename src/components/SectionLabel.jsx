import React, { useEffect, useRef } from 'react';

export default function SectionLabel({ number, text, light = false }) {
  const labelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (labelRef.current) {
      observer.observe(labelRef.current);
    }

    return () => {
      if (labelRef.current) {
        observer.unobserve(labelRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={labelRef} 
      className={`reveal-up flex items-center space-x-3 text-xs tracking-[0.25em] uppercase font-sans ${
        light ? 'text-warm-taupe/80' : 'text-muted-olive'
      }`}
    >
      <span>{number}</span>
      <span className={`h-[1px] w-8 ${light ? 'bg-warm-taupe/30' : 'bg-muted-olive/30'}`}></span>
      <span>{text}</span>
    </div>
  );
}
