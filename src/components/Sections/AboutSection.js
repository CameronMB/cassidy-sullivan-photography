// src/components/Sections/AboutSection.js
export const AboutSection = () => {
    return React.createElement("section", {
      id: "about",
      className: "py-20 bg-white"
    },
      React.createElement("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      },
        React.createElement("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        },
          React.createElement("div", null,
            React.createElement("img", {
              src: "https://images.unsplash.com/photo-1494790108755-2616c95d88e8?w=600&h=700&fit=crop",
              alt: "About the photographer",
              className: "rounded-2xl shadow-2xl"
            })
          ),
          React.createElement("div", null,
            React.createElement("h2", {
              className: "text-4xl font-bold mb-6"
            }, "About Cassidy"),
            React.createElement("p", {
              className: "text-gray-600 text-lg leading-relaxed mb-6"
            }, "With over 6 years of experience in photography, I specialize in equine photography and life's most precious moments. My passion for horses began in childhood, and combining that love with photography has been a dream come true."),
            React.createElement("p", {
              className: "text-gray-600 text-lg leading-relaxed mb-6"
            }, "Whether capturing the powerful grace of a horse in motion, the joy of a wedding day, or the warmth of a family gathering, I strive to create images that tell your unique story and preserve memories you'll treasure forever."),
            React.createElement("div", {
              className: "grid grid-cols-3 gap-6 mb-8"
            },
              React.createElement("div", {
                className: "text-center"
              },
                React.createElement("div", {
                  className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent"
                }, "200+"),
                React.createElement("div", {
                  className: "text-gray-600"
                }, "Happy Clients")
              ),
              React.createElement("div", {
                className: "text-center"
              },
                React.createElement("div", {
                  className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent"
                }, "50+"),
                React.createElement("div", {
                  className: "text-gray-600"
                }, "Weddings")
              ),
              React.createElement("div", {
                className: "text-center"
              },
                React.createElement("div", {
                  className: "text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent"
                }, "6+"),
                React.createElement("div", {
                  className: "text-gray-600"
                }, "Years Experience")
              )
            ),
            React.createElement("a", {
              href: "#contact",
              className: "inline-block bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            }, "Let's Work Together")
          )
        )
      )
    );
  };