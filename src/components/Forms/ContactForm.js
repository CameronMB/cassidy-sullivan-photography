// src/components/Forms/ContactForm.js
export const ContactForm = () => {
    return React.createElement("div", {
      className: "bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30"
    },
      React.createElement("h3", {
        className: "text-2xl font-bold mb-6"
      }, "Get in Touch"),
      React.createElement("form", {
        className: "space-y-6"
      },
        React.createElement("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4"
        },
          React.createElement("input", {
            type: "text",
            placeholder: "First Name",
            className: "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-teal-400"
          }),
          React.createElement("input", {
            type: "text",
            placeholder: "Last Name",
            className: "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-teal-400"
          })
        ),
        React.createElement("input", {
          type: "email",
          placeholder: "Email Address",
          className: "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-teal-400"
        }),
        React.createElement("select", {
          className: "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-teal-400"
        },
          React.createElement("option", { value: "" }, "Select Service Type"),
          React.createElement("option", { value: "equine" }, "Equine Photography"),
          React.createElement("option", { value: "wedding" }, "Wedding Photography"),
          React.createElement("option", { value: "couples" }, "Couples Session"),
          React.createElement("option", { value: "family" }, "Family Photography"),
          React.createElement("option", { value: "senior" }, "Senior Portraits"),
          React.createElement("option", { value: "prom" }, "Prom Photography"),
          React.createElement("option", { value: "pets" }, "Pet Photography")
        ),
        React.createElement("textarea", {
          placeholder: "Tell me about your vision...",
          rows: "4",
          className: "w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-teal-400 resize-none"
        }),
        React.createElement("button", {
          type: "submit",
          className: "w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
        }, "Send Message")
      )
    );
  };