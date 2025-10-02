import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import moviesData from '../data/movies.json';

/**
 * Hero banner component featuring the main movie/show
 * Features autoplay functionality and call-to-action buttons
 */
const Hero = () => {
  const [currentMovie, setCurrentMovie] = useState(moviesData.featured);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-rotate featured content (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      const featuredMovies = moviesData.categories[0].movies;
      const randomIndex = Math.floor(Math.random() * featuredMovies.length);
      setCurrentMovie(featuredMovies[randomIndex]);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    // In a real app, this would start video playback
    setTimeout(() => setIsPlaying(false), 3000);
  };

  const handleAddToList = () => {
    // In a real app, this would add to user's list
    console.log('Added to list:', currentMovie.title);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentMovie.backdrop || currentMovie.poster}
          alt={currentMovie.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 netflix-gradient" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Movie Title */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {currentMovie.title}
            </motion.h1>

            {/* Movie Info */}
            <motion.div
              className="flex items-center space-x-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="bg-netflix-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                {currentMovie.rating}
              </span>
              <span className="text-gray-300 text-lg">{currentMovie.year}</span>
              {currentMovie.duration && (
                <span className="text-gray-300 text-lg">{currentMovie.duration}</span>
              )}
            </motion.div>

            {/* Movie Overview */}
            <motion.p
              className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed line-clamp-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {currentMovie.overview}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.button
                onClick={handlePlay}
                className="bg-white text-black font-bold px-8 py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>{isPlaying ? 'Playing...' : 'Play'}</span>
              </motion.button>

              <motion.button
                onClick={handleAddToList}
                className="bg-gray-600/80 text-white font-bold px-8 py-3 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-500/80 transition-colors duration-200 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <span>My List</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
