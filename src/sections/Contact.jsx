import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import SectionLabel from '../components/SectionLabel';
import siteConfig from '../data/siteConfig';

export default function Contact() {
  const getWhatsAppLink = () => {
    const num = siteConfig.booking.whatsappNumber || siteConfig.contact.phoneNumbers[0];
    const cleanNum = num.replace(/\D/g, '');
    const prefix = cleanNum.startsWith('91') ? '' : '91';
    return `https://wa.me/${prefix}${cleanNum}?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20Sairam%20Maniam%20Stays.`;
  };

  return (
    <section 
      id="contact" 
      className="bg-soft-ivory py-24 px-6 md:px-12 border-t border-warm-taupe/15"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
        
        {/* Branding & Positioning */}
        <div className="lg:col-span-6 space-y-6">
          <SectionLabel number="08" text="Contact" />
          <h2 className="text-4xl sm:text-5xl font-serif text-primary tracking-wide leading-tight font-light">
            We are here to <br />
            <span className="italic font-normal">welcome you</span>.
          </h2>
          <div className="space-y-2">
            <span className="block text-lg font-serif text-primary font-medium">
              {siteConfig.brand.name}
            </span>
            <span className="block text-sm font-sans text-muted-olive font-light">
              {siteConfig.brand.positioning}
            </span>
            <p className="text-xs font-sans text-warm-taupe tracking-widest uppercase pt-2 font-medium">
              {siteConfig.brand.tagline}
            </p>
          </div>
        </div>

        {/* Contact Links & Directory */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
          {/* Phone Numbers */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-muted-olive font-medium">
              Call us directly
            </h4>
            <div className="space-y-3">
              {siteConfig.contact.phoneNumbers.map((phone, i) => (
                <a 
                  key={i}
                  href={`tel:${phone}`}
                  className="flex items-center space-x-3 text-primary hover:text-gold-accent transition-colors font-sans text-sm md:text-base font-medium w-fit"
                >
                  <Phone className="w-4 h-4 stroke-[1.5] text-muted-olive" />
                  <span>{phone}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Email & Location details */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-muted-olive font-medium">
              Write or Visit
            </h4>
            <div className="space-y-3 font-sans text-sm md:text-base">
              <a 
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center space-x-3 text-primary hover:text-gold-accent transition-colors font-medium w-fit"
              >
                <Mail className="w-4 h-4 stroke-[1.5] text-muted-olive" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <div className="flex items-center space-x-3 text-primary font-light">
                <MapPin className="w-4 h-4 stroke-[1.5] text-muted-olive" />
                <span>{siteConfig.contact.location}</span>
              </div>
            </div>
            
            <div className="pt-2">
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-sans font-semibold text-gold-accent hover:text-primary transition-colors"
              >
                <span>WhatsApp enquiry →</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
