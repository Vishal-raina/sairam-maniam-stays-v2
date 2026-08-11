import React from 'react';
import { 
  Home, 
  ChefHat, 
  Wifi, 
  ShieldCheck, 
  MapPin, 
  Baby, 
  Heart,
  Maximize,
  Compass,
  Zap,
  Car
} from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import siteConfig from '../data/siteConfig';

// Map amenity strings to custom icons for high-quality scannable grid layout
const iconMap = {
  "Spacious AC bedrooms": Home,
  "Large living & dining area": Maximize,
  "Outside food service": ChefHat,
  "Clean attached bathrooms": Compass,
  "High-speed Wi-Fi": Wifi,
  "24×7 power backup": Zap,
  "Private car parking": Car,
  "CCTV & safe surroundings": ShieldCheck,
  "Outdoor sit-out & lawn area": MapPin,
  "Senior-citizen friendly": Heart,
  "Kids friendly": Baby
};

export default function Amenities() {
  return (
    <section 
      id="amenities" 
      className="bg-warm-ivory py-24 md:py-36 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Title */}
        <div className="text-left space-y-4 max-w-2xl">
          <SectionLabel number="04" text="Amenities" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary tracking-wide leading-tight font-light">
            Comfort, <span className="italic font-normal">thoughtfully provided.</span>
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-olive font-light">
            Every amenity listed represents our commitment to offering a peaceful, clean and self-sufficient environment.
          </p>
        </div>

        {/* Minimalist Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
          {siteConfig.amenities.map((item, idx) => {
            const IconComponent = iconMap[item] || Home;
            return (
              <div 
                key={idx}
                className="bg-soft-ivory p-6 border border-warm-taupe/15 flex flex-col justify-between text-left hover:border-gold-accent transition-colors duration-300"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/5 text-primary rounded-none">
                    <IconComponent className="w-5 h-5 stroke-[1.25]" />
                  </div>
                  <h3 className="font-sans text-sm tracking-wider uppercase text-primary font-medium">
                    {item}
                  </h3>
                </div>
                <div className="pt-6 text-[10px] tracking-[0.2em] uppercase text-warm-taupe font-medium">
                  Configured
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
