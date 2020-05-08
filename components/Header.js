import { FaGithub, FaLinkedin, FaPenAlt } from "react-icons/fa";
import styled from "styled-components";
const MyHeader = () => {
	return (
		<header>
			<div className="custom-wrapper">
				<a href="/">
					<h1>Sean Lyons</h1>
				</a>
				<ul>
					<li>
						<a href="https://github.com/itsseanl">
							<FaGithub />
						</a>
					</li>
					<li>
						<a href="https://linkedin.com/in/itsseanl">
							<FaLinkedin />
						</a>
					</li>
					<li>
						<a href="/blog">
							<FaPenAlt />
						</a>
					</li>
				</ul>
			</div>
			<style jsx>{`
				header {
					background: #fffff0;
					padding-top: 25px;
					padding-bottom: 25px;
					color: #333;
					box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.15);
					position: relative;
					z-index: 2;
					height: 100px;
				}
				.custom-wrapper {
					width: 100%;
					max-width: 1200px;
					left: 0;
					right: 0;
					margin: auto;
					padding-left: 25px;
					padding-right: 25px;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				a {
					text-decoration: none;
				}
				h1 {
					position: sticky;
				}
				ul {
					list-style: none;
					display: flex;
					padding-left: 0;
				}
				li {
					padding: 0px 25px;
					font-size: 36px;
				}
				li a {
					color: #333;
				}
				header :global(svg) {
					transition: 0.6s all;
				}
				header :global(svg):hover {
					cursor: pointer;
					transform: scale(1.2);
					transition: 0.6s all;
				}
			`}</style>
		</header>
	);
};

export default MyHeader;
