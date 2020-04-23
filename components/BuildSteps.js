import react, { useState, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { DiWordpress } from "react-icons/di";
const BuildSteps = ({ color }) => {
  return (
    <>
      <div className="workflow">
        <div className="custom-wrapper ">
          <h3>Click to learn more about my workflow!</h3>
        </div>
        <div className="custom-wrapper links">
          <div className="left">
            <a href="https://github.com/itsseanl/wp-boilerplate">
              <DiWordpress />
            </a>
          </div>
          <div className="right">
            <a href="https://github.com/itsseanl/NextJS-workflow">
              <FaReact />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .workflow {
          background: #fffff0;
          position: sticky;
          top: 0;
          width: 100%;
          z-index: 999;
          box-shadow: -1px 0px 8px 2px rgba(0, 0, 0, 0.3);
        }
        .workflow a {
          display: block;
        }
        * {
          color: #fff;
        }
        h3 {
          text-align: center;
          margin: 0;
          padding: 15px;
          color: #333;
        }
        .left > a > :global(svg),
        .right > a > :global(svg) {
          font-size: 36px;
          left: 0;
          right: 0;
          margin: 5px 15px;
          color: ${color};
        }
        .links {
          display: flex;
          width: 100%;
          justify-content: Center;
        }
      `}</style>
    </>
  );
};
export default BuildSteps;
