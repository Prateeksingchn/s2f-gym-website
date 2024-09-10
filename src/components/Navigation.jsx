import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Menu, X } from "lucide-react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Classes", "Facilities", "Trainers", "Membership"];

  return (
    <header
      className={`fixed w-full px-10 z-[2000] transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 transition-all duration-300 ${
          isScrolled
            ? "bg-white/40 shadow-lg backdrop-blur-md"
            : "bg-transparent"
        } rounded-full`}
      >
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform rotate-45 transition-all duration-300 group-hover:rotate-[225deg]"></div>
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    isScrolled ? "text-gray-800" : "text-white"
                  } transition-all duration-300`}
                >
                  <Dumbbell size={24} />
                </div>
              </div>
              <span
                className={`text-xl sm:text-2xl font-extrabold ${
                  isScrolled ? "text-gray-800" : "text-white"
                } tracking-tight transition-colors duration-300`}
              >
                S2F
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <motion.div
              className="flex items-center space-x-1"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-2 sm:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:text-purple-600"
                      : "text-gray-200 hover:text-white"
                  } hover:bg-white/10`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Join Now Button (Desktop) */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="#"
              className={`inline-flex items-center px-3 sm:px-4 py-2 border border-transparent text-sm font-medium rounded-full ${
                isScrolled
                  ? "text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  : "text-purple-600 bg-white hover:bg-gray-100"
              } transition-all duration-300 shadow-md hover:shadow-lg`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleNav}
              className={`inline-flex items-center justify-center p-1 sm:p-2 rounded-md ${
                isScrolled
                  ? "text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  : "text-gray-200 hover:text-white hover:bg-white/10"
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-colors duration-300`}
              aria-expanded="false"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Toggle menu</span>
              {navOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`px-2 pt-2 pb-3 space-y-1 ${
                isScrolled
                  ? "bg-white/90 backdrop-blur-md"
                  : "bg-gray-900/90 backdrop-blur-md"
              } mt-2 rounded-2xl mx-2 sm:mx-4`}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isScrolled
                      ? "text-gray-700 hover:text-purple-600 hover:bg-gray-100/50"
                      : "text-gray-300 hover:text-white hover:bg-gray-700/50"
                  } transition-colors duration-300`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
              {/* Join Now Button (Mobile) */}
              <motion.a
                href="#"
                className={`block w-full px-3 py-2 text-center font-medium rounded-md ${
                  isScrolled
                    ? "text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    : "text-purple-600 bg-white hover:bg-gray-100"
                } transition-colors duration-300 mt-4`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;