// next.config.js
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");

require('dotenv').config()

module.exports = {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
};

module.exports = withPlugins([withImages, withFonts], {
  distDir: "./.next"
});
