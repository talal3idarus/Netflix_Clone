import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Card component for displaying movie/show information
 * Features hover effects and smooth animations
 */
const Card = ({ movie, isLarge = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative cursor-pointer transition-all duration-300 ${
        isLarge ? 'h-96' : 'h-48'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Movie Poster */}
      <div className="relative w-full h-full rounded-md overflow-hidden shadow-lg">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Hover Overlay */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-black/20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-center p-4">
              <h3 className="text-white font-semibold text-lg mb-2">
                {movie.title}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-3">
                {movie.overview}
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="bg-netflix-red text-white px-2 py-1 rounded text-xs font-medium">
                  {movie.rating}
                </span>
                <span className="text-gray-400 text-xs">{movie.year}</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Movie Info (visible on hover for large cards) */}
      {isLarge && isHovered && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-white font-bold text-xl mb-2 line-clamp-1">
            {movie.title}
          </h3>
          <p className="text-gray-300 text-sm line-clamp-2 mb-3">
            {movie.overview}
          </p>
          <div className="flex items-center gap-4">
            <button className="btn-primary text-sm">
              ▶ Play
            </button>
            <button className="btn-secondary text-sm">
              + My List
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
