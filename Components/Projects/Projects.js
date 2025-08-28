import data from "../data/data.js";
import "./Projects.css";

const template = () => {
  return `
  <section class="projects" id="projects">
    <h2>My Projects</h2>
    <ul>
      ${data.projects
        .map(
          (project) => `
      <li>
        <img src=${project.preview} alt=${project.title}/>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href=${project.link}>View App</a>
      </li>
      `
        )
        .join("")}
    </ul>
  </section>
  `;
};

const Projects = () => {
  return template();
};

export default Projects;