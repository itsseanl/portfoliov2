import React from "react";

import App, { Container } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<Container>
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=Lobster|Ubuntu&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<Component {...pageProps} />

			<style jsx global>{`
				// @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:regular,bold,italic&subset=latin,latin-ext");

				h1,
				h2,
				h3,
				h4,
				h5,
				h6 {
					font-family: "Lobster", cursive;
				}
				p {
					font-family: "Ubuntu", sans-serif;
				}
			`}</style>
		</Container>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
