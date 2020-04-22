import { FaDocker, FaReact, FaGulp } from "react-icons/fa";
import {
  DiVisualstudio,
  DiGithubBadge,
  DiSass,
  DiStackoverflow,
  DiWordpress
} from "react-icons/di";
import { useState } from "react";

const Technologies = ({
  color,
  descriptionTitle,
  descriptionText,
  handleColorChange
}) => {
  return (
    <section className="technologies">
      <div className="full-width">
        <div className="custom-wrapper">
          <h2 className="section-heading">The Essentials</h2>
        </div>
      </div>
      <div className="custom-wrapper">
        <div className="content">
          <div className="icons">
            <div
              className="icon"
              id="vscode"
              onFocus={() =>
                handleColorChange(
                  "#333",
                  "VS Code is my editor of choice. A great plugin library, easy to navigate UI, and built-in terminal make this an easy choice for me. Prettier and Color Highlight have changed my life forever!",
                  "VS Code"
                )
              }
              tabIndex="3"
            >
              <DiVisualstudio />
            </div>
            <div
              className="icon"
              id="docker"
              onFocus={() =>
                handleColorChange(
                  "#032144",
                  "For local wordPress development, Lando is my go-to for setting up an environment. Lando is an open source, docker based local development tool that makes setting up environments as easy as editing a single text file. With pre-built recipes for WordPress, you simply edit your .lando.yml file to include any build tools you may need, update your project name, and you're off to the races.",
                  "Docker"
                )
              }
              tabIndex="4"
            >
              <FaDocker />
            </div>
            <div
              className="icon"
              id="react"
              onFocus={() =>
                handleColorChange(
                  "#29B1EF",
                  "This site is built with NextJS! For more complex web projects, react is my library of choice. NextJS is a framework built on react, that makes deploying a project absolutely painless. While I am still learning the ins and outs, it provides the functionality to create lightning fast, SEO friendly sites that you can deploy with a single line in the terminal.",
                  "Next.js"
                )
              }
              tabIndex="5"
            >
              <FaReact />
            </div>
            <div
              className="icon"
              id="github"
              onFocus={() =>
                handleColorChange(
                  "#2DBD4E",
                  "All of my work and personal projects are managed with github. I've learned how to set up my config file to handle multiple SSH Keys for multiple accounts, the important of .gitignore, and a little bit of how to collaborate with co-workers (although I haven't taken charge of the merge just yet!).",
                  "Github"
                )
              }
              tabIndex="6"
            >
              <DiGithubBadge />
            </div>
            <div
              className="icon"
              id="sass"
              onFocus={() =>
                handleColorChange(
                  "#CF649A",
                  "I don't even remember my world before Sass. Sass allows you to break up and organize your css files, nest elements, and introduces variables and mixins to allow for sweeping changes to things like default colors or base styles without having to touch every line. ",
                  "Sass"
                )
              }
              tabIndex="7"
            >
              <DiSass />
            </div>
            <div
              className="icon"
              id="stackoverflow"
              onFocus={() =>
                handleColorChange(
                  "#F48025",
                  "I will be the first to admit when I don't know something, and I think that's important! With your ego out of the way, you are much more willing to seek out help, and more receptive to the help that is provided. StackOverflow is practically my home, constantly helping me through niche problems and other small gaps in my knowledge.",
                  "Stackoverflow"
                )
              }
              tabIndex="8"
            >
              <DiStackoverflow />
            </div>
            <div
              className="icon"
              id="wordpress"
              onFocus={() =>
                handleColorChange(
                  "#207297",
                  "Love it or hate it, WordPress is still a huge player in the web development world. My first full-time job in the field was doing WordPress development at an agency, and I've learned a great deal about it. From the basics like custom menus, post types, and fields, to more complex tasks like custom queries, api integration, ajax calls to custom PHP scripts, and even some basic custom plugin development. While I am constantly woriking to grow my skillset, I think it's safe to say that I am currently most comfortable working in WordPress.",
                  "WordPress"
                )
              }
              tabIndex="9"
            >
              <DiWordpress />
            </div>
            <div
              className="icon"
              id="gulp"
              onFocus={() =>
                handleColorChange(
                  "#CF4647",
                  "When it comes to WordPess development, WPGulp is indispensable. It will compile and minify your custom sass/JS with auto-prefixing for your compiled css, provides live browser reloading, and even image optimization. What more do I need to say?",
                  "WPGulp"
                )
              }
              tabIndex="9"
            >
              <FaGulp />
            </div>
          </div>
          <div className="description">
            <div className="description-text">
              <h2>{descriptionTitle}</h2>
              <div className="underline"></div>
              <p>{descriptionText}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
				.full-width {
					position: sticky;
					top: 0px;
					z-index: 1;
					background: ${color};
					width: 100%;
				}
				.technologies {
					background: ${color};
					padding-top: 40px;
					box-shadow:  -1px 0px 8px 2px rgba(0,0,0,0.3);

				}
				.technologies > .custom-wrapper{
					width:100%;
				}
				.technologies > .custom-wrapper > .content{
					width:100%;
					margin:0;
					padding:0;
				}
				.technologies > .full-width > .custom-wrapper > h2 {
					margin: 0;
					padding: 15px 10%;
					padding-left:15px;
					color: #fff;

					left: 0;
					right: 0;
					margin: auto;
				}
				.icons {
					padding-top: 40px;
					display: flex;
					width: 92%;
					left: 0;
					right: 0;
					margin: auto;
					overflow: visible;
					background: ${color};
					flex-wrap: wrap;
				}
				.icon {
					cursor: pointer;
					display: flex;
					flex: 1 0 auto;
					margin: 1%;
					justify-content: center;
					align-items: center;
					// border: 1px solid #333;
					// border-bottom: 2px solid #333;
					// background: #9bcbf6;
					background: #fffff0;
					width: 20%;
					color: #fff;
					padding: 25px 0;
					font-size: 24px;
					transition: 0.3s all;
					color: #333;
					height: 75px;

				}
				.icon > :global(svg) {
					padding: 5%;
					font-size: 2em;
				}
				.icon:focus {
					outline: none;
					border: 1px solid rgba(0, 0, 0, 0);
					font-size: 2.1em;
					color: #fff;
					background: ${color};
				}
				.description {
/* 					background-image: linear-gradient(${color} 50%, #fff 50%); */
					transition: 0.3s all;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					height: auto;
				}
				.description-text {
					background: #fffff0;
					box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.15);
					color: #333;
					width: 90%;
					height: auto;
					padding: 25px 15px;
					margin: 50px auto;
				}
				.underline {
					height: 4px;
					background: ${color};
					width: 60%;
				}
				
				@media (min-width:768px){
					.description-text{
						height:510px!important;
					}
					.technologies{
						
						left:0;
						right:0;
						margin:auto;
						padding-bottom:50px;
						display:block;
					}
					.technologies > .custom-wrapper{
						width:90%;
					}
					.technologies > .custom-wrapper > h2{
						margin:30px auto;
						margin-left:0;
						padding-left:0;
						
					}
					.content{
						display:flex;
						flex-direction:row;
						justify-content:flex-start;
						align-items:flex-start;
						padding-bottom:50px;
					}
					.icons{
						
						padding:15px;
						padding-top:0;
						padding-left:0;
						display:flex;
						justify-content:flex-start;
						align-items:flex-start;
						flex-wrap:wrap;
						margin:0;
					
					}
					.icon{
						height:120px;
						width:40%;
						margin:5px 15px;
						
						margin-left:0;
					}
					.icon:nth-child(1),
					.icon:nth-child(2){
						margin-top:0;
					}
					.description,
					.icons{
						background:none;
						height:100%;
						width:100%;
					}
					.description-text{
						height:100%;
						margin:auto;
						width:100%;
						margin-bottom:50px;
					}
					
				}
			`}</style>
    </section>
  );
};

export default Technologies;
