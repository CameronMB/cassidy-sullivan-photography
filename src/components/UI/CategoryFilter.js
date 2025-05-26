// src/components/UI/CategoryFilter.js
import { categories } from '../../data/categories.js';

export const CategoryFilter = ({ currentCategory, setCurrentCategory }) => {
  return React.createElement("div", {
    className: "flex flex-wrap justify-center gap-3 mb-12"
  }, categories.map(category =>
    React.createElement("button", {
      key: category.id,
      onClick: () => setCurrentCategory(category.id),
      className: `px-6 py-2 rounded-full transition-all text-sm font-medium ${
        currentCategory === category.id
          ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg transform scale-105'
          : 'bg-white/80 text-gray-700 hover:bg-teal-50 hover:text-teal-600 border border-teal-200 hover:border-teal-300 backdrop-blur-sm'
      }`
    }, category.name)
  ));
};