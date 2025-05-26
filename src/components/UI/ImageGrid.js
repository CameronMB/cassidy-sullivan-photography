// src/components/UI/ImageGrid.js
export const ImageGrid = ({ filteredImages, setSelectedImage }) => {
    return React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    }, filteredImages.map((image, index) =>
      React.createElement("div", {
        key: image.id,
        className: "group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl bg-white/50 backdrop-blur-sm border border-teal-100",
        onClick: () => setSelectedImage(image),
        style: {
          animationDelay: `${index * 0.1}s`
        }
      },
        React.createElement("img", {
          src: image.src,
          alt: image.title,
          className: "w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        }),
        React.createElement("div", {
          className: "absolute inset-0 bg-gradient-to-t from-teal-900/70 via-cyan-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
        }),
        React.createElement("div", {
          className: "absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        },
          React.createElement("h3", {
            className: "font-semibold text-lg mb-1"
          }, image.title),
          React.createElement("p", {
            className: "text-sm text-gray-200"
          }, image.description)
        )
      )
    ));
  };