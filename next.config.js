// next.config.js
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withPlugins = require("next-compose-plugins");

require("dotenv").config();

module.exports = {
	env: {
		sendgrid_api_key2: process.env.sendgrid_api_key2,
	},
};

module.exports = withPlugins([withImages, withFonts], {
	distDir: "./.next",
});

module.exports = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader",
		});

		return config;
	},
};
