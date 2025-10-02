import express from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// Import mock data (placeholder - in real app, this would come from database)
const moviesData = JSON.parse(readFileSync(path.join(__dirname, '../../client/src/data/movies.json'), 'utf8'));

/**
 * GET /api/movies
 * Get all movies with optional filtering
 */
router.get('/', (req, res) => {
  try {
    const { category, search, limit } = req.query;
    let movies = [];

    // Get all movies from all categories
    moviesData.categories.forEach(category => {
      movies.push(...category.movies);
    });

    // Filter by category if specified
    if (category) {
      const categoryData = moviesData.categories.find(cat => 
        cat.name.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
      );
      if (categoryData) {
        movies = categoryData.movies;
      }
    }

    // Search functionality (placeholder)
    if (search) {
      movies = movies.filter(movie => 
        movie.title.toLowerCase().includes(search.toLowerCase()) ||
        movie.overview.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Limit results if specified
    if (limit) {
      movies = movies.slice(0, parseInt(limit));
    }

    res.json({
      success: true,
      count: movies.length,
      data: movies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch movies',
      message: error.message
    });
  }
});

/**
 * GET /api/movies/categories
 * Get all movie categories
 */
router.get('/categories', (req, res) => {
  try {
    const categories = moviesData.categories.map(category => ({
      name: category.name,
      slug: category.name.toLowerCase().replace(/\s+/g, '-'),
      count: category.movies.length
    }));

    res.json({
      success: true,
      count: categories.length,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch categories',
      message: error.message
    });
  }
});

/**
 * GET /api/movies/featured
 * Get featured movie
 */
router.get('/featured', (req, res) => {
  try {
    res.json({
      success: true,
      data: moviesData.featured
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch featured movie',
      message: error.message
    });
  }
});

/**
 * GET /api/movies/:id
 * Get specific movie by ID
 */
router.get('/:id', (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    let movie = null;

    // Search through all categories to find the movie
    for (const category of moviesData.categories) {
      movie = category.movies.find(m => m.id === movieId);
      if (movie) break;
    }

    if (!movie) {
      return res.status(404).json({
        success: false,
        error: 'Movie not found'
      });
    }

    res.json({
      success: true,
      data: movie
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch movie',
      message: error.message
    });
  }
});

/**
 * POST /api/movies/:id/favorite
 * Add movie to user's favorites (placeholder)
 */
router.post('/:id/favorite', (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    
    // In a real app, this would:
    // 1. Authenticate the user
    // 2. Add the movie to their favorites in the database
    // 3. Return success response
    
    res.json({
      success: true,
      message: `Movie ${movieId} added to favorites`,
      data: { movieId, favorited: true }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to add movie to favorites',
      message: error.message
    });
  }
});

/**
 * DELETE /api/movies/:id/favorite
 * Remove movie from user's favorites (placeholder)
 */
router.delete('/:id/favorite', (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    
    // In a real app, this would:
    // 1. Authenticate the user
    // 2. Remove the movie from their favorites in the database
    // 3. Return success response
    
    res.json({
      success: true,
      message: `Movie ${movieId} removed from favorites`,
      data: { movieId, favorited: false }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to remove movie from favorites',
      message: error.message
    });
  }
});

export default router;
