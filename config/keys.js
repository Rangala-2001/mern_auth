require('dotenv').config();  // Load environment variables from .env

module.exports = {
  mongoURI: process.env.MONGO_URI,  // Get Mongo URI from .env
  secretOrKey: process.env.JWT_SECRET  // Get JWT secret from .env
};

