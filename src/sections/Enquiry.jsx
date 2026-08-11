import React from 'react';
import SectionLabel from '../components/SectionLabel';
import EnquiryForm from '../components/EnquiryForm';

export default function Enquiry() {
  return (
    <section 
      id="enquiry" 
      className="bg-primary text-soft-ivory py-24 md:py-36 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[radial-gradient(#26362d_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Section header info */}
        <div className="text-center space-y-4 flex flex-col items-center">
          <SectionLabel number="07" text="Enquire" light={true} />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide leading-tight font-light mt-2">
            Plan <span className="italic font-normal">your stay</span>.
          </h2>
          <p className="font-sans text-sm md:text-base text-warm-taupe max-w-md font-light">
            Send us your stay requirements and check-in timeline. We will confirm details and complete booking on WhatsApp.
          </p>
        </div>

        {/* Form component container */}
        <div className="bg-secondary p-8 md:p-12 border border-soft-ivory/10 shadow-2xl">
          <EnquiryForm />
        </div>

      </div>
    </section>
  );
}
