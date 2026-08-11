import React, { useState } from 'react';
import siteConfig from '../data/siteConfig';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct message body
    const textMessage = `Hello, I would like to enquire about Sairam Maniam Stays.\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Check-in: ${formData.checkIn || 'Not specified'}\n` +
      `Check-out: ${formData.checkOut || 'Not specified'}\n` +
      `Number of guests: ${formData.guests}\n` +
      `Message: ${formData.message || 'None'}`;

    const encodedText = encodeURIComponent(textMessage);
    
    // Fallback logic if WhatsApp number is empty
    const whatsappNum = siteConfig.booking.whatsappNumber || siteConfig.contact.phoneNumbers[0];
    
    // Format the number (remove non-digits, ensure correct prefix if needed, or simply append)
    const cleanNum = whatsappNum.replace(/\D/g, '');
    const prefix = cleanNum.startsWith('91') ? '' : '91'; // Indian country code default if not specified
    const finalNumber = `${prefix}${cleanNum}`;

    window.open(`https://wa.me/${finalNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto text-left font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-xs uppercase tracking-widest text-warm-taupe/80 mb-2">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-transparent border-b border-warm-taupe/30 py-3 px-1 text-soft-ivory placeholder-warm-taupe/40 focus:outline-none focus:border-gold-accent transition-colors text-sm"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-warm-taupe/80 mb-2">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your contact number"
            className="w-full bg-transparent border-b border-warm-taupe/30 py-3 px-1 text-soft-ivory placeholder-warm-taupe/40 focus:outline-none focus:border-gold-accent transition-colors text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="checkIn" className="block text-xs uppercase tracking-widest text-warm-taupe/80 mb-2">Check-in</label>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-warm-taupe/30 py-2 px-1 text-soft-ivory focus:outline-none focus:border-gold-accent transition-colors text-sm [color-scheme:dark]"
          />
        </div>

        <div>
          <label htmlFor="checkOut" className="block text-xs uppercase tracking-widest text-warm-taupe/80 mb-2">Check-out</label>
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-warm-taupe/30 py-2 px-1 text-soft-ivory focus:outline-none focus:border-gold-accent transition-colors text-sm [color-scheme:dark]"
          />
        </div>

        <div>
          <label htmlFor="guests" className="block text-xs uppercase tracking-widest text-warm-taupe/80 mb-2">Guests</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-warm-taupe/30 py-3 px-1 text-soft-ivory focus:outline-none focus:border-gold-accent transition-colors text-sm [color-scheme:dark]"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6+">6+ Guests</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-widest text-warm-taupe/80 mb-2">Special Notes / Requirements</label>
        <textarea
          id="message"
          name="message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          placeholder="Let us know if you require outside food service, senior citizen facilities, etc..."
          className="w-full bg-transparent border-b border-warm-taupe/30 py-3 px-1 text-soft-ivory placeholder-warm-taupe/40 focus:outline-none focus:border-gold-accent transition-colors text-sm resize-none"
        ></textarea>
      </div>

      <div className="pt-4 text-center">
        <button
          type="submit"
          className="inline-flex items-center space-x-3 bg-gold-accent hover:bg-gold-accent/90 text-primary uppercase text-xs tracking-[0.2em] font-sans font-semibold py-4 px-10 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/10"
        >
          <span>Send Enquiry</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </form>
  );
}
