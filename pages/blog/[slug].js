import react, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Post = ({ content }) => {
  console.log(content);
  return (
    <>
      <p>Test</p>
      <ReactMarkdown source={content.default} />
    </>
  );
};
Blog.getInitialProps = async ({ req }) => {
  const content = await require("../../posts/test.md");
  return { content };
};
export default Post;
