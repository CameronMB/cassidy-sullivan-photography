// src/components/UI/ServiceCard.js
export const ServiceCard = ({ service }) => {
    return React.createElement("div", {
      className: "bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-teal-100 hover:border-teal-200"
    },
      React.createElement("h3", {
        className: "text-2xl font-bold mb-4 text-gray-800"
      }, service.title),
      React.createElement("p", {
        className: "text-gray-600 mb-6"
      }, service.description),
      React.createElement("div", {
        className: "text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent mb-6"
      }, service.price),
      React.createElement("ul", {
        className: "space-y-2"
      }, service.features.map((feature, featureIndex) =>
        React.createElement("li", {
          key: featureIndex,
          className: "flex items-center text-gray-700"
        },
          React.createElement("div", {
            className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
          }),
          feature
        )
      ))
    );
  };