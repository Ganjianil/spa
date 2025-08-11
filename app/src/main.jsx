import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// SEO Meta Tags
document.title =
  "Zen Wellness Spa - Premium Spa & Massage Services | Therapeutic Treatments";

// Add meta tags for SEO
const metaTags = [
  {
    name: "description",
    content:
      "Experience ultimate relaxation at Zen Wellness Spa. Premium massage therapy, couple massage, body scrub, facial treatments, and detox packages. Book your spa session today!",
  },
  {
    name: "keywords",
    content:
      "spa, massage, wellness, relaxation, therapeutic massage, couple massage, body scrub, facial treatment, detox, aromatherapy, stress relief, rejuvenation, holistic wellness, spa services, massage therapy, beauty treatments",
  },
  { name: "author", content: "Zen Wellness Spa" },
  { name: "viewport", content: "width=device-width, initial-scale=1.0" },
  {
    property: "og:title",
    content: "Zen Wellness Spa - Premium Spa & Massage Services",
  },
  {
    property: "og:description",
    content:
      "Experience ultimate relaxation with our premium spa treatments, therapeutic massages, and wellness services. Book your session today!",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: "https://zenwellnessspa.com" },
  { name: "twitter:card", content: "summary_large_image" },
  {
    name: "twitter:title",
    content: "Zen Wellness Spa - Premium Spa & Massage Services",
  },
  {
    name: "twitter:description",
    content:
      "Experience ultimate relaxation with our premium spa treatments and therapeutic massages.",
  },
  { name: "robots", content: "index, follow" },
  { name: "language", content: "English" },
  { name: "revisit-after", content: "7 days" },
  { name: "distribution", content: "global" },
  { name: "rating", content: "general" },
];

metaTags.forEach((tag) => {
  const meta = document.createElement("meta");
  if (tag.name) meta.name = tag.name;
  if (tag.property) meta.property = tag.property;
  meta.content = tag.content;
  document.head.appendChild(meta);
});

// Add structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SpaOrBeautySalon",
  name: "Zen Wellness Spa",
  description:
    "Premium spa and wellness center offering therapeutic massages, beauty treatments, and relaxation services",
  url: "https://zenwellnessspa.com",
  telephone: "+91-98765-43210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Wellness Street",
    addressLocality: "City",
    addressRegion: "Karnataka",
    postalCode: "560001",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 10:00-20:00",
  priceRange: "₹₹",
  servedCuisine: [],
  hasMenu: [],
  acceptsReservations: true,
  amenityFeature: [
    "Steam Room",
    "Meditation Room",
    "Aromatherapy",
    "Relaxation Lounge",
    "Private Showers",
  ],
  paymentAccepted: "Cash, Credit Card, UPI, Net Banking",
};

const script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(structuredData);
document.head.appendChild(script);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
