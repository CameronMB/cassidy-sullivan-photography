// src/components/Sections/ServicesSection.js
import { ServiceCard } from '../UI/ServiceCard.js';
import { services } from '../../data/services.js';

export const ServicesSection = () => {
  return React.createElement("section", {
    id: "services",
    className: "py-20 bg-gradient-to-b from-gray-50 via-white to-slate-50"
  },
    React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    },
      React.createElement("h2", {
        className: "text-4xl font-bold text-center mb-6"
      }, "Services & Pricing"),
      React.createElement("p", {
        className: "text-gray-600 text-center mb-12 max-w-2xl mx-auto"
      }, "Professional photography services tailored to capture your most precious moments"),
      
      React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-2 gap-8"
      }, services.map((service, index) =>
        React.createElement(ServiceCard, {
          key: index,
          service: service
        })
      ))
    )
  );
};