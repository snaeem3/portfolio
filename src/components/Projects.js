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
          />
        </li>
      ))}
    </ul>
  </section>
);

const Project = (props) => {
  const { name, description, github, live } = props;

  return (
    <div className="project">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Projects;
