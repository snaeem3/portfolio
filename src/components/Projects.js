import { projects } from '../projectData';
import githubLogo from '../assets/iconmonstr-github-1.svg';

const Projects = () => (
  <section className="projects" id="projects">
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
      <a href={live} target="_blank" rel="noopener noreferrer">
        <button type="button" className="live-btn icon-btn">
          Live Demo
        </button>
      </a>
      <a href={github} target="_blank" rel="noopener noreferrer">
        <button type="button" className="github-btn icon-btn">
          Repository
        </button>
      </a>
    </div>
  );
};

export default Projects;
