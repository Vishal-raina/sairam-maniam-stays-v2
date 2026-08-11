import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import Introduction from '../sections/Introduction';
import Features from '../sections/Features';
import MadeFor from '../sections/MadeFor';
import Amenities from '../sections/Amenities';
import Gallery from '../sections/Gallery';
import Location from '../sections/Location';
import Enquiry from '../sections/Enquiry';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  // Global intersection observer to trigger fade-up elements on scroll
  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal-up');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 120; // threshold height

        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    // Initial run to reveal components already visible in viewport
    handleScrollReveal();

    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden min-h-screen flex flex-col justify-between">
      {/* Header and Floating Navbar Overlay */}
      <Navbar />

      <main className="w-full flex-grow">
        {/* Full Cinematic Hero section */}
        <Hero />

        {/* Section 1: Introduction (Warm Ivory) */}
        <Introduction />

        {/* Section 2: Features space details (Soft Ivory) */}
        <Features />

        {/* Section 3: Stays target audiences (Deep forest dark primary) */}
        <MadeFor />

        {/* Section 4: General list of amenities (Warm Ivory) */}
        <Amenities />

        {/* Section 5: Asymmetric image masonry gallery (Soft Ivory) */}
        <Gallery />

        {/* Section 6: Interactive mock map area (Warm Ivory) */}
        <Location />

        {/* Section 7: Enquire form template (Deep primary dark) */}
        <Enquiry />

        {/* Section 8: Direct contacts panel (Soft Ivory) */}
        <Contact />
      </main>

      {/* Minimalism site Footer (Deep primary dark) */}
      <Footer />
    </div>
  );
}
