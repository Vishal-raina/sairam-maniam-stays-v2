import React from 'react';
import SectionLabel from '../components/SectionLabel';
import siteConfig from '../data/siteConfig';

export default function Location() {
  return (
    <section 
      id="location" 
      className="bg-warm-ivory py-24 md:py-36 px-6 md:px-12 border-t border-warm-taupe/15"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Mock Editorial Location/Map block */}
        <div className="lg:col-span-6 w-full h-[350px] md:h-[450px] relative overflow-hidden bg-secondary border border-warm-taupe/15">
          {/* Stylized premium visual representation of a maps interface */}
          <div className="absolute inset-0 bg-[radial-gradient(#26362d_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-40" />
          
          <div className="absolute inset-0 flex flex-col justify-between p-8 text-soft-ivory">
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-gold-accent font-medium">
              Geographic Coordinates
            </span>
            
            <div className="space-y-3 text-left">
              <h3 className="font-serif text-3xl md:text-4xl text-soft-ivory leading-tight font-light">
                Pollachi
              </h3>
              <p className="font-sans text-xs text-warm-taupe tracking-wider leading-relaxed max-w-sm font-light">
                Nestled near Avani Hall, surrounded by calm agricultural estates and premium private settings.
              </p>
            </div>
            
            <div className="text-left">
              <a 
                href={siteConfig.booking.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gold-accent hover:bg-gold-accent/90 text-primary uppercase text-[10px] tracking-[0.2em] font-sans font-semibold py-3 px-6 transition-colors duration-300"
              >
                <span>Open Google Maps</span>
              </a>
            </div>
          </div>

          {/* Ornamental coordinate lines */}
          <div className="absolute bottom-6 right-6 border-r border-b border-soft-ivory/20 w-24 h-24 pointer-events-none" />
        </div>

        {/* Right Side: Description & Details */}
        <div className="lg:col-span-6 text-left space-y-8 lg:pl-6">
          <SectionLabel number="06" text="Location" />
          
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary tracking-wide leading-tight font-light">
              Near Avani Hall,<br />
              <span className="italic font-normal">Pollachi.</span>
            </h2>
            <p className="font-sans text-sm md:text-base text-primary/80 leading-relaxed font-light">
              Sairam Maniam Stays is strategically located near Avani Hall, Pollachi. The private villa offers guests an ideal environment with excellent connectivity while maintaining silent country atmosphere.
            </p>
          </div>

          <div className="border-t border-primary/10 pt-6 space-y-3">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-muted-olive font-medium">
              Arrival details
            </h4>
            <p className="font-sans text-sm text-primary/70 leading-relaxed font-light">
              Secure surroundings, private car parking, and senior-citizen friendly flat layouts make check-in and arrival seamless for groups of all sizes.
            </p>
          </div>

          <div className="pt-2">
            <a 
              href={siteConfig.booking.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-primary hover:text-muted-olive transition-colors group"
            >
              <span>View Location</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
