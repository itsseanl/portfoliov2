import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ value }) => {
	return (
		<SyntaxHighlighter language={"jsx"} style={atomDark}>
			{value}
		</SyntaxHighlighter>
	);
};
export default CodeBlock;
