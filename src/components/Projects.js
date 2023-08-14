import { projects } from '../projectData';

const Projects = () => (
  <section className="projects">
    <h2 className="section-header">Projects</h2>
    <ul>
      {projects.map((project) => (
        <li>
          <Project
            name={project.name}
            description={project.description}
            github={project.github}
            live={project.live}
            screenshotSrc={project.screenshotSrc}
          />
        </li>
      ))}
    </ul>
  </section>
);

const Project = (props) => {
  const { name, description, github, live, screenshotSrc } = props;
  console.log(screenshotSrc);

  return (
    <div className="project">
      <h3>{name}</h3>
      <img src={screenshotSrc} alt={name} className="screenshot" />
      <p>{description}</p>
      <button type="button">
        <a href={live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </button>
    </div>
  );
};

export default Projects;
