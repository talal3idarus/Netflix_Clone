# Netflix Clone Server

Backend API server for the Netflix UI Clone project.

## Features

- **Express.js** server with modern ES modules
- **RESTful API** endpoints for movies and users
- **CORS** enabled for client communication
- **Security** middleware with Helmet
- **Logging** with Morgan
- **Environment** configuration support
- **Production-ready** static file serving

## API Endpoints

### Movies
- `GET /api/movies` - Get all movies (with optional filtering)
- `GET /api/movies/categories` - Get movie categories
- `GET /api/movies/featured` - Get featured movie
- `GET /api/movies/:id` - Get specific movie
- `POST /api/movies/:id/favorite` - Add movie to favorites
- `DELETE /api/movies/:id/favorite` - Remove movie from favorites

### Users
- `GET /api/users/profile` - Get user profile
- `POST /api/users/profile` - Update user profile
- `GET /api/users/favorites` - Get user's favorites
- `GET /api/users/watchlist` - Get user's watchlist
- `POST /api/users/watchlist` - Add to watchlist
- `DELETE /api/users/watchlist/:movieId` - Remove from watchlist

### System
- `GET /api/health` - Health check
- `GET /api` - API information

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment setup:**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

3. **Development:**
   ```bash
   npm run dev
   ```

4. **Production:**
   ```bash
   npm start
   ```

## Development Notes

This is a placeholder server setup prepared for future full-stack development. Currently uses mock data from the client's `movies.json` file.

### Future Enhancements

- Database integration (PostgreSQL/MongoDB)
- User authentication (JWT)
- Real movie data (TMDB API integration)
- File upload handling
- Email services
- Caching (Redis)
- Rate limiting
- API documentation (Swagger)

### Project Structure

```
server/
├── routes/
│   ├── movies.js      # Movie-related endpoints
│   └── users.js       # User-related endpoints
├── middleware/         # Custom middleware (future)
├── models/            # Database models (future)
├── controllers/       # Business logic (future)
├── utils/             # Utility functions (future)
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## Environment Variables

See `env.example` for available configuration options.

## API Response Format

All API responses follow this format:

```json
{
  "success": true,
  "data": {},
  "message": "Optional message",
  "count": 10
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error type",
  "message": "Error description"
}
```
