import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import "./projects.css";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <div className="projects_filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${
                active === index ? "active-project" : ""
              } projects_item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="projects_container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
