# Netflix Clone - Full Stack

A Netflix-inspired full-stack application built for educational purposes — featuring React front-end and Express.js backend (educational/demo only).

> **Purpose:** Practice full-stack development, UI/UX design, animations, responsive layouts, and component-driven architecture.  
> **Note:** This project is for learning and demo purposes only. Do **not** use Netflix logos, proprietary assets, or claim affiliation.

---

## Demo
- Live demo: *(add your Netlify/Vercel/GitHub Pages link here)*

---

## Features

### Frontend (Client)
- Responsive home page with hero banner, navigation bar, and search/genre sections  
- Reusable components: `Navbar`, `Hero`, `Row`, `Card`, `Modal`  
- Mock data-driven content (JSON) with lazy-load style rows  
- Hover effects and smooth animations  
- Mobile-first responsive layout  
- Dark theme by default (easy to toggle)

### Backend (Server)
- RESTful API with Express.js
- Movie and user management endpoints
- CORS enabled for client communication
- Security middleware with Helmet
- Production-ready static file serving
- Prepared for database integration

---

## Tech Stack

### Frontend (Client)
- **React** (component-based UI) — https://react.dev/  
- **Vite** (dev server + build) — https://vitejs.dev/  
- **Tailwind CSS** (utility-first styling) — https://tailwindcss.com/  
- **Framer Motion** for animations — https://www.framer.com/motion/  
- **React Router** for routing — https://reactrouter.com/

### Backend (Server)
- **Node.js** (JavaScript runtime) — https://nodejs.org/
- **Express.js** (web framework) — https://expressjs.com/
- **CORS** (cross-origin resource sharing)
- **Helmet** (security middleware)
- **Morgan** (HTTP request logger)

---

## Screenshots
*(Add screenshots in `/assets` or link to images here)*

---

## Project Structure

```
netflix-clone/
├── client/                    # React frontend application
│   ├── public/
│   │   └── placeholder-assets/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Row.jsx
│   │   │   └── Card.jsx
│   │   ├── data/
│   │   │   └── movies.json
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.cjs
│   ├── vite.config.js
│   └── README.md
├── server/                    # Express.js backend API
│   ├── routes/
│   │   ├── movies.js
│   │   └── users.js
│   ├── server.js
│   ├── package.json
│   ├── env.example
│   └── README.md
├── package.json              # Root package.json with scripts
└── README.md                 # This file
```


---

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd netflix-clone
   ```

2. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

3. **Start development servers:**
   ```bash
   npm run dev
   ```

This will start both the client (port 3000) and server (port 5001) simultaneously.

### Development Commands

```bash
# Start both client and server
npm run dev

# Start only the client (React app)
npm run dev:client

# Start only the server (Express API)
npm run dev:server

# Build for production
npm run build

# Install all dependencies
npm run install:all

# Clean all node_modules
npm run clean
```

### Individual Setup

#### Client Setup
```bash
cd client
npm install
npm run dev
```

#### Server Setup
```bash
cd server
npm install
cp env.example .env
npm run dev
```

---

## API Endpoints

The server provides the following API endpoints:

### Movies
- `GET /api/movies` - Get all movies
- `GET /api/movies/categories` - Get movie categories  
- `GET /api/movies/featured` - Get featured movie
- `GET /api/movies/:id` - Get specific movie
- `POST /api/movies/:id/favorite` - Add to favorites
- `DELETE /api/movies/:id/favorite` - Remove from favorites

### Users
- `GET /api/users/profile` - Get user profile
- `POST /api/users/profile` - Update profile
- `GET /api/users/favorites` - Get favorites
- `GET /api/users/watchlist` - Get watchlist

### System
- `GET /api/health` - Health check
- `GET /api` - API information

---

## Development Notes

### Current Status
- ✅ **Frontend**: Complete React application with all components
- ✅ **Backend**: Basic Express.js server with placeholder endpoints
- ✅ **Structure**: Client/server separation ready for scaling
- 🔄 **Future**: Database integration, authentication, real APIs

### Data Sources
- Mock JSON data in `client/src/data/movies.json`
- Placeholder images from via.placeholder.com
- No copyrighted Netflix content used

### Accessibility & Performance
- Semantic HTML structure
- Alt text for all images
- Lazy loading implemented
- Mobile-first responsive design
- Optimized bundle size

---

## Legal Notice

This repository is an educational re-creation of a UI pattern inspired by Netflix. It is **not affiliated with or endorsed by Netflix, Inc.** Do not use Netflix branding, logos, or their copyrighted content in this project.