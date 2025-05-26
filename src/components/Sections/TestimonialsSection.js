// src/components/Sections/TestimonialsSection.js
import { TestimonialCard } from '../UI/TestimonialCard.js';
import { testimonials } from '../../data/testimonials.js';

export const TestimonialsSection = () => {
  return React.createElement("section", {
    className: "py-20 bg-gradient-to-r from-slate-100 via-gray-50 to-slate-100"
  },
    React.createElement("div", {
      className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    },
      React.createElement("h2", {
        className: "text-4xl font-bold text-center mb-12"
      }, "What Clients Say"),
      
      React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-8"
      }, testimonials.map((testimonial, index) =>
        React.createElement(TestimonialCard, {
          key: index,
          testimonial: testimonial
        })
      ))
    )
  );
};