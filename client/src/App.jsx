import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { motion } from 'framer-motion';

/**
 * Main App component with routing and global layout
 * Features smooth page transitions and responsive design
 */
function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-netflix-black">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <motion.main
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Additional routes can be added here */}
            <Route path="/tv-shows" element={<Home />} />
            <Route path="/movies" element={<Home />} />
            <Route path="/new-popular" element={<Home />} />
            <Route path="/my-list" element={<Home />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  );
}

export default App;
