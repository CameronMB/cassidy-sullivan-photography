// src/components/Layout/Footer.js
export const Footer = () => {
    return React.createElement("footer", {
      className: "bg-black py-8"
    },
      React.createElement("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      },
        React.createElement("div", {
          className: "flex justify-center space-x-6 mb-4"
        },
          React.createElement("svg", {
            className: "h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors",
            viewBox: "0 0 24 24",
            fill: "currentColor"
          },
            React.createElement("path", {
              d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"
            })
          ),
          React.createElement("svg", {
            className: "h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors",
            viewBox: "0 0 24 24",
            fill: "currentColor"
          },
            React.createElement("path", {
              d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            })
          ),
          React.createElement("svg", {
            className: "h-6 w-6 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor"
          },
            React.createElement("path", {
              d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            }),
            React.createElement("polyline", { points: "22,6 12,13 2,6" })
          )
        ),
        React.createElement("p", {
          className: "text-gray-400"
        }, "© 2025 Cassidy Sullivan Photography. All rights reserved.")
      )
    );
  };