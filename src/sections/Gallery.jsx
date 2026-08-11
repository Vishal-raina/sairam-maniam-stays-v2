import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import siteConfig from '../data/siteConfig';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % siteConfig.gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + siteConfig.gallery.length) % siteConfig.gallery.length);
  };

  return (
    <section 
      id="gallery" 
      className="bg-soft-ivory py-24 md:py-36 px-6 md:px-12 border-t border-warm-taupe/15"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-4">
            <SectionLabel number="05" text="Gallery" />
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary tracking-wide leading-tight font-light">
              Visualise <span className="italic font-normal">your stay</span>.
            </h2>
          </div>
          <p className="font-sans text-sm md:text-base text-muted-olive max-w-sm font-light">
            An editorial perspective of the spaces, outdoor surroundings, and interior layout designed for peaceful comfort.
          </p>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Item 1: Large landscape (Exterior) */}
          <div 
            onClick={() => openLightbox(0)}
            className="md:col-span-8 h-[350px] md:h-[450px] relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
            <img 
              src={siteConfig.gallery[0].src} 
              alt={siteConfig.gallery[0].alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Item 2: Tall vertical (Living Room) */}
          <div 
            onClick={() => openLightbox(1)}
            className="md:col-span-4 h-[350px] md:h-[450px] relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
            <img 
              src={siteConfig.gallery[1].src} 
              alt={siteConfig.gallery[1].alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Item 3: Small square (Bedroom) */}
          <div 
            onClick={() => openLightbox(2)}
            className="md:col-span-4 h-[300px] relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
            <img 
              src={siteConfig.gallery[2].src} 
              alt={siteConfig.gallery[2].alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Item 4: Small square (Dining) */}
          <div 
            onClick={() => openLightbox(3)}
            className="md:col-span-4 h-[300px] relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
            <img 
              src={siteConfig.gallery[3].src} 
              alt={siteConfig.gallery[3].alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Item 5: Small square (Bathroom) */}
          <div 
            onClick={() => openLightbox(4)}
            className="md:col-span-4 h-[300px] relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
            <img 
              src={siteConfig.gallery[4].src} 
              alt={siteConfig.gallery[4].alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Item 6: Large full width (Outdoor Sitout) */}
          <div 
            onClick={() => openLightbox(5)}
            className="md:col-span-12 h-[350px] md:h-[500px] relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
            <img 
              src={siteConfig.gallery[5].src} 
              alt={siteConfig.gallery[5].alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>

      {/* Lightbox Modal overlay */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-deep-charcoal/95 flex flex-col justify-between p-6 transition-opacity duration-300"
        >
          {/* Header toolbar */}
          <div className="flex justify-between items-center text-soft-ivory">
            <span className="font-sans text-xs tracking-widest uppercase">
              {lightboxIndex + 1} / {siteConfig.gallery.length} — {siteConfig.gallery[lightboxIndex].category}
            </span>
            <button 
              onClick={closeLightbox}
              className="p-2 hover:text-gold-accent transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Image & navigation controls */}
          <div className="flex items-center justify-between w-full max-w-5xl mx-auto my-auto relative">
            <button 
              onClick={prevImage}
              className="p-3 text-soft-ivory hover:text-gold-accent transition-colors absolute left-[-60px] hidden md:block focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-8 h-8 stroke-[1.5]" />
            </button>

            <div className="w-full max-h-[75vh] flex justify-center items-center">
              <img 
                src={siteConfig.gallery[lightboxIndex].src} 
                alt={siteConfig.gallery[lightboxIndex].alt} 
                className="max-w-full max-h-[75vh] object-contain shadow-2xl border border-warm-taupe/10"
              />
            </div>

            <button 
              onClick={nextImage}
              className="p-3 text-soft-ivory hover:text-gold-accent transition-colors absolute right-[-60px] hidden md:block focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="w-8 h-8 stroke-[1.5]" />
            </button>
          </div>

          {/* Bottom metadata caption */}
          <div className="text-center text-warm-taupe text-xs tracking-wider max-w-xl mx-auto pb-4">
            <p>{siteConfig.gallery[lightboxIndex].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
