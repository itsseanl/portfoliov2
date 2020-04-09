import { MdTimer } from "react-icons/md";
import { FaUsers, FaTools, FaGlasses } from "react-icons/fa";
import { FaDocker, FaReact, FaGulp, FaGitSquare, FaLinkedin } from "react-icons/fa";

import MyHeader from "../components/Header";
import Technologies from "../components/Technologies";
import ContactForm from "../components/ContactForm";
import { createGlobalStyle } from "styled-components";

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
				<div className="custom-wrapper">
				<h2>Skills & Experience</h2>
				</div> 
				<div className="custom-wrapper">

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
					</div>
				</section>
			</main>
			<footer>
				
				<div className="custom-wrapper">
					<div className="footer-left">
					<div className="footer-heading">
					<h2>Get in touch!</h2>
					</div>
					<p>If you'd like to discuss any of my skills, projects, or technologies of choice, drop me a line!
					I'm always looking for the next opportunity to learn, share, and grow as a developer.</p> 
					<a href="https://github.com/itsseanl"><FaGitSquare />https://github.com/itsseanl</a>
					<a href="https://www.linkedin.com/in/itsseanl/"><FaLinkedin />https://www.linkedin.com/in/itsseanl/</a>
					</div>
					<div className="footer-right">
					
					<div className="underline"></div>
					<ContactForm />

					</div>
				</div>
			</footer>
			<style jsx global>{`
			.custom-wrapper{
				width:90%;
				max-width:1200px;
				left:0;
				right:0;
				margin:auto;
			}
			
				.experience {
					background: #fff;
					
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
					max-width:1200px;
					left:0;
					right:0;
					margin: auto;
				}
				.experience {
				}
				.experience > h2,
				.experience > .custom-wrapper > h2 {
					width: 100%;
					left: 0;
					right: 0;
					padding: 15px 25px;
					
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
					width: 100%;
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

					height: auto;
					padding: 50px 0;
				}
				.footer-left > .footer-heading > h2 {
					color: #fff;
					background: #333;
					margin:5px;
				}
				
				.footer-left > .footer-heading {
					left:0;
					right:0;
	
					display:block;
					width:90%;
					color: #fff !important;
					background: #333;
				}

				.footer-heading > .underline {
					background: #fff;
					position: relative;
				}
				.footer-left{
					color:#fff;
					font-size:24px;
					
				}
				.footer-left > a{
					color:#fff;
					text-decoration:none;
					display:flex;
					justify-content:flex-start;
					align-items:center;
					font-size:14px;
					font-family:"Lobster", sans-serif;
				}
				.footer-left > a > :global(svg){
					padding-right:15px;
					font-size:36px;

				}
				@media(min-width:768px){
					.custom-wrapper{
						width:90%;
						max-width:1200px;
					}
					.exp-items{
						display:flex;
						flex-wrap:wrap;
						flex-direction:row;
					}
					.exp-item{
						width:45%;
					}
					footer > .custom-wrapper{
						display:flex;
						flex-wrap:nowrap;
						justify-content:space-between;
						align-items:flex-start;
						}
						.footer-left,
						.footer-right{
							width:45%;
							height:100%;
							display:flex;
							flex-direction:column;
							justify-content:center;
							align-items:center;
							min-height:500px;
						}
						.footer-left{
							align-items:flex-start;
							justify-content:center;
						}
						.footer-heading,
						.footer-left > p,
						.footer-left > a{
							text-align:left;
							justify-content:left;
							align-items:left!important
							width:100%;
							font-size:14px;
						}
						.footer-left > p{
							font-size:18px;
						}
						
						.footer-right > form{
							width:100%;
						}
						.footer-right > form > label {
							color:#fff;
						}
					}
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
