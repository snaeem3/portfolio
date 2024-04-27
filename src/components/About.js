import { v4 as uuidv4 } from 'uuid';
import { skills } from '../skills';

const About = () => (
  <section className="about-container" id="about">
    <h2 className="section-header">About Me</h2>
    <div className="about-content">
      <div className="about-text">
        <p>
          I'm a versatile engineer based in the United States. I've cultivated
          problem-solving skills since 2014 through various programming and
          mechanical engineering projects. My journey began with MATLAB and has
          evolved into <strong>software development</strong> and beyond.
        </p>
        <p>
          Armed with a robust foundation in mechanical engineering and a growing
          expertise in software design principles, I'm eager to apply my
          analytical mindset and proven problem-solving skills to software
          engineering teams.
        </p>
      </div>
      <div className="skills-container box-shadow">
        <h2 className="skills-header">Skills</h2>
        <ul className="skills-list">
          {skills.map((skill) => (
            <li className="skill" key={uuidv4()}>
              <img src={skill.src} alt={skill.name} className="dev-logo" />
              <p>{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
