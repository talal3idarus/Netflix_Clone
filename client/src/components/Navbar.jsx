import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Navigation bar component with responsive design and scroll effects
 * Features search functionality and user menu
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'TV Shows', href: '#tv-shows' },
    { name: 'Movies', href: '#movies' },
    { name: 'New & Popular', href: '#new-popular' },
    { name: 'My List', href: '#my-list' },
  ];

  return (
    <motion.nav
      className={`navbar-fixed fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-netflix-black/95 backdrop-blur-sm shadow-lg'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <motion.h1
              className="text-netflix-red text-2xl font-bold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 bg-netflix-red rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              NETFLIX
            </motion.h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Search and User Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <motion.button
              className="text-white hover:text-gray-300 transition-colors duration-200"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </motion.button>

            {/* Search Input */}
            {isSearchOpen && (
              <motion.input
                type="text"
                placeholder="Search movies, TV shows..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-black/50 text-white placeholder-gray-400 px-3 py-1 rounded-md border border-gray-600 focus:border-netflix-red focus:outline-none transition-colors duration-200"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 200 }}
                transition={{ duration: 0.3 }}
                autoFocus
              />
            )}

            {/* User Avatar */}
            <motion.div
              className="w-8 h-8 rounded-full bg-netflix-red flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-white text-sm font-semibold">U</span>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden border-t border-gray-800 py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium py-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
