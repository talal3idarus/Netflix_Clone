import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';

/**
 * Row component for displaying horizontal scrollable movie lists
 * Features smooth scrolling and responsive design
 */
const Row = ({ title, movies, isLarge = false }) => {
  const rowRef = useRef(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction) => {
    setIsMoved(true);
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-2 md:space-y-4">
      {/* Row Title */}
      <h2 className="text-white text-xl md:text-2xl font-bold px-4 md:px-16">
        {title}
      </h2>

      {/* Row Container with Scroll */}
      <div className="relative group">
        {/* Left Arrow */}
        <motion.button
          className={`absolute left-2 top-1/2 -translate-y-1/2 z-40 h-9 w-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
            !isMoved && 'hidden'
          }`}
          onClick={() => handleClick('left')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>

        {/* Movies Row */}
        <div
          ref={rowRef}
          className="flex items-center space-x-3 overflow-x-scroll scrollbar-hide px-4 md:px-16 py-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className={`flex-shrink-0 ${
                isLarge ? 'w-64 md:w-80' : 'w-36 md:w-48'
              }`}
            >
              <Card movie={movie} isLarge={isLarge} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <motion.button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-40 h-9 w-9 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          onClick={() => handleClick('right')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};

export default Row;
