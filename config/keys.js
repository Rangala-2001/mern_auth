// config/keys.js
require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGO_URI || "mongodb://mongo:27017/mern_auth",
  secretOrKey: process.env.JWT_SECRET || "56e801ce94f48b0c0c754a89f38d990fc34428c186d1b87093884f633cfca5d6"
};
