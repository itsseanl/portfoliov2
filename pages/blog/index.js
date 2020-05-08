import react, { useEffect, useRef, useState } from "react";
import MyHeader from "../../components/Header";
const Blog = () => {
	let posts = [
		{
			title: "Build a Blog With NextJS and Markdown",
			date: "May 8th, 2020",
		},
	];

	let fadeIn = 0;

	return (
		<>
			<MyHeader />
			<div className="blog-heading">
				<div className="custom-wrapper">
					<h2>What will we build today?</h2>
				</div>
			</div>
			<div className="posts">
				<div className="custom-wrapper">
					{posts.map((post) => {
						fadeIn += 0.2;

						return (
							<a
								className="post"
								href={"/blog/" + post.title}
								style={{ animationDelay: `${fadeIn}s` }}
							>
								<h3>{post.title}</h3>
								<div className="underline"></div>
								<p>{post.date}</p>
							</a>
						);
					})}
				</div>
			</div>
			<style jsx>{`
				.blog-heading {
					background: #333;
					padding: 30px 0;
				}
				.posts {
					background: #333;
					min-height: 80vh;
					height: auto;
					padding: 30px 0;
				}

				.blog-heading > .custom-wrapper h2 {
					color: #fff;
				}
				.blog-heading > .custom-wrapper > .underline {
					background: #fff;
				}
				.underline {
					background: #333;
				}

				@keyframes fadein {
					0% {
						display: none;
						opacity: 0;
					}

					1% {
						display: block;
						opacity: 0;
					}

					100% {
						display: block;
						opacity: 1;
					}
				}

				.post {
					background: #fffff0;
					box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.15);
					margin: 30px auto;
					padding: 15px;
					text-decoration: none;
					display: block;
					animation: fadein 2s forwards;
					opacity: 0;
				}

				.post:first-of-type {
					margin-top: 0;
				}
				.post:last-of-type {
					margin-bottom: 0;
				}
				.post > * {
					color: #333;
				}
				.post h3 {
					font-family: "Lobster", sans-serif;
					font-size: 2em;
					line-height: 1.2em;
					margin: 15px 0;
				}
				.post .underline {
					width: 25%;
					background: #333;
				}
				.post p {
					font-size: 12px;
				}
			`}</style>
		</>
	);
};
export default Blog;
