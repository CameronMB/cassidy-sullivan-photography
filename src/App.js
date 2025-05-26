// src/App.js - Properly loading all modular components
const { useState, useEffect } = React;

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  const [components, setComponents] = useState({});
  const [data, setData] = useState({});

  // Scroll hook
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load all components and data
  useEffect(() => {
    const loadAllModules = async () => {
      try {
        // Load all data files
        const [
          portfolioImagesModule,
          categoriesModule,
          servicesModule,
          testimonialsModule
        ] = await Promise.all([
          import('./data/portfolioImages.js'),
          import('./data/categories.js'),
          import('./data/services.js'),
          import('./data/testimonials.js')
        ]);

        // Load all component files
        const [
          navigationModule,
          footerModule,
          heroSectionModule,
          portfolioSectionModule,
          servicesSectionModule,
          testimonialsSectionModule,
          aboutSectionModule,
          contactSectionModule,
          imageModalModule,
          categoryFilterModule,
          imageGridModule,
          serviceCardModule,
          testimonialCardModule,
          contactFormModule
        ] = await Promise.all([
          import('./components/Layout/Navigation.js'),
          import('./components/Layout/Footer.js'),
          import('./components/Sections/HeroSection.js'),
          import('./components/Sections/PortfolioSection.js'),
          import('./components/Sections/ServicesSection.js'),
          import('./components/Sections/TestimonialsSection.js'),
          import('./components/Sections/AboutSection.js'),
          import('./components/Sections/ContactSection.js'),
          import('./components/UI/ImageModal.js'),
          import('./components/UI/CategoryFilter.js'),
          import('./components/UI/ImageGrid.js'),
          import('./components/UI/ServiceCard.js'),
          import('./components/UI/TestimonialCard.js'),
          import('./components/Forms/ContactForm.js')
        ]);

        // Store all loaded modules
        setData({
          portfolioImages: portfolioImagesModule.portfolioImages,
          categories: categoriesModule.categories,
          services: servicesModule.services,
          testimonials: testimonialsModule.testimonials
        });

        setComponents({
          Navigation: navigationModule.Navigation,
          Footer: footerModule.Footer,
          HeroSection: heroSectionModule.HeroSection,
          PortfolioSection: portfolioSectionModule.PortfolioSection,
          ServicesSection: servicesSectionModule.ServicesSection,
          TestimonialsSection: testimonialsSectionModule.TestimonialsSection,
          AboutSection: aboutSectionModule.AboutSection,
          ContactSection: contactSectionModule.ContactSection,
          ImageModal: imageModalModule.ImageModal,
          CategoryFilter: categoryFilterModule.CategoryFilter,
          ImageGrid: imageGridModule.ImageGrid,
          ServiceCard: serviceCardModule.ServiceCard,
          TestimonialCard: testimonialCardModule.TestimonialCard,
          ContactForm: contactFormModule.ContactForm
        });

        setComponentsLoaded(true);
      } catch (error) {
        console.error('Error loading modules:', error);
        // Fallback: use the working version if modules fail to load
        setComponentsLoaded(true);
      }
    };

    loadAllModules();
  }, []);

  // Filter images based on current category
  const filteredImages = data.portfolioImages && currentCategory === 'all' 
    ? data.portfolioImages 
    : data.portfolioImages?.filter(img => img.category === currentCategory) || [];

  // Show loading state while components load
  if (!componentsLoaded) {
    return React.createElement("div", {
      className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100"
    },
      React.createElement("div", {
        className: "text-center"
      },
        React.createElement("div", {
          className: "animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600 mx-auto mb-4"
        }),
        React.createElement("h2", {
          className: "text-2xl font-bold text-gray-800 mb-2"
        }, "Loading Cassidy Sullivan Photography"),
        React.createElement("p", {
          className: "text-gray-600"
        }, "Preparing your experience...")
      )
    );
  }

  // If components loaded successfully, use them
  if (components.Navigation && data.portfolioImages) {
    return React.createElement("div", {
      className: "min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 text-gray-900"
    },
      React.createElement(components.Navigation, {
        scrollY: scrollY,
        isMenuOpen: isMenuOpen,
        setIsMenuOpen: setIsMenuOpen
      }),
      
      React.createElement(components.HeroSection, {
        scrollY: scrollY
      }),
      
      React.createElement(components.PortfolioSection, {
        currentCategory: currentCategory,
        setCurrentCategory: setCurrentCategory,
        filteredImages: filteredImages,
        setSelectedImage: setSelectedImage
      }),
      
      React.createElement(components.ServicesSection),
      
      React.createElement(components.TestimonialsSection),
      
      React.createElement(components.AboutSection),
      
      React.createElement(components.ContactSection),
      
      React.createElement(components.Footer),

      React.createElement(components.ImageModal, {
        selectedImage: selectedImage,
        setSelectedImage: setSelectedImage,
        filteredImages: filteredImages
      })
    );
  }

  // Fallback: If module loading fails, use inline components (what we had working)
  const portfolioImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&h=600&fit=crop",
      category: "equine",
      title: "Arabian Beauty",
      description: "Capturing the grace and power of these magnificent creatures"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      category: "equine",
      title: "Golden Hour Ride",
      description: "The perfect bond between horse and rider"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      category: "equine",
      title: "Morning Training",
      description: "Early morning sessions in the arena"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
      category: "couples",
      title: "Engagement Session",
      description: "Capturing love stories in beautiful settings"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
      category: "couples",
      title: "Anniversary Celebration",
      description: "Commemorating years of love and happiness"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      category: "weddings",
      title: "Wedding Day Joy",
      description: "The most important day of their lives"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'equine', name: 'Equine' },
    { id: 'couples', name: 'Couples' },
    { id: 'weddings', name: 'Weddings' },
    { id: 'family', name: 'Family' },
    { id: 'senior', name: 'Senior' },
    { id: 'prom', name: 'Prom' },
    { id: 'pets', name: 'Pets' }
  ];

  const fallbackFilteredImages = currentCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === currentCategory);

  return React.createElement("div", {
    className: "min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 text-gray-900"
  },
    // Navigation (fallback inline version)
    React.createElement("nav", {
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
          )
        )
      )
    ),
    
    // Hero Section (fallback)
    React.createElement("section", {
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
    ),
    
    // Portfolio Section (fallback)
    React.createElement("section", {
      id: "portfolio",
      className: "py-20 bg-gradient-to-b from-white via-slate-25 to-gray-50"
    },
      React.createElement("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      },
        React.createElement("h2", {
          className: "text-4xl font-bold text-center mb-6"
        }, "Portfolio"),
        React.createElement("p", {
          className: "text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        }, "From the elegance of equine photography to the joy of life's special moments, each image tells a unique story."),
        
        // Category Filter
        React.createElement("div", {
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
        )),

        // Image Grid
        React.createElement("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        }, fallbackFilteredImages.map((image, index) =>
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
        ))
      )
    ),

    // Simple About Section
    React.createElement("section", {
      id: "about",
      className: "py-20 bg-white"
    },
      React.createElement("div", {
        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      },
        React.createElement("h2", {
          className: "text-4xl font-bold mb-6"
        }, "About Cassidy"),
        React.createElement("p", {
          className: "text-gray-600 text-lg leading-relaxed mb-8"
        }, "With over 6 years of experience in photography, I specialize in equine photography and life's most precious moments. My passion for horses began in childhood, and combining that love with photography has been a dream come true."),
        React.createElement("a", {
          href: "#contact",
          className: "inline-block bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        }, "Let's Work Together")
      )
    ),

    // Services Section
    React.createElement("section", {
      id: "services",
      className: "py-20 bg-gradient-to-b from-gray-50 via-white to-slate-50"
    },
      React.createElement("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      },
        React.createElement("h2", {
          className: "text-4xl font-bold text-center mb-6"
        }, "Services & Pricing"),
        React.createElement("p", {
          className: "text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        }, "Professional photography services tailored to capture your most precious moments"),
        
        React.createElement("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8"
        },
          // Equine Photography Service
          React.createElement("div", {
            className: "bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-teal-100 hover:border-teal-200"
          },
            React.createElement("h3", {
              className: "text-2xl font-bold mb-4 text-gray-800"
            }, "Equine Photography"),
            React.createElement("p", {
              className: "text-gray-600 mb-6"
            }, "Specializing in capturing the beauty, grace, and spirit of horses. From competition shots to intimate portraits of the bond between horse and rider."),
            React.createElement("div", {
              className: "text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent mb-6"
            }, "Starting at $350"),
            React.createElement("ul", {
              className: "space-y-2"
            },
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Individual horse portraits"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Horse & rider sessions"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Competition photography"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Stable lifestyle shots"
              )
            )
          ),

          // Wedding Photography Service
          React.createElement("div", {
            className: "bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-teal-100 hover:border-teal-200"
          },
            React.createElement("h3", {
              className: "text-2xl font-bold mb-4 text-gray-800"
            }, "Wedding Photography"),
            React.createElement("p", {
              className: "text-gray-600 mb-6"
            }, "Documenting your special day with a blend of candid moments and stunning portraits that tell your unique love story."),
            React.createElement("div", {
              className: "text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent mb-6"
            }, "Starting at $1,200"),
            React.createElement("ul", {
              className: "space-y-2"
            },
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Full day coverage"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Engagement session"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Online gallery"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Print release included"
              )
            )
          ),

          // Family & Couples Service
          React.createElement("div", {
            className: "bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-teal-100 hover:border-teal-200"
          },
            React.createElement("h3", {
              className: "text-2xl font-bold mb-4 text-gray-800"
            }, "Family & Couples"),
            React.createElement("p", {
              className: "text-gray-600 mb-6"
            }, "Creating beautiful memories for families and couples at any stage of life, from engagements to growing families."),
            React.createElement("div", {
              className: "text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent mb-6"
            }, "Starting at $250"),
            React.createElement("ul", {
              className: "space-y-2"
            },
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "1-2 hour session"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Multiple outfit changes"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Online gallery"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Print options available"
              )
            )
          ),

          // Senior & Prom Service
          React.createElement("div", {
            className: "bg-white/70 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-teal-100 hover:border-teal-200"
          },
            React.createElement("h3", {
              className: "text-2xl font-bold mb-4 text-gray-800"
            }, "Senior & Prom"),
            React.createElement("p", {
              className: "text-gray-600 mb-6"
            }, "Celebrating important milestones with professional portraits that capture personality and achievements."),
            React.createElement("div", {
              className: "text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-700 bg-clip-text text-transparent mb-6"
            }, "Starting at $200"),
            React.createElement("ul", {
              className: "space-y-2"
            },
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "1 hour session"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Outfit changes"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Multiple locations"
              ),
              React.createElement("li", {
                className: "flex items-center text-gray-700"
              },
                React.createElement("div", {
                  className: "w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full mr-3"
                }),
                "Social media ready images"
              )
            )
          )
        )
      )
    ),

    // Contact Section
    React.createElement("section", {
      id: "contact",
      className: "py-20 bg-gray-900 text-white"
    },
      React.createElement("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      },
        React.createElement("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-12"
        },
          React.createElement("div", null,
            React.createElement("h2", {
              className: "text-4xl font-bold mb-6"
            }, "Let's Create Something Beautiful"),
            React.createElement("p", {
              className: "text-gray-300 text-lg mb-8"
            }, "Ready to book your session? I'd love to hear about your vision and discuss how we can capture your special moments together."),
            
            React.createElement("div", {
              className: "space-y-4 mb-8"
            },
              React.createElement("div", {
                className: "flex items-center space-x-3"
              },
                React.createElement("svg", {
                  className: "h-6 w-6 text-teal-400",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor"
                },
                  React.createElement("path", {
                    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                  })
                ),
                React.createElement("span", null, "(606) 922-6307")
              ),
              React.createElement("div", {
                className: "flex items-center space-x-3"
              },
                React.createElement("svg", {
                  className: "h-6 w-6 text-teal-400",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor"
                },
                  React.createElement("path", {
                    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                  }),
                  React.createElement("polyline", { points: "22,6 12,13 2,6" })
                ),
                React.createElement("span", null, "cassidy@cassidysullivanphotography.com")
              ),
              React.createElement("div", {
                className: "flex items-center space-x-3"
              },
                React.createElement("svg", {
                  className: "h-6 w-6 text-teal-400",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor"
                },
                  React.createElement("path", {
                    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                  }),
                  React.createElement("circle", { cx: "12", cy: "10", r: "3" })
                ),
                React.createElement("span", null, "Based in Lexington, KY • Serving Kentucky & surrounding areas")
              )
            ),

            React.createElement("div", {
              className: "flex space-x-4"
            },
              React.createElement("svg", {
                className: "h-8 w-8 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors",
                viewBox: "0 0 24 24",
                fill: "currentColor"
              },
                React.createElement("path", {
                  d: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"
                })
              ),
              React.createElement("svg", {
                className: "h-8 w-8 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors",
                viewBox: "0 0 24 24",
                fill: "currentColor"
              },
                React.createElement("path", {
                  d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                })
              ),
              React.createElement("svg", {
                className: "h-8 w-8 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor"
              },
                React.createElement("path", {
                  d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                }),
                React.createElement("polyline", { points: "22,6 12,13 2,6" })
              )
            )
          ),

          // Contact Form (Fixed styling)
          React.createElement("div", {
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
                className: "w-full px-4 py-3 rounded-lg bg-gray-800 border border-white/20 text-white focus:outline-none focus:border-teal-400",
                style: { color: 'white', backgroundColor: '#1f2937' }
              },
                React.createElement("option", { 
                  value: "",
                  style: { color: 'white', backgroundColor: '#1f2937' }
                }, "Select Service Type"),
                React.createElement("option", { 
                  value: "equine",
                  style: { color: 'white', backgroundColor: '#1f2937' }
                }, "Equine Photography"),
                React.createElement("option", { 
                  value: "wedding",
                  style: { color: 'white', backgroundColor: '#1f2937' }
                }, "Wedding Photography"),
                React.createElement("option", { 
                  value: "couples",
                  style: { color: 'white', backgroundColor: '#1f2937' }
                }, "Couples Session"),
                React.createElement("option", { 
                  value: "family",
                  style: { color: 'white', backgroundColor: '#1f2937' }
                }, "Family Photography"),
                React.createElement("option", { 
                  value: "senior",
                  style: { color: 'white', backgroundColor: '#1f2937' }
                }, "Senior Portraits"),
                React.createElement("option", { 
                  value: "prom",
                  style: { color: 'white', backgroundColor: '#1f2937' }
                }, "Prom Photography"),
                React.createElement("option", { 
                  value: "pets",
                  style: { color: 'white', backgroundColor: '#1f2937' }
                }, "Pet Photography")
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
          )
        )
      )
    ),

    // Image Modal
    selectedImage && React.createElement("div", {
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
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));