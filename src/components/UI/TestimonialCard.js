// src/components/UI/TestimonialCard.js
export const TestimonialCard = ({ testimonial }) => {
    return React.createElement("div", {
      className: "bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-teal-200 hover:shadow-xl transition-all duration-300"
    },
      React.createElement("div", {
        className: "flex items-center mb-4"
      }, [...Array(testimonial.rating)].map((_, i) =>
        React.createElement("svg", {
          key: i,
          className: "h-5 w-5 text-yellow-400 fill-current",
          viewBox: "0 0 24 24"
        },
          React.createElement("polygon", {
            points: "12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
          })
        )
      )),
      React.createElement("p", {
        className: "text-gray-700 mb-4 italic"
      }, `"${testimonial.text}"`),
      React.createElement("div", null,
        React.createElement("div", {
          className: "font-semibold text-gray-900"
        }, testimonial.name),
        React.createElement("div", {
          className: "text-sm text-gray-600"
        }, testimonial.type)
      )
    );
  };