import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { osContributions } from '../openSourceContData';
import githubLogo from '../assets/iconmonstr-github-1.svg';

const OpenSource = () => {
  const [showAllProjects, setShowAllProjects] = useState(true); // Change 'true' when contributions increase

  const liRef = useRef([]);

  useEffect(() => {
    console.log(osContributions[0]);
    const newLiElements = liRef.current.slice(
      liRef.current.length - osContributions.length
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
    <section className="projects open-source" id="open-source">
      <h2 className="section-header">Open Source Contributions</h2>
      <ul className="overflow-x-hidden">
        {osContributions
          .slice(0, !showAllProjects ? 4 : undefined)
          .map((project, index) => (
            <li
              key={index}
              ref={(el) => liRef.current.push(el)}
              className="hidden"
            >
              <div className="project-wrapper">
                <OpenSourceProject
                  organization={project.organization}
                  name={project.name}
                  description={project.description}
                  contributionDescription={project.contribution}
                  pullRequests={project.pullRequests}
                  live={project.live}
                  screenshotSrc={project.screenshotSrc}
                  techStack={project.techStack}
                />
              </div>
            </li>
          ))}
      </ul>
      {/* {!showAllProjects ? (
        <button
          type="button"
          className="show-more-btn icon-btn"
          onClick={(e) => setShowAllProjects(true)}
        >
          View More Projects
        </button>
      ) : null} */}
    </section>
  );
};

const OpenSourceProject = (props) => {
  const {
    organization,
    name,
    description,
    contributionDescription,
    pullRequests,
    live,
    screenshotSrc,
    techStack,
  } = props;

  return (
    <div className="project box-shadow">
      <h3>
        {organization} - <em>{name}</em>
      </h3>
      <div className="project-content">
        <div className="project-main-content two-column grid">
          <img
            src={screenshotSrc}
            alt={name}
            className="screenshot box-shadow"
          />
          <div className="open-source-info">
            <div className="open-source-text-content">
              <p className="description">
                <strong>Project Description:</strong> {description}
              </p>
              <p className="contribution-description">
                <strong>My Contributions:</strong> {contributionDescription}
              </p>
            </div>
            <ul className="project-tech-stack">
              {techStack.map((techName, index) => (
                <li key={index} className="tech-bubble">
                  {techName}
                </li>
              ))}
            </ul>
            <div className="link-container">
              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer">
                  <button type="button" className="live-btn icon-btn">
                    Live Site
                  </button>
                </a>
              )}
              <a href={pullRequests} target="_blank" rel="noopener noreferrer">
                <button type="button" className="github-btn icon-btn">
                  Pull Requests
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSource;
