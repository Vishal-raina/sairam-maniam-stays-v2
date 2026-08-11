import React, { useState } from 'react';
import SectionLabel from '../components/SectionLabel';
import siteConfig from '../data/siteConfig';

export default function MadeFor() {
  const [activeImage, setActiveImage] = useState(siteConfig.gallery[2].src);
  const [fade, setFade] = useState(false);

  // Link each category to a generic image placeholder
  const imagesForStays = {
    "Family stays": siteConfig.gallery[1].src, // living
    "Vacation stays": siteConfig.gallery[0].src, // ext
    "Corporate accommodation": siteConfig.gallery[2].src, // bed
    "Shooting discussion & accommodation": siteConfig.gallery[3].src, // dining
    "Peaceful long stays": siteConfig.gallery[4].src, // bath
    "Weekend relaxation": siteConfig.gallery[5].src // sitout
  };

  const handleMouseEnter = (title) => {
    if (imagesForStays[title]) {
      setFade(true);
      setTimeout(() => {
        setActiveImage(imagesForStays[title]);
        setFade(false);
      }, 150);
    }
  };

  return (
    <section 
      id="made-for" 
      className="bg-primary text-soft-ivory py-24 md:py-36 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left column: Text list */}
        <div className="lg:col-span-7 text-left space-y-12">
          <SectionLabel number="03" text="Made For" light={true} />
          
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide leading-tight font-light">
              Different stays.<br />
              <span className="italic font-normal">One private space.</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-warm-taupe/80 max-w-xl font-light">
              Sairam Maniam Stays conforms perfectly to your demands. Hover over our tailored use cases to visualize the corresponding settings.
            </p>
          </div>

          <div className="space-y-2 border-t border-soft-ivory/10 pt-6">
            {siteConfig.perfectFor.map((item, index) => (
              <div 
                key={index}
                onMouseEnter={() => handleMouseEnter(item.title)}
                className="py-4 border-b border-soft-ivory/10 flex flex-col md:flex-row md:items-center justify-between group cursor-pointer"
              >
                <div className="space-y-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-soft-ivory group-hover:text-gold-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-warm-taupe/60 group-hover:text-warm-taupe/90 transition-colors font-light">
                    {item.description}
                  </p>
                </div>
                <span className="text-gold-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block text-xl">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Image preview panel */}
        <div className="lg:col-span-5 hidden lg:block h-[550px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/20 z-10" />
          <img
            src={activeImage}
            alt="Stay visual preview"
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-500 filter brightness-[0.85] contrast-[1.05] ${
              fade ? 'opacity-40 scale-105' : 'opacity-100 scale-100'
            }`}
          />
          {/* Ornamental frame */}
          <div className="absolute inset-6 border border-soft-ivory/10 z-20 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
