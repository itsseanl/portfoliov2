// next.config.js
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");

require("dotenv").config();

module.exports = {
  env: {
    sendgrid_api_key: process.env.sendgrid_api_key
  }
};

module.exports = withPlugins([withImages, withFonts], {
  distDir: "./.next"
});
