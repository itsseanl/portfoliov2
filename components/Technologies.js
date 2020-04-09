import { FaDocker, FaReact, FaGulp } from "react-icons/fa";
import {
	DiVisualstudio,
	DiGithubBadge,
	DiSass,
	DiStackoverflow,
	DiWordpress
} from "react-icons/di";
import { useState } from "react";

const Technologies = () => {
	const [accentColor, setAccentColor] = useState("#333");
	const [descriptionText, setDescriptionText] = useState(
		"Curabitur semper congue nisi volutpat vestibulum. Etiam vitae dui dui. Etiam condimentum pellentesque quam id dapibus. Suspendisse pulvinar porta dapibus. Nam hendrerit mi ac volutpat dignissim. Suspendisse potenti. Sed tempus scelerisque tortor, vitae tincidunt nulla. Quisque sagittis erat urna, vel volutpat est iaculis vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris molestie tellus lectus, eu vulputate orci dapibus nec. Phasellus tempor ipsum non risus fermentum, et rutrum magna mattis. Donec eleifend porta eros. Integer vel justo dignissim elit tempor blandit. Nunc ut tortor in erat elementum pretium. Duis ut ex vel erat venenatis fermentum elementum sit amet massa. Etiam semper urna vestibulum, pretium tortor vestibulum, dictum dui."
	);
	const [descriptionTitle, setDescriptionTitle] = useState("VS Code");

	const setTechs = (color, text, title) => {
		setAccentColor(color);
		setDescriptionTitle(title);
		setDescriptionText(text);
	};
	return (
		<section className="technologies">
			<div className="custom-wrapper">
			<h2 className="section-heading">The Essentials</h2>
			<div className="content">
			<div className="icons">
				<div
					className="icon"
					id="vscode"
					onFocus={() =>
						setTechs(
							"#272935",
							"Curabitur semper congue nisi volutpat vestibulum. Etiam vitae dui dui. Etiam condimentum pellentesque quam id dapibus. Suspendisse pulvinar porta dapibus. Nam hendrerit mi ac volutpat dignissim. Suspendisse potenti. Sed tempus scelerisque tortor, vitae tincidunt nulla. Quisque sagittis erat urna, vel volutpat est iaculis vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris molestie tellus lectus, eu vulputate orci dapibus nec. Phasellus tempor ipsum non risus fermentum, et rutrum magna mattis. Donec eleifend porta eros. Integer vel justo dignissim elit tempor blandit. Nunc ut tortor in erat elementum pretium. Duis ut ex vel erat venenatis fermentum elementum sit amet massa. Etiam semper urna vestibulum, pretium tortor vestibulum, dictum dui.",
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
						setTechs(
							"#032144",
							"Maecenas et lectus sapien. Aliquam neque elit, suscipit eu tincidunt quis, fermentum sed metus. Vivamus pretium elementum facilisis. Nullam ac mollis elit. Donec rhoncus pulvinar justo, nec accumsan ligula tincidunt id. Sed non enim posuere, condimentum leo quis, viverra est. Morbi ac mattis ipsum. Praesent laoreet nisi non justo commodo, vitae fermentum metus ultricies. Quisque neque erat, tincidunt at mauris vel, vulputate tempor nisi. Curabitur et tincidunt diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
						setTechs(
							"#29B1EF",
							"Aliquam eget finibus erat, mattis eleifend dui. Ut tempus ullamcorper justo non volutpat. Duis imperdiet pellentesque orci id feugiat. Duis fringilla, nulla sed porta porttitor, mi elit interdum elit, sit amet rutrum nunc enim ac elit. Morbi a condimentum augue, at gravida turpis. Suspendisse semper orci nunc, id faucibus ante vehicula vitae. Ut mattis felis sed nunc bibendum consequat. Vivamus tincidunt nibh vel libero pretium tincidunt. In nunc enim, lobortis sit amet vehicula ut, hendrerit vitae tellus.",
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
						setTechs(
							"#2DBD4E",
							"Duis vel varius nibh, nec malesuada turpis. Quisque mollis maximus felis eu tempor. Praesent nec tristique lacus, vel gravida odio. Mauris ac maximus tellus. Sed eu risus nunc. Nulla cursus semper rhoncus. Donec vitae neque purus. Nunc iaculis tellus at molestie finibus. Sed in tincidunt odio. Sed et turpis ac tortor luctus eleifend a eget est.",
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
						setTechs(
							"#CF649A",
							"Nulla non augue a massa egestas sagittis quis sit amet urna. Duis vitae quam id dui fermentum lacinia. Pellentesque vel ante id nisl viverra dictum eu sed ex. Vivamus purus lacus, iaculis molestie lorem sit amet, pulvinar gravida libero. Cras tincidunt, turpis eget maximus consequat, mauris sapien bibendum lacus, ut pulvinar elit diam non sapien. Nunc placerat purus malesuada accumsan viverra. Vestibulum convallis justo eu urna dictum, at fringilla sem auctor.",
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
						setTechs(
							"#F48025",
							"Fusce arcu magna, congue vel gravida in, dictum a erat. Aenean vestibulum augue quis lobortis porttitor. Integer ante urna, elementum id porttitor quis, efficitur ut libero. Sed eget feugiat urna. Phasellus in posuere orci. Mauris sollicitudin urna quis risus semper commodo. Mauris ullamcorper mi et nunc sagittis, a molestie neque consequat. Aliquam pretium pulvinar sem, eu laoreet nisl vehicula luctus. Proin ante elit, vestibulum at neque faucibus, scelerisque viverra ante. Nullam facilisis nisi eget tortor iaculis porttitor.",
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
						setTechs(
							"#D7DADE",
							"Ut accumsan lectus a enim pulvinar vulputate. Vestibulum vulputate lectus quis quam mollis bibendum. Proin malesuada mollis velit, id tempus augue tincidunt ut. Ut hendrerit nulla id augue euismod, sed pretium purus fringilla. Proin sit amet convallis mi. Sed ornare condimentum sapien, in ullamcorper nibh gravida non. Praesent arcu enim, vestibulum ut lacus suscipit, facilisis rutrum est. Donec fermentum erat arcu, ac dapibus nisi vestibulum sit amet. Morbi sed tincidunt odio. Aliquam bibendum molestie odio, condimentum tristique sapien vulputate nec. Vestibulum vitae malesuada nisl. Mauris varius a nulla at malesuada.",
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
						setTechs(
							"#D7DADE",
							"Ut accumsan lectus a enim pulvinar vulputate. Vestibulum vulputate lectus quis quam mollis bibendum. Proin malesuada mollis velit, id tempus augue tincidunt ut. Ut hendrerit nulla id augue euismod, sed pretium purus fringilla. Proin sit amet convallis mi. Sed ornare condimentum sapien, in ullamcorper nibh gravida non. Praesent arcu enim, vestibulum ut lacus suscipit, facilisis rutrum est. Donec fermentum erat arcu, ac dapibus nisi vestibulum sit amet. Morbi sed tincidunt odio. Aliquam bibendum molestie odio, condimentum tristique sapien vulputate nec. Vestibulum vitae malesuada nisl. Mauris varius a nulla at malesuada.",
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
				.section-heading {
					position: sticky;
					top: 0px;
					z-index: 1;
					background: ${accentColor};
					width: 100%;
				}
				.technologies {
					background: ${accentColor};
					padding-top: 40px;
				}
				.technologies > .custom-wrapper{
					width:100%;
				}
				.technologies > .custom-wrapper > .content{
					width:100%;
					margin:0;
					padding:0;
				}
				.technologies > .custom-wrapper > h2 {
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
					background: ${accentColor};
					overflow: visible;
					background: ${accentColor};
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
					background: ${accentColor};
				}
				.description {
/* 					background-image: linear-gradient(${accentColor} 50%, #fff 50%); */
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
					background: ${accentColor};
					width: 60%;
				}
				
				@media (min-width:768px){
					.technologies{
						max-width:1200px;
						left:0;
						right:0;
						margin:auto;
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
