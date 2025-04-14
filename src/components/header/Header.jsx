import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Menu, X, ChevronRight, Code, User, Mail, Grid } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

function Header() {
  const [currentItem, setCurrentItem] = useState("Home")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

  const navItems = [
    { name: "Resume", slug: "/resume", icon: <User className="w-4 h-4" /> },
    { name: "Projects", slug: "/projects", icon: <Code className="w-4 h-4" /> },
    { name: "Contact", slug: "/contact", icon: <Mail className="w-4 h-4" /> },
  ]

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentSection = (item) => {
    if (item.name === "Resume") {
      window.open("/pdf/resume.pdf", "_blank") // Open PDF in new tab
    } else {
      navigate(item.slug)
    }
    setCurrentItem(item.name)
    setIsOpen(false)
  }

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } }
  }

  const logoVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  }

  const navItemVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (index) => ({ opacity: 1, y: 0, transition: { duration: 0.4, delay: index * 0.1 } }),
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  }

  // Individual pixel animation for the logo
  const pixelVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.3 }
    }),
    hover: (i) => ({
      y: Math.sin(i) * 5,
      transition: { 
        repeat: Infinity, 
        repeatType: "reverse", 
        duration: 0.5 + (i * 0.1) % 0.5 
      }
    })
  }

  // Pixel grid for logo
  const PixelLogo = () => {
    const pixelColors = [
      "bg-indigo-400", "bg-purple-400", "bg-indigo-300", 
      "bg-purple-300", "bg-indigo-500", "bg-purple-500"
    ]
    
    return (
      <div className="grid grid-cols-3 gap-0.5 mr-2">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={pixelVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className={`w-2 h-2 rounded-sm ${i % 2 === 0 ? pixelColors[i % pixelColors.length] : "bg-transparent"}`}
          />
        ))}
      </div>
    )
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-gradient-to-r from-indigo-900/90 to-purple-800/90 backdrop-blur-lg shadow-xl py-3" 
          : "bg-gradient-to-r from-indigo-700/80 to-purple-600/80 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="text-xl font-bold text-white cursor-pointer flex items-center"
            onClick={() => {
              navigate("/")
              setCurrentItem("Home")
            }}
          >
            <div className="flex items-center">
              <PixelLogo />
              <div className="flex items-baseline">
                <span className="text-cyan-300 mr-1">Pixel</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Perfect</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.slug}
                custom={index}
                variants={navItemVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                onClick={() => currentSection(item)}
                className="group relative"
              >
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  currentItem === item.name 
                    ? "bg-white/20 text-white" 
                    : "text-gray-100 hover:bg-white/10"
                }`}>
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                {currentItem === item.name && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 mx-auto w-12 h-1 bg-cyan-300 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="ml-2 px-5 py-2 bg-cyan-400 text-indigo-900 font-semibold rounded-full shadow-lg shadow-indigo-900/20 hover:bg-cyan-300 transition-all duration-300"
            >
              Hire Me
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:hidden"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-gradient-to-b from-indigo-900 to-purple-900 border-t border-indigo-500/30 shadow-2xl"
          >
            <div className="px-4 py-5 space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.slug}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  onClick={() => currentSection(item)}
                  className={`flex w-full items-center justify-between py-3 px-4 rounded-xl ${
                    currentItem === item.name
                      ? "text-white bg-white/20 shadow-inner"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <span className="bg-indigo-500/30 p-2 rounded-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${currentItem === item.name ? "text-cyan-300" : ""}`} />
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="w-full mt-4 py-3 px-4 bg-cyan-400 text-indigo-900 font-semibold rounded-xl shadow-lg shadow-indigo-900/20 hover:bg-cyan-300 transition-all duration-300"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header