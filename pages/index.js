import { MdTimer } from "react-icons/md";
import { FaUsers, FaTools, FaGlasses } from "react-icons/fa";
import {
  FaDocker,
  FaReact,
  FaGulp,
  FaGitSquare,
  FaLinkedin
} from "react-icons/fa";

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
              <h4>NextJS Spotify Visualizer</h4>
            </div>
            <div className="custom-wrapper">
              <p>
                A work in progress! a while back, I created a basic music
                visualizer that connects to spotify's web API and creates
                animations on an HTML5 Canvas based on the audioAnalysis
                retrieved from each currently playing song. I had some real
                issues handling the data due to the realtime nature of the code,
                and ultimately produced a sub-par project. With react hooks,
                I've been finding that state management makes this process much
                easier, and allows me to more closely match the progression of
                the song. Right now I have just the tempo feeding into the
                background color, and the bars being tracked and returning a
                console.log for each match between the start of a new bar and
                the current point in time in the track.
              </p>
            </div>
            <div className="theBtns">
              <a
                className="theLink codeLink"
                href="https://github.com/itsseanl/next-spotify-visualizer"
              >
                The Code
              </a>
              <a className="theLink siteLink">The Site</a>
            </div>
          </div>
        </section>
        <section className="experience">
          <div className="full-width">
            <div className="custom-wrapper section-heading">
              <h2>Skills & Experience</h2>
            </div>
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
            <p>
              If you'd like to discuss any of my skills, projects, or
              technologies of choice, drop me a line! I'm always looking for the
              next opportunity to learn, share, and grow as a developer.
            </p>
            <a href="https://github.com/itsseanl">
              <FaGitSquare />
              https://github.com/itsseanl
            </a>
            <a href="https://www.linkedin.com/in/itsseanl/">
              <FaLinkedin />
              https://www.linkedin.com/in/itsseanl/
            </a>
          </div>
          <div className="footer-right">
            <div className="underline"></div>
            <ContactForm />
          </div>
        </div>
      </footer>
      <style jsx global>{`
			.full-width{
				position:sticky;
				top: 0;
				background: #fff;
				padding: 15px;
			}
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
				.theBtns{
					display: flex;
					justify-content: center;
					align-items: center;
					flex: 1 0 auto;
					flex-wrap: nowrap;
					width: 100%;
				}
				.theLink{
					padding:15px;
					text-decoration:none;
					font-family:"Lobster", sans-serif;
					box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.3);
					margin:15px;
					width:50%!important;
					max-width: 300px;
					
				}
				.codeLink{
					background:#FFFFF0;
					color:#333;
				}
				.siteLink{
					background:#333;
					color:#FFFFF0;
				}

				.experience {
					padding-bottom:50px;
				}
				.experience > .full-width > .custom-wrapper > .section-heading {
					width: 100%;
					left: 0;
					right: 0;
					padding: 1px 25px;
					z-index:9999;
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
					.experience > .custom-wrapper > h2{
						padding-left:0;
					}
					.exp-item:nth-child(1),
					.exp-item:nth-child(3){
						margin-left:0;
					}
					.exp-item:nth-child(2),
					.exp-item:nth-child(4){
						margin-right:0;
					}
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
							margin-left:15px;
						}
						.footer-right{
							margin-right:15px; 
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
