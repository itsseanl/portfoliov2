import React from "react";
import { Formik } from "formik";

const ContactForm = () => {
	return (
		<>
			<Formik
				initialValues={{ name: "", email: "", message: "" }}
				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "Invalid email address";
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting
					/* and other goodies */
				}) => (
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							onChange={handleChange}
							value={values.name}
							placeholder="name"
						></input>
						<input
							type="email"
							name="email"
							onChange={handleChange}
							value={values.email}
							placeholder="email"
						></input>
						<textarea
							name="message"
							onChange={handleChange}
							value={values.message}
							placeholder="Message..."
						></textarea>
						<button type="submit" value="submit">
							Submit
						</button>
					</form>
				)}
			</Formik>
			<style jsx>{`
				button {
					background: #fffff0;
					font-family: "Ubuntu", sans-serif;
					font-size: 18px;
					font-weight: 600;
					width: 100%;
					padding: 15px;
					margin: 5px 0;
				}
				form {
					background: #333;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin: 15px auto;
				}
				input,
				textarea {
					width: 100%;
					margin: 5px 0;
					padding: 15px;
					font-size: 16px;
					resize: none;
					border: none;
				}
				textarea {
					height: 200px;
				}
			`}</style>
		</>
	);
};

export default ContactForm;
