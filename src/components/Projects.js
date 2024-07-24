import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { projects } from '../projectData';
import githubLogo from '../assets/iconmonstr-github-1.svg';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(projects.length <= 4);

  const liRef = useRef([]);

  useEffect(() => {
    const newLiElements = liRef.current.slice(
      liRef.current.length - projects.length
    );
    const observerOptions = {
      root: null, // null uses the view port
      rootMargin: '0px', // makes the container bigger or smaller
      threshold: 0.25, // % of the element that needs to be visible
    };

    newLiElements.forEach((li) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            entry.target.classList.remove('hidden');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      observer.observe(li);
    });
  }, [liRef.current.length]);

  return (
    <section className="projects" id="projects">
      <h2 className="section-header">Projects</h2>
      <ul className="overflow-x-hidden two-column">
        {projects
          .slice(0, !showAllProjects ? 4 : undefined)
          .map((project, index) => (
            <li
              key={index}
              ref={(el) => liRef.current.push(el)}
              className="hidden"
            >
              <div className="project-wrapper">
                <Project
                  name={project.name}
                  description={project.description}
                  github={project.github}
                  live={project.live}
                  screenshotSrc={project.screenshotSrc}
                />
              </div>
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
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <button type="button" className="live-btn icon-btn">
                Live Demo
              </button>
            </a>
          )}
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
