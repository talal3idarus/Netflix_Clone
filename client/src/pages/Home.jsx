import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Row from '../components/Row';
import moviesData from '../data/movies.json';

/**
 * Home page component featuring hero banner and movie rows
 * Displays all movie categories with smooth animations
 */
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="min-h-screen bg-netflix-black">
      {/* Hero Section */}
      <Hero />

      {/* Movie Rows Section */}
      <motion.main
        className="relative z-10 -mt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-8 md:space-y-12 pb-16">
          {moviesData.categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={rowVariants}
              className="relative"
            >
              <Row
                title={category.name}
                movies={category.movies}
                isLarge={index === 0} // First row is larger
              />
            </motion.div>
          ))}
        </div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        className="bg-netflix-black border-t border-gray-800 py-12 px-4 md:px-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-gray-400 font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investor Relations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Account</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Cookie Preferences</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate Information</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Speed Test</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm text-center">
              © 2024 Netflix UI Clone. This is a demo project for educational purposes only.
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Home;
