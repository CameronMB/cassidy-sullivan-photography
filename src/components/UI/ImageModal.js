// src/components/UI/ImageModal.js
export const ImageModal = ({ selectedImage, setSelectedImage, filteredImages }) => {
    const navigateImage = (direction) => {
      if (!selectedImage) return;
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
      let newIndex;
      
      if (direction === 'next') {
        newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
      } else {
        newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
      }
      
      setSelectedImage(filteredImages[newIndex]);
    };
  
    if (!selectedImage) return null;
  
    return React.createElement("div", {
      className: "fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
    },
      React.createElement("div", {
        className: "relative max-w-5xl max-h-full"
      },
        React.createElement("button", {
          onClick: () => setSelectedImage(null),
          className: "absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        },
          React.createElement("svg", {
            className: "h-6 w-6 text-white",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor"
          },
            React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
            React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
          )
        ),
        React.createElement("button", {
          onClick: () => navigateImage('prev'),
          className: "absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        },
          React.createElement("svg", {
            className: "h-6 w-6 text-white",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor"
          },
            React.createElement("polyline", { points: "15,18 9,12 15,6" })
          )
        ),
        React.createElement("button", {
          onClick: () => navigateImage('next'),
          className: "absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
        },
          React.createElement("svg", {
            className: "h-6 w-6 text-white",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor"
          },
            React.createElement("polyline", { points: "9,18 15,12 9,6" })
          )
        ),
        React.createElement("img", {
          src: selectedImage.src,
          alt: selectedImage.title,
          className: "max-w-full max-h-full object-contain rounded-lg"
        }),
        React.createElement("div", {
          className: "absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm p-6 rounded-lg"
        },
          React.createElement("h3", {
            className: "text-white text-2xl font-semibold mb-2"
          }, selectedImage.title),
          React.createElement("p", {
            className: "text-gray-300"
          }, selectedImage.description)
        )
      )
    );
  };