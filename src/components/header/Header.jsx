import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, Code, User, Mail, Grid, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navRef = useRef(null);

  const navItems = [
    { name: "About", slug: "/", icon: <User className="w-4 h-4" /> },
    { name: "Projects", slug: "/projects", icon: <Code className="w-4 h-4" /> },
    { name: "Resume", slug: "/resume", icon: <Grid className="w-4 h-4" /> },
    { name: "Contact", slug: "/contact", icon: <Mail className="w-4 h-4" /> },
  ];

  // Check if the current route matches the nav item
  const isActive = (path) => {
    return location.pathname === path;
  };

  // GSAP animations setup
  useEffect(() => {
    // Initial animation for header elements
    const tl = gsap.timeline();
    
    tl.fromTo(
      logoRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
    
    tl.fromTo(
      navRef.current.children,
      { y: -30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.5, 
        ease: "power2.out" 
      },
      "-=0.4"
    );

    // Header scroll effect
    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.progress > 0.05) {
          setScrolled(true);
          gsap.to(headerRef.current, {
            backgroundColor: "rgba(10, 10, 40, 0.95)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px -10px rgba(2, 12, 27, 0.15)",
            padding: "0.75rem 0",
            duration: 0.3
          });
        } else {
          setScrolled(false);
          gsap.to(headerRef.current, {
            backgroundColor: "rgba(10, 10, 40, 0.7)",
            backdropFilter: "blur(5px)",
            boxShadow: "none",
            padding: "1.25rem 0",
            duration: 0.3
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Handle navigation
  const handleNavigation = (item) => {
    if (item.name === "Resume") {
      window.open("/pdf/resume.pdf", "_blank");
    } else {
      navigate(item.slug);
      setIsOpen(false);
    }
  };

  // Logo hover animation
  const handleLogoHover = () => {
    gsap.to(".logo-pixel", {
      scale: (i) => 1.2 + (i % 3) * 0.2,
      stagger: 0.05,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleLogoLeave = () => {
    gsap.to(".logo-pixel", {
      scale: 1,
      stagger: 0.03,
      duration: 0.3,
      ease: "power2.inOut"
    });
  };

  // Pixel logo component
  const PixelLogo = () => {
    const pixelColors = [
      "bg-teal-400", "bg-emerald-400", "bg-teal-300", 
      "bg-sky-400", "bg-teal-500", "bg-emerald-500"
    ];
    
    return (
      <div className="grid grid-cols-3 gap-0.5 mr-2">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className={`logo-pixel w-2 h-2 rounded-sm transition-all duration-200 ${
              i % 2 === 0 ? pixelColors[i % pixelColors.length] : "bg-transparent"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-slate-900/95 backdrop-blur-lg shadow-lg" 
          : "py-5 bg-slate-900/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            ref={logoRef}
            className="text-xl font-bold text-white cursor-pointer flex items-center"
            onClick={() => {
              navigate("/")
              setIsOpen(false)
            }}
            onMouseEnter={handleLogoHover}
            onMouseLeave={handleLogoLeave}
          >
            <div className="flex items-center">
              <PixelLogo />
              <div className="flex items-baseline">
                <span className="text-teal-400 mr-1">Pixel</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">Perfect</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <button
                key={item.slug}
                onClick={() => handleNavigation(item)}
                className="group relative"
              >
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive(item.slug) 
                    ? "bg-teal-400/20 text-teal-400" 
                    : "text-gray-300 hover:text-teal-400 hover:bg-teal-400/10"
                }`}>
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                {isActive(item.slug) && (
                  <div
                    className="absolute -bottom-1 left-0 right-0 mx-auto w-12 h-1 bg-teal-400 rounded-full"
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => window.open("mailto:robinsr889@gmail.com", "_blank")}
              className="ml-2 px-5 py-2 bg-teal-500 text-slate-900 font-semibold rounded-full shadow-lg shadow-teal-500/20 hover:bg-teal-400 transition-all duration-300 flex items-center gap-2"
            >
              <span>Hire Me</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div
                className="transition-all duration-300"
                style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0)' }}
              >
                {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-5 space-y-3">
          {navItems.map((item, index) => (
            <button
              key={item.slug}
              onClick={() => handleNavigation(item)}
              className={`flex w-full items-center justify-between py-3 px-4 rounded-xl transition-all duration-200 ${
                isActive(item.slug)
                  ? "text-teal-400 bg-teal-400/10 shadow-inner"
                  : "text-gray-300 hover:text-teal-400 hover:bg-teal-400/5"
              }`}
            >
              <span className="flex items-center space-x-3">
                <span className="bg-slate-800/80 p-2 rounded-lg">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </span>
              <ChevronRight className={`h-4 w-4 transition-transform ${isActive(item.slug) ? "text-teal-400" : ""}`} />
            </button>
          ))}
          <button
            onClick={() => window.open("mailto:robinsr889@gmail.com", "_blank")}
            className="w-full mt-4 py-3 px-4 bg-teal-500 text-slate-900 font-semibold rounded-xl shadow-lg shadow-teal-500/20 hover:bg-teal-400 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Hire Me</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;