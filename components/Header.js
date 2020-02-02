import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";
const MyHeader = () => {
  return (
    <Header>
      <h1>Sean Lyons</h1>
      <ul>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
    </Header>
  );
};

const Header = styled.header`
  background: #fffff0;
  padding: 25px 5%;
  color: #333;
  // border-bottom: 8px solid #333;
  box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  h1 {
    position: sticky;
  }
  ul {
    list-style: none;
    display: flex;
    padding-left: 0;
    li {
      padding: 0px 25px;
      font-size: 36px;
      :global(svg) {
        color: red;
      }
    }
  }
`;
export default MyHeader;
