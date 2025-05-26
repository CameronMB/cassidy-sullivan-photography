// src/components/Sections/HeroSection.js
export const HeroSection = ({ scrollY }) => {
    return React.createElement("section", {
      id: "home",
      className: "relative h-screen flex items-center justify-center overflow-hidden"
    },
      React.createElement("div", {
        className: "absolute inset-0 bg-cover bg-center bg-no-repeat",
        style: {
          backgroundImage: "url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&h=1080&fit=crop')",
          transform: `translateY(${scrollY * 0.5}px)`
        }
      }),
      React.createElement("div", {
        className: "absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-teal-900/40"
      }),
      React.createElement("div", {
        className: "relative z-10 text-center px-4 text-white"
      },
        React.createElement("h1", {
          className: "text-5xl md:text-7xl font-bold mb-6"
        }, "Cassidy Sullivan Photography"),
        React.createElement("p", {
          className: "text-xl md:text-2xl mb-4"
        }, "Equine • Wedding • Portrait Photography"),
        React.createElement("p", {
          className: "text-lg mb-8 max-w-2xl mx-auto"
        }, "Specializing in capturing the beauty of horses and the precious moments of life's most important celebrations"),
        React.createElement("div", {
          className: "flex flex-col sm:flex-row gap-4 justify-center"
        },
          React.createElement("a", {
            href: "#portfolio",
            className: "inline-block bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          }, "View My Work"),
          React.createElement("a", {
            href: "#contact",
            className: "inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors border border-white/40 hover:border-white/60"
          }, "Book a Session")
        )
      )
    );
  };