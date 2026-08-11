import React from 'react';
import siteConfig from '../data/siteConfig';

export default function Footer() {
  const scrollToSection = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-soft-ivory py-16 px-6 md:px-12 border-t border-soft-ivory/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        
        {/* Brand layout column */}
        <div className="text-center md:text-left space-y-4">
          <div className="space-y-1">
            <span className="block text-xl font-serif tracking-[0.2em] uppercase text-soft-ivory">
              {siteConfig.brand.name.toUpperCase()}
            </span>
            <span className="block text-xs font-sans text-warm-taupe/80 tracking-wider">
              {siteConfig.brand.positioning}
            </span>
          </div>
          <p className="text-[10px] tracking-[0.25em] text-gold-accent uppercase font-medium">
            {siteConfig.brand.tagline}
          </p>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-sans text-xs tracking-widest uppercase text-warm-taupe/80">
          <button onClick={() => scrollToSection('#introduction')} className="hover:text-soft-ivory transition-colors">The Villa</button>
          <button onClick={() => scrollToSection('#features')} className="hover:text-soft-ivory transition-colors">Features</button>
          <button onClick={() => scrollToSection('#amenities')} className="hover:text-soft-ivory transition-colors">Amenities</button>
          <button onClick={() => scrollToSection('#gallery')} className="hover:text-soft-ivory transition-colors">Gallery</button>
          <button onClick={() => scrollToSection('#location')} className="hover:text-soft-ivory transition-colors">Location</button>
          <button onClick={() => scrollToSection('#enquiry')} className="hover:text-soft-ivory transition-colors">Enquire</button>
        </div>

      </div>

      {/* Bottom bar copyrights */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-soft-ivory/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.2em] uppercase font-sans text-warm-taupe/40">
        <span>© {new Date().getFullYear()} {siteConfig.brand.name.toUpperCase()}. ALL RIGHTS RESERVED.</span>
        <span>Near Avani Hall, Pollachi</span>
      </div>
    </footer>
  );
}
