import React from "react";

import App, { Container } from "next/app";
import Head from "next/head";
import GlobalStyles from "../components/GlobalStyles";

function MyApp({ Component, pageProps }) {
	return (
		<Container>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Sean Lyons | Front End Developer | itsseanl.com</title>
				<meta
					name="description"
					content="My Portfolio site and blog. Read my blog for tips, guides, and write-ups on what I've been building with Nextjs, MongoDB, WordPress, and more!"
				/>

				<script
					data-ad-client="ca-pub-6973815714764332"
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
				></script>
				<link
					href="https://fonts.googleapis.com/css?family=Lobster|Ubuntu&display=swap"
					rel="stylesheet"
				/>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=UA-46552514-6"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-46552514-6');`,
					}}
				></script>
			</Head>

			<Component {...pageProps} />

			<style jsx global>{`
				@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:regular,bold,italic&subset=latin,latin-ext");

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
			<GlobalStyles />
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
