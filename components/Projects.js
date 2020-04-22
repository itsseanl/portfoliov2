import react, { useState, useEffect, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Projects = () => {
	const projectNum = 3;

	return (
		<>
			<div className="custom-wrapper">
				<h2>Projects</h2>
			</div>
			<div className="wrap">
				<div className="left-click">
					<BsChevronLeft />
				</div>
				<div className="projects">
					<div className="project">
						<div className="left">
							<h2>OpenWeatherMap API</h2>
							<p>blahblahblah</p>
							<div className="btns">
								<a href="" className="btn code">
									Code
								</a>
								<a href="https://openweathermap.now.sh/" className="btn live">
									Live Project
								</a>
							</div>
						</div>
						<div className="right">
							<img src="./img/owm.png" />
						</div>
					</div>
					<div className="project">
						<div className="left">
							<h2>OpenWeatherMap API</h2>
							<p>blahblahblah</p>
						</div>
						<div className="right">
							<img src="./img/owm.png" />
						</div>
					</div>
					<div className="project">
						<div className="left">
							<h2>OpenWeatherMap API</h2>
							<p>blahblahblah</p>
						</div>
						<div className="right">
							<img src="./img/owm.png" />
						</div>
					</div>
				</div>
				<div className="right-click">
					<BsChevronRight />
				</div>
			</div>

			<style jsx>{`
				.wrap {
					width: 100%;
					display: flex;
					flex-wrap: nowrap;
					padding-top: 50px;
					padding-bottom: 50px;
				}

				.left-click,
				.right-click {
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 36px;
					width: 10vw;
				}
				.projects {
					width: 80vw;
					overflow: hidden;
					display: flex;
					flex-wrap: nowrap;
					height: auto;
				}
				.project {
					width: 80vw;
					height: auto;
					flex: 1 0 auto;
				}
				.left {
					display: flex;
					flex-direction: column;
				}
				.right {
					width: 0;
					border-radius: 50px;
					overflow: hidden;
					box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.3);
				}
				img {
					width: 100%;
					height: auto;
				}
				.btns {
					padding: 15px;
					width: 100%;
					display: flex;
					justify-content: center;
				}

				.btn {
					background: #fff;
					border: 2px solid #333;
					padding: 5px;
					margin: 5px;
					text-decoration: none;
					width: 150px;
					color: #333;
				}

				@media (max-width: 768px) {
					.left {
						text-align: center;

						justify-content: center;
						align-items: center;
					}
					.right {
						display: none;
					}
				}
			`}</style>
		</>
	);
};
export default Projects;
