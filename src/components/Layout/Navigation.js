// src/components/Layout/Navigation.js
export const Navigation = ({ scrollY, isMenuOpen, setIsMenuOpen }) => {
    return React.createElement("nav", {
      className: `fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-teal-100' : 'bg-white/70 backdrop-blur-sm'
      }`
    },
      React.createElement("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      },
        React.createElement("div", {
          className: "flex justify-between items-center h-16"
        },
          React.createElement("div", {
            className: "flex items-center space-x-2"
          },
            React.createElement("svg", {
              className: "h-8 w-8 text-teal-600",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor"
            },
              React.createElement("path", {
                d: "m9 9 3-3m0 0 3 3m-3-3v13"
              }),
              React.createElement("path", {
                d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
              })
            ),
            React.createElement("span", {
              className: "text-xl font-bold text-gray-800 tracking-wide"
            }, "Cassidy Sullivan Photography")
          ),
          
          // Desktop Menu
          React.createElement("div", {
            className: "hidden md:flex space-x-8"
          },
            React.createElement("a", {
              href: "#home",
              className: "text-gray-600 hover:text-teal-600 transition-colors font-medium"
            }, "Home"),
            React.createElement("a", {
              href: "#portfolio",
              className: "text-gray-600 hover:text-teal-600 transition-colors font-medium"
            }, "Portfolio"),
            React.createElement("a", {
              href: "#services",
              className: "text-gray-600 hover:text-teal-600 transition-colors font-medium"
            }, "Services"),
            React.createElement("a", {
              href: "#about",
              className: "text-gray-600 hover:text-teal-600 transition-colors font-medium"
            }, "About"),
            React.createElement("a", {
              href: "#contact",
              className: "text-gray-600 hover:text-teal-600 transition-colors font-medium"
            }, "Contact")
          ),
  
          // Mobile Menu Button
          React.createElement("button", {
            onClick: () => setIsMenuOpen(!isMenuOpen),
            className: "md:hidden text-gray-900"
          },
            isMenuOpen 
              ? React.createElement("svg", {
                  className: "h-6 w-6",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor"
                },
                  React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                  React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                )
              : React.createElement("svg", {
                  className: "h-6 w-6",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor"
                },
                  React.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
                  React.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
                  React.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
                )
          )
        )
      ),
  
      // Mobile Menu
      isMenuOpen && React.createElement("div", {
        className: "md:hidden bg-white/95 backdrop-blur-md border-t border-teal-100"
      },
        React.createElement("div", {
          className: "px-2 pt-2 pb-3 space-y-1"
        },
          React.createElement("a", {
            href: "#home",
            className: "block px-3 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium"
          }, "Home"),
          React.createElement("a", {
            href: "#portfolio",
            className: "block px-3 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium"
          }, "Portfolio"),
          React.createElement("a", {
            href: "#services",
            className: "block px-3 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium"
          }, "Services"),
          React.createElement("a", {
            href: "#about",
            className: "block px-3 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium"
          }, "About"),
          React.createElement("a", {
            href: "#contact",
            className: "block px-3 py-2 text-gray-600 hover:bg-teal-50 hover:text-teal-600 rounded-md font-medium"
          }, "Contact")
        )
      )
    );
  };