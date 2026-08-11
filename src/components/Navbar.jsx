import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleLinkClick = (selector) => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getWhatsAppLink = () => {
    const num = siteConfig.booking.whatsappNumber || siteConfig.contact.phoneNumbers[0];
    const cleanNum = num.replace(/\D/g, '');
    const prefix = cleanNum.startsWith('91') ? '' : '91';
    return `https://wa.me/${prefix}${cleanNum}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Sairam%20Maniam%20Stays.`;
  };

  return (
    <>
      {/* Top sticky-floating navigation bar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out px-6 py-5 md:px-12 ${
          scrolled 
            ? 'bg-primary/95 backdrop-blur-md border-b border-secondary shadow-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo brand */}
          <button 
            onClick={() => handleLinkClick('#hero')} 
            className={`text-xl md:text-2xl font-serif tracking-[0.15em] transition-colors duration-300 font-medium ${
              scrolled ? 'text-soft-ivory' : 'text-soft-ivory'
            }`}
          >
            {siteConfig.brand.shortName.toUpperCase()}
          </button>

          {/* Minimal custom Menu Trigger */}
          <button 
            onClick={toggleMenu}
            className="flex items-center space-x-3 text-soft-ivory group focus:outline-none focus:ring-1 focus:ring-gold-accent px-2 py-1 rounded"
            aria-label="Open Navigation Menu"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-medium opacity-80 group-hover:opacity-100 transition-opacity hidden md:inline">
              Menu
            </span>
            <Menu className="w-5 h-5 stroke-[1.5] transition-transform duration-300 group-hover:scale-105" />
          </button>
        </div>
      </nav>

      {/* Full-screen editorial overlay menu */}
      <div 
        className={`fixed inset-0 z-50 bg-primary/98 flex flex-col justify-between p-8 md:p-20 transition-all duration-700 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible translate-y-4'
        }`}
      >
        {/* Top Header Row within Menu */}
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <span className="text-lg md:text-xl font-serif text-warm-taupe/60 tracking-[0.2em]">
            {siteConfig.brand.name.toUpperCase()}
          </span>
          <button 
            onClick={toggleMenu}
            className="flex items-center space-x-2 text-soft-ivory group focus:outline-none focus:ring-1 focus:ring-gold-accent px-2 py-1 rounded"
            aria-label="Close Navigation Menu"
          >
            <span className="text-xs uppercase tracking-[0.25em] font-sans font-medium opacity-80 group-hover:opacity-100 transition-opacity hidden md:inline">
              Close
            </span>
            <X className="w-6 h-6 stroke-[1.5] transition-transform duration-300 group-hover:rotate-90" />
          </button>
        </div>

        {/* Navigation Items (large serif layout) */}
        <div className="w-full max-w-7xl mx-auto my-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ul className="space-y-4 md:space-y-6 text-left">
            {[
              { num: '01', label: 'THE VILLA', selector: '#introduction' },
              { num: '02', label: 'FEATURES', selector: '#features' },
              { num: '03', label: 'AMENITIES', selector: '#amenities' },
              { num: '04', label: 'GALLERY', selector: '#gallery' },
              { num: '05', label: 'LOCATION', selector: '#location' },
              { num: '06', label: 'ENQUIRE', selector: '#enquiry' }
            ].map((item) => (
              <li key={item.num} className="group">
                <button
                  onClick={() => handleLinkClick(item.selector)}
                  className="flex items-baseline space-x-6 text-left focus:outline-none"
                >
                  <span className="text-xs md:text-sm font-sans tracking-widest text-warm-taupe/50 group-hover:text-gold-accent transition-colors font-medium">
                    {item.num}
                  </span>
                  <span className="text-3xl md:text-5xl lg:text-6xl font-serif text-soft-ivory tracking-wide group-hover:text-gold-accent transition-colors duration-300 relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Contact Details Panel in Menu */}
          <div className="text-left border-t lg:border-t-0 lg:border-l border-warm-taupe/20 pt-8 lg:pt-0 lg:pl-16 space-y-6 text-warm-taupe">
            <h4 className="text-xs uppercase tracking-[0.25em] font-sans font-medium text-gold-accent">
              Connect With Us
            </h4>
            
            <div className="space-y-3 font-sans text-sm md:text-base">
              {siteConfig.contact.phoneNumbers.map((phone, i) => (
                <a 
                  key={i} 
                  href={`tel:${phone}`}
                  className="flex items-center space-x-3 text-soft-ivory hover:text-gold-accent transition-colors w-fit"
                >
                  <Phone className="w-4 h-4 stroke-[1.5]" />
                  <span>{phone}</span>
                </a>
              ))}
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center space-x-3 text-soft-ivory hover:text-gold-accent transition-colors w-fit"
              >
                <Mail className="w-4 h-4 stroke-[1.5]" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            <div className="pt-4">
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-sans font-medium text-gold-accent hover:text-soft-ivory transition-colors group"
              >
                <span>Enquire on WhatsApp</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer/Location signoff in menu */}
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center border-t border-warm-taupe/10 pt-6 text-[10px] md:text-xs tracking-[0.2em] uppercase font-sans text-warm-taupe/50">
          <span>{siteConfig.contact.location.toUpperCase()}</span>
          <span>© {new Date().getFullYear()} SAIRAM MANIAM</span>
        </div>
      </div>
    </>
  );
}
