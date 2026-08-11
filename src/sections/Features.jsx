import React, { useEffect, useRef } from 'react';
import SectionLabel from '../components/SectionLabel';
import siteConfig from '../data/siteConfig';

export default function Features() {
  const listRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (listRef.current) {
      const items = listRef.current.querySelectorAll('.feature-row');
      items.forEach(item => observer.observe(item));
    }

    return () => {
      if (listRef.current) {
        const items = listRef.current.querySelectorAll('.feature-row');
        items.forEach(item => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <section 
      id="features" 
      className="bg-soft-ivory py-24 md:py-36 px-6 md:px-12 border-t border-warm-taupe/15"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-4">
            <SectionLabel number="02" text="The Space" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary tracking-wide leading-tight font-light max-w-xl">
              Everything you need, <br />
              <span className="italic font-normal">nothing you don't.</span>
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-muted-olive max-w-sm font-light">
            Thoughtfully structured layout designed for comfort, utility, and absolute self-sustained privacy during your countryside escape.
          </p>
        </div>

        {/* Numbered Editorial Feature List */}
        <div ref={listRef} className="border-t border-primary/10">
          {siteConfig.features.map((feat) => (
            <div 
              key={feat.id}
              className="feature-row reveal-up border-b border-primary/10 py-8 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 group hover:bg-warm-ivory/50 transition-colors duration-500 px-2 md:px-6 text-left"
            >
              {/* Number */}
              <div className="md:col-span-2 font-sans text-xs tracking-widest text-muted-olive group-hover:text-gold-accent transition-colors duration-300 font-medium pt-1">
                {feat.id}
              </div>

              {/* Title & Accent Arrow */}
              <div className="md:col-span-6 flex items-center justify-between">
                <h3 className="font-sans text-lg md:text-xl tracking-[0.15em] text-primary font-medium uppercase group-hover:translate-x-2 transition-transform duration-500">
                  {feat.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-4 font-sans text-sm text-primary/70 leading-relaxed font-light">
                {feat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
