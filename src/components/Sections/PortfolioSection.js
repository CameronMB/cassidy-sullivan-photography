// src/components/Sections/PortfolioSection.js
import { CategoryFilter } from '../UI/CategoryFilter.js';
import { ImageGrid } from '../UI/ImageGrid.js';

export const PortfolioSection = ({ 
  currentCategory, 
  setCurrentCategory, 
  filteredImages, 
  setSelectedImage 
}) => {
  return React.createElement("section", {
    id: "portfolio",
    className: "py-20 bg-gradient-to-b from-white via-slate-25 to-gray-50"
  },
    React.createElement("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    },
      React.createElement("h2", {
        className: "text-4xl font-bold text-center mb-6"
      }, "Portfolio"),
      React.createElement("p", {
        className: "text-gray-600 text-center mb-12 max-w-2xl mx-auto"
      }, "From the elegance of equine photography to the joy of life's special moments, each image tells a unique story."),
      
      React.createElement(CategoryFilter, {
        currentCategory: currentCategory,
        setCurrentCategory: setCurrentCategory
      }),

      React.createElement(ImageGrid, {
        filteredImages: filteredImages,
        setSelectedImage: setSelectedImage
      })
    )
  );
};