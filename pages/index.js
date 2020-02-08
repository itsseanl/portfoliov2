import { MdTimer } from "react-icons/md";
import { FaUsers, FaTools, FaGlasses } from "react-icons/fa";
import MyHeader from "../components/Header";
import Technologies from "../components/Technologies";
import { styled, createGlobalStyle } from "styled-components";

function HomePage() {
	return (
		<>
			<GlobalStyle />
			<MyHeader />
			<main>
				<Technologies />
				<section className="featured-project">
					<div className="featured">
						<div className="overlay">
							<h2>Featured Project</h2>
							<div className="underline short"></div>
							<h4>Project Title</h4>
						</div>
						<p>
							Praesent ornare ornare tellus, et porta arcu consectetur at. Morbi
							sed ante odio. Vivamus tortor sem, feugiat vitae tincidunt sed,
							sollicitudin ut ex. Quisque pharetra mi quis sem dapibus, eget
							sagittis tortor facilisis. Fusce pellentesque vehicula eros, vel
							feugiat ante sodales eget. Pellentesque fringilla mattis velit nec
							fermentum. Maecenas maximus enim vitae lacus ullamcorper
							porttitor. Sed a nisl scelerisque, vestibulum felis ac, tempor
							lectus. Nulla orci ante, dignissim quis magna vel, molestie
							ullamcorper tortor. Donec id nunc placerat enim gravida cursus.
							Donec fringilla tincidunt mauris lobortis porta. Aliquam consequat
							ultricies tempor. Nullam in lobortis felis, non volutpat risus.
							Null euismod turpis ut ipsum mollis, quis lacinia nisl mattis.
							Nullam eu facilisis
						</p>
					</div>
				</section>
				<section className="experience">
					<h2>Skills & Experience</h2>
					<div className="exp-items">
						<div className="exp-item">
							<MdTimer />
							<h3>Project Management</h3>
							<div className="underline tiny"></div>
							<p>coming soon</p>
						</div>
						<div className="exp-item">
							<FaUsers />
							<h3>Team-Based Workflow</h3>
							<div className="underline tiny"></div>

							<p>coming soon</p>
						</div>
						<div className="exp-item">
							<FaTools />
							<h3>Site Maintenance</h3>
							<div className="underline tiny"></div>

							<p>coming soon</p>
						</div>
						<div className="exp-item">
							<FaGlasses />
							<h3>Attention to Detail</h3>
							<div className="underline tiny"></div>

							<p>coming soon</p>
						</div>
					</div>
				</section>
			</main>
			<footer>
				<div className="footer-heading">
					<h2>Get in touch!</h2>
					<div className="underline"></div>
				</div>

				<form>
					<input placeholder="name"></input>
					<input placeholder="email"></input>
					<textarea placeholder="Message..."></textarea>
					<input type="submit" value="submit"></input>
				</form>
			</footer>
			<style jsx global>{`
				.experience {
					background: rgb(51, 51, 51);
					background: linear-gradient(
						0deg,
						rgba(51, 51, 51, 1) 10%,
						rgba(255, 255, 255, 1) 10%
					);
				}
				.underline {
					height: 4px;
					background: #333;
					width: 60%;
				}
				.short {
					width: 40%;
				}
				main {
					z-index: 1;
					background: #fff;
				}
				.featured-project {
					width: 100%;
					left: 0;
					right: 0;
					margin: auto;
				}
				.featured-project > p {
					width: 90%;
					left: 0;
					right: 0;
					margin: 50px auto;
				}
				.featured {
					box-shadow: inset 0px 2px 12px 2px rgba(0, 0, 0, 0.3);
					background: rgba(255, 255, 255, 0.8);
					background-blend-mode: lighten;
					background-image: url(${require("../assets/img/project.png")});
					background-size: cover;
					background-position: center;
					background-repeat: no-repeat;
					min-height: 400px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding: 50px 5%;
					text-align: center;
				}

				.overlay {
					background: rgba(255, 255, 255, 0.8);
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 100%;

					margin: auto;
				}
				.experience {
				}
				.experience > h2 {
					width: 100%;
					left: 0;
					right: 0;
					padding: 25px 10%;
					position: sticky;
					top: 0;
					background: #fff;
				}

				.exp-items {
					display: flex;
					flex-direction: column;
					justify-content: center;
				}
				.tiny {
					width: 20%;
				}
				.exp-item {
					width: 90%;
					left: 0;
					right: 0;
					margin: 25px auto;
					box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.3);
					background: #fffff0;
					padding: 25px 15px;
				}
				.exp-item :global(svg) {
					font-size: 28px;
				}
				footer {
					background: #333;
					margin-top: -20px;
				}
				footer > .footer-heading > h2 {
					color: #fff;
					background: #333;
				}
				footer > .footer-heading > .underline {
					background: #fff;

					width: 60%;
				}
				footer > .footer-heading {
					padding-left: 10%;
					padding-right: 10%;
					position: relative;
					color: #fff !important;
					background: #333;
				}

				footer > form {
					background: #333;
					min-height: 1050px;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
				footer > .underline {
					background: #fff;
					position: relative;
				}
			`}</style>
		</>
	);
}
const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
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

`;

export default HomePage;
