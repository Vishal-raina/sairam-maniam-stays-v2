import React, { useEffect, useRef } from 'react';
import SectionLabel from '../components/SectionLabel';
import ImageReveal from '../components/ImageReveal';
import siteConfig from '../data/siteConfig';

export default function Introduction() {
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="introduction" 
      className="bg-warm-ivory py-24 md:py-36 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Storytelling / Copy */}
        <div className="lg:col-span-6 text-left space-y-8">
          <SectionLabel number="01" text="The Villa" />
          
          <h2 
            ref={headingRef}
            className="reveal-up text-4xl sm:text-5xl md:text-6xl font-serif text-primary tracking-wide leading-tight font-light"
          >
            A place to <span className="italic font-normal">slow down</span>.
          </h2>

          <div className="space-y-6 text-primary/80 font-sans text-base md:text-lg leading-relaxed font-light">
            <p>
              {siteConfig.brand.name} is a fully furnished private villa nestled in the tranquil countryside of Pollachi. Architecturally designed to harmonise with nature, it serves as a peaceful haven to relax, stay private, and unwind.
            </p>
            <p>
              Whether you are looking for secure family stays, weekend relaxation, corporate accommodation, creative shooting discussion and accommodation, or peaceful long stays, this boutique sanctuary is tailored for complete privacy and warm, natural hospitality.
            </p>
          </div>

          <div className="pt-4">
            <button 
              onClick={() => document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-primary hover:text-muted-olive transition-colors group"
            >
              <span>Explore the Space</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: Large Premium Editorial Photo */}
        <div className="lg:col-span-6 w-full h-[400px] sm:h-[500px] lg:h-[600px]">
          <ImageReveal 
            src={siteConfig.gallery[1].src} 
            alt="Beautiful premium living space at Sairam Maniam Stays"
            className="w-full h-full shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
