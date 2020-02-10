import MultiForm from "../components/MultiForm";

const MultiFormTest = () => {
	return (
		<div className="form-test">
			<MultiForm />
			<style jsx>{`
				.form-test {
					height: 500px;
					width: 100%;
				}
			`}</style>
		</div>
	);
};

export default MultiFormTest;
