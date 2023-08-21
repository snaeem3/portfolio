import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { projects } from '../projectData';
import githubLogo from '../assets/iconmonstr-github-1.svg';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(projects.length <= 3);

  const liRef = useRef([]);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        // entry.target.classList.remove('in-view');
      }
    });
  };

  useEffect(() => {
    const newLiElements = liRef.current.slice(liRef.current.length - 4); // Assuming 3 is the initial count
    const observerOptions = {
      root: null, // null uses the view port
      rootMargin: '0px',
      threshold: 0.1,
    };

    newLiElements.forEach((li) => {
      const observer = new IntersectionObserver(
        handleIntersection,
        observerOptions
      );
      observer.observe(li);
    });
  }, [liRef.current.length]);

  return (
    <section className="projects" id="projects">
      <h2 className="section-header">Projects</h2>
      <ul>
        {projects
          .slice(0, showAllProjects ? undefined : 4)
          .map((project, index) => (
            <li
              // key={uuidv4()}
              ref={(el) => liRef.current.push(el)}
              className="hidden"
            >
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
      {!showAllProjects ? (
        <button
          type="button"
          className="show-more-btn icon-btn"
          onClick={(e) => setShowAllProjects(true)}
        >
          View More Projects
        </button>
      ) : null}
    </section>
  );
};

const Project = (props) => {
  const { name, description, github, live, screenshotSrc } = props;

  return (
    <div className="project box-shadow">
      <h3>{name}</h3>
      <div className="project-content">
        <img src={screenshotSrc} alt={name} className="screenshot" />
        <p>{description}</p>
        <div className="link-container">
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
      </div>
    </div>
  );
};

export default Projects;
