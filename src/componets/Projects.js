import React from "react";
import "../styles/css/projects.min.css";
import image from "../assets/image2.jpg";
import { data } from "../data/ProjectsData";
import { useNavigate, useParams } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="projects">
      <div className="projects-flex container">
        <h2>Check out my projects</h2>
        <div className="grid">
          {data.map((item, index) => (
            <div className="img" key={index}>
              <button
                onClick={() => {
                  navigate(`/projects/${index}`);
                }}
              >
                explore
              </button>
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
