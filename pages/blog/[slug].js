import react, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../CodeBlock";
import MyHeader from "../../components/Header";
import { IoMdReturnLeft } from "react-icons/io";
const Post = ({ content }) => {
	console.log(content);
	return (
		<>
			<MyHeader />
			<div className="wrap">
				<div className="custom-wrapper">
					<div className="content">
						<a href="/blog">
							<IoMdReturnLeft />
						</a>

						<ReactMarkdown
							source={content.default}
							renderers={{ code: CodeBlock }}
						/>
					</div>
				</div>
			</div>
			<style jsx>{`
				a > :global(svg) {
					font-size: 48px;
					color: #333;
				}
				.custom-wrapper {
					background: #fffff0;
					padding: 30px;
				}
				.custom-wrapper:first-of-type {
					margin: 30px auto;
				}
				.wrap {
					background: #333;
					padding: 30px 0;
				}
				.content {
					max-width: 900px;
					left: 0;
					right: 0;
					margin: auto;
					display: block;
				}
			`}</style>
		</>
	);
};
Post.getInitialProps = async ({ query }) => {
	let postPath = query.slug;
	postPath = postPath.replace(/ /g, "-");
	postPath = postPath.toLowerCase();
	// postPath = postPath.replace()
	const content = await require(`../../blog/${postPath}.md`);
	return { content };
};
export default Post;
