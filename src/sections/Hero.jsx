import React from 'react';
import siteConfig from '../data/siteConfig';

export default function Hero() {
  const getWhatsAppLink = () => {
    const num = siteConfig.booking.whatsappNumber || siteConfig.contact.phoneNumbers[0];
    const cleanNum = num.replace(/\D/g, '');
    const prefix = cleanNum.startsWith('91') ? '' : '91';
    return `https://wa.me/${prefix}${cleanNum}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Sairam%20Maniam%20Stays.`;
  };

  const scrollToSection = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Cinematic Image - Using the configured first gallery image (exterior) */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.gallery[0].src}
          alt={siteConfig.gallery[0].alt}
          className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.05]"
        />
        {/* Subtle dark green vignette/gradient overlay for high readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-primary/45" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between h-[75%] pt-16">
        
        {/* Top/Side metadata row */}
        <div className="flex justify-between items-start text-soft-ivory/80 font-sans tracking-[0.25em] text-[10px] md:text-xs uppercase">
          <div className="space-y-1">
            <p>Private Villa</p>
            <p className="text-warm-taupe">Pollachi, Tamil Nadu</p>
          </div>
          <div className="text-right hidden sm:block">
            <p>{siteConfig.brand.tagline}</p>
          </div>
        </div>

        {/* Hero Copy (Editorial serif headline & Positioning statement) */}
        <div className="max-w-4xl text-left my-auto space-y-6 md:space-y-8">
          <span className="block text-xs md:text-sm font-sans tracking-[0.3em] uppercase text-gold-accent font-medium">
            {siteConfig.brand.name}
          </span>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-soft-ivory tracking-wide leading-[1.1] font-light">
            A Private Stay,<br />
            <span className="italic">Made to Unwind.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-serif text-warm-ivory/80 max-w-2xl font-light">
            {siteConfig.brand.positioning}
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('#introduction')}
              className="group inline-flex items-center justify-center space-x-3 bg-warm-ivory hover:bg-white text-primary uppercase text-[11px] tracking-[0.2em] font-sans font-semibold py-4 px-8 transition-all duration-300"
            >
              <span>Explore The Villa</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 border border-soft-ivory/30 hover:border-soft-ivory text-soft-ivory hover:text-white uppercase text-[11px] tracking-[0.2em] font-sans font-medium py-4 px-8 transition-colors duration-300"
            >
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom indicator / Scroll button */}
        <div className="flex justify-between items-center text-warm-taupe/60 text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase pt-4 border-t border-soft-ivory/10">
          <span>{siteConfig.contact.location}</span>
          <button 
            onClick={() => scrollToSection('#introduction')}
            className="hover:text-soft-ivory transition-colors uppercase"
          >
            Scroll Down ↓
          </button>
        </div>
      </div>
    </section>
  );
}
