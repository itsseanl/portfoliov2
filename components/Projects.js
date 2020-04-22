import react, { useState, useEffect, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Projects = ({ color }) => {
  const [projects, setProjects] = useState([
    {
      title: "UltimateStarterPacks",
      body:
        "Ultimate Starter Packs is a pet project that I've been using to explore SEO and marketing on my own. I've also learned a great deal by building it in NextJS! You can find more information in the Github repo readme.",
      class: "project active",
      liveLink: "https://ultimatestarterpacks.com",
      codeLInk: "https://github.com/itsseanl/ultimatestarterpacks",
      img: "/img/usp.png"
    },
    {
      title: "OpenWeatherMap API",
      body: "blahblahblah",
      class: "project",
      liveLink: "https://openweathermap.now.sh",
      codeLInk: "/",
      img: "/img/owmsmaller.png"
    },

    {
      title: "Spotify Visualizer",
      body: "blahblahblah",
      class: "project",

      liveLink: "https://openweathermap.now.sh",
      codeLInk: "/",
      img: "/img/owm.png"
    },
    {
      title: "4",
      body: "blahblahblah",
      class: "project",

      liveLink: "https://openweathermap.now.sh",
      codeLInk: "/",
      img: "/img/owm.png"
    }
  ]);
  const [scroll, setScroll] = useState(0);
  const projectWrapper = useRef(null);
  const handleSlider = direction => {
    console.log((projects.length - 1) * 80);
    if (direction == "left") {
      if (scroll == 0) {
        setScroll(-(projects.length - 1) * 80);
      } else {
        setScroll(scroll + 80);
      }
    } else if (direction == "right") {
      if (scroll <= 0 && scroll > -(projects.length - 1) * 80) {
        setScroll(scroll - 80);
      } else {
        setScroll(0);
      }
    }
  };
  console.log(projects);
  return (
    <>
      <div className="custom-wrapper">
        <h2>Projects</h2>
      </div>
      <div className="wrap">
        <div className="left-click" onClick={e => handleSlider("left")}>
          <BsChevronLeft />
        </div>
        <div className="projects" ref={projectWrapper}>
          {projects &&
            projects.map(project => {
              return (
                <div className={project.class}>
                  <div className="left">
                    <h2>{project.title}</h2>
                    <div className="underline"></div>
                    <p>{project.body}</p>
                    <div className="btns">
                      <a href={project.codeLink} className="btn code">
                        Code
                      </a>
                      <a href={project.liveLink} className="btn live">
                        Live Project
                      </a>
                    </div>
                  </div>
                  <div className="right">
                    <img src={project.img} />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="right-click" onClick={e => handleSlider("right")}>
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
          overflow-x: hidden;
        }
        .underline {
          width: 50%;
          left: 0;
          right: 0;
          margin: auto;
        }
        .left-click,
        .right-click {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 36px;
          width: 10vw;
          position: relative;
          z-index: 99;
          background: #fff;
          color: ${color};
        }
        .projects {
          width: 80vw;
          display: flex;
          flex-wrap: nowrap;
          height: 500px;
          max-height: 500px;
          transform: translateX(${scroll}vw);
          transition: 0.3s all;
        }
        .project {
          width: 80vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: 0.3s all;
          height: 500px;
          max-height: 500px;
        }

        .left {
          display: flex;
          flex-direction: column;
          text-align: center;
          padding: 15px;
        }
        .right {
          width: 0;
          overflow: hidden;
        }
        img {
          object-fit: cover;
          box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.3);
          max-height: 500px;
        }
        .btns {
          padding: 15px;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .btn {
          background: #fff;
          padding: 5px;
          margin: 5px;
          text-decoration: none;
          width: 150px;
          color: #333;
          text-align: center;
          font-family: "Lobster", sans-serif;
          cursor: pointer;
        }
        .code {
          border: 2px solid ${color};
          color: ${color};
          background: #fffff0;
        }
        .code:hover {
          background: ${color};
          color: #fff;
        }
        .live {
          color: #fffff0;
          background: ${color};
        }
        .live:hover {
          background: #fffff0;
          color: ${color};
          border: ${color};
        }

        @media (max-width: 768px) {
          .right {
            display: none;
          }
        }
        @media (min-width: 768px) {
          .wrap {
            margin: 0;
            padding-bottom: 0;
          }
          .project {
            flex-direction: row;
          }
          .left {
            padding: 50px;
          }
          .left,
          .right {
            width: 40vw;

            display: flex !important;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
};
export default Projects;
