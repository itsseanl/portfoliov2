import styled from "styled-components";

const MultiForm = formType => {
	if (!formType) {
	} else if (formType == "job") {
		let steps = "4";
	}
	return (
		<div className="multi-form">
			<div className="tlwrapper">
				<StepIndicator>
					<div className="step active-step">
						<div className="marker">1</div>
					</div>
					<div className="step ">
						<div className="marker">2</div>
					</div>

					<div className="step ">
						<div className="marker">3</div>
					</div>
					<div className="step ">
						<div className="marker">4</div>
					</div>
				</StepIndicator>
			</div>
			<form>
				<div className="slide active-slide" id="slide1">
					<p>How many repples is the bag of bobbish worth?</p>
					<input type="text" placeholder="repples???"></input>
					<button className="btn"></button>
				</div>
				<div className="slide" id="slide2">
					<p>How many repples is the plumbus worth?</p>
					<input type="text" placeholder="repples???"></input>{" "}
				</div>
				<div className="slide" id="slide3">
					<p>How many repples are the crushed red party cups worth?</p>
					<input type="text" placeholder="repples???"></input>{" "}
				</div>
			</form>
			<style jsx>{`
				.multi-form {
					height: 100%;
					width: 100%;
					display: block;
				}
				.slide {
					opacity: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
				input,
				button,
				.active-slide {
					opacity: 1;
				}
			`}</style>
		</div>
	);
};
const StepIndicator = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-evenly;

	.step {
		flex: 1 0 auto;
		background: #d0d0d0;
		margin-right: 25px;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
	}
	.marker {
		height: 25px;
	}

	.step::before {
		content: "";
		position: relative;
		left: 00px;
		width: 0;
		height: 0;
		border-top: 25px solid transparent;
		border-bottom: 25px solid transparent;

		border-left: 25px solid #fff;
	}
	.step::after {
		content: "";
		position: relative;
		right: -25px;
		width: 0;
		height: 0;
		border-top: 25px solid transparent;
		border-bottom: 25px solid transparent;

		border-left: 25px solid #d0d0d0;
	}

	.active-step {
		background: #1a71c1;
	}
	.active-step::after {
		border-left: 25px solid #1a71c1 !important;
	}
`;

export default MultiForm;
