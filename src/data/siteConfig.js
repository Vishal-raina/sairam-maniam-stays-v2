const siteConfig = {
  brand: {
    name: "Sairam Maniam Stays",
    positioning: "Premium Private Villa – Pollachi",
    tagline: "Relax • Stay Private • Unwind",
    shortName: "Sairam Maniam"
  },

  contact: {
    phoneNumbers: [
      "7418811573",
      "7339201112"
    ],
    email: "sairammaniamstays@gmail.com",
    location: "Near Avani Hall, Pollachi"
  },

  booking: {
    whatsappNumber: "", // Configurable - Client has two numbers. Keep empty to let it fall back or be configured.
    mapsUrl: "https://maps.google.com/?q=Avani+Hall+Pollachi" // Configurable map link
  },

  // Premium villa features provided in prompt
  features: [
    {
      id: "01",
      title: "SPACIOUS AC BEDROOMS",
      description: "Quiet, air-conditioned rooms designed to offer deep, restful sleep in absolute privacy."
    },
    {
      id: "02",
      title: "LARGE LIVING & DINING",
      description: "Generous spaces perfect for gathering, sharing stories, and savoring family moments."
    },
    {
      id: "03",
      title: "OUTDOOR SIT-OUT & LAWN",
      description: "A peaceful private garden setting to enjoy fresh morning breezes and sunset skies."
    },
    {
      id: "04",
      title: "PRIVATE CAR PARKING",
      description: "Secure, designated parking area within the villa boundaries for your complete convenience."
    },
    {
      id: "05",
      title: "HIGH-SPEED WI-FI",
      description: "Stay seamlessly connected with reliable wireless internet across the property."
    },
    {
      id: "06",
      title: "24×7 POWER BACKUP",
      description: "Uninterrupted living experiences with seamless, round-the-clock power backup."
    }
  ],

  // Provided properties / amenities
  amenities: [
    "Spacious AC bedrooms",
    "Large living & dining area",
    "Outside food service",
    "Clean attached bathrooms",
    "High-speed Wi-Fi",
    "24×7 power backup",
    "Private car parking",
    "CCTV & safe surroundings",
    "Outdoor sit-out & lawn area",
    "Senior-citizen friendly",
    "Kids friendly"
  ],

  // Perfect for stay use-cases
  perfectFor: [
    {
      title: "Family stays",
      description: "Reconnect and relax in a spacious, secure home designed for all generations."
    },
    {
      title: "Vacation stays",
      description: "Escape the bustle and rest in the tranquil environment of Pollachi countryside."
    },
    {
      title: "Corporate accommodation",
      description: "A premium private base for business executives seeking quiet and comfortable rooms."
    },
    {
      title: "Shooting discussion & accommodation",
      description: "Inspiring private rooms and open layouts perfect for creative planning and stays."
    },
    {
      title: "Peaceful long stays",
      description: "An ideal home-away-from-home setup with high-speed internet and power backup."
    },
    {
      title: "Weekend relaxation",
      description: "Reset over a couple of days in the fresh air and open lawns of our private estate."
    }
  ],

  // Image architecture - Central configuration to swap easily when real client photos are ready.
  // Using high-quality premium dark nature & boutique hotel style photography placeholders.
  gallery: [
    {
      id: "ext",
      src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
      alt: "Villa exterior and lush green landscaped architecture",
      category: "Exterior"
    },
    {
      id: "living",
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      alt: "Spacious luxury living and dining lounge",
      category: "Living Room"
    },
    {
      id: "bed",
      src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
      alt: "Elegant minimalist air-conditioned bedroom",
      category: "Bedroom"
    },
    {
      id: "dining",
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
      alt: "Warm minimalist dining setting with natural lighting",
      category: "Dining"
    },
    {
      id: "bath",
      src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80",
      alt: "Clean boutique attached bathroom with slate tiling",
      category: "Bathroom"
    },
    {
      id: "sitout",
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      alt: "Tranquil outdoor sitout overlooking green surroundings",
      category: "Outdoor"
    }
  ]
};

export default siteConfig;
