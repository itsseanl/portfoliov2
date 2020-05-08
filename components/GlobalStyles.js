function GlobalStyles() {
	return (
		<style jsx global>{`
			* {
				box-sizing: border-box;
				transition: 0.3s background;
			}
			html,
			body {
				margin: 0;
				padding: 0;
				background: #fffff0;
				line-height: 1.5em;
			}
			h1,
			h2,
			h3,
			h4,
			h5,
			h6 {
				font-family: "Lobster";
				color: #333;
			}
			p {
				font-family: "Ubuntu";
			}
			.full-width {
				position: sticky;
				top: 0;
				background: #fff;
				padding: 15px;
			}
			.custom-wrapper {
				width: 90%;
				max-width: 1200px;
				left: 0;
				right: 0;
				margin: auto;
				display: block;
			}

			.underline {
				height: 4px;
				width: 60%;
			}
		`}</style>
	);
}
export default GlobalStyles;
