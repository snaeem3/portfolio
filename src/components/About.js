import { skills } from '../skills';

const About = () => (
  <section className="about-container" id="about">
    <h2 className="section-header">About Me</h2>
    <div className="about-content">
      <div className="about-text">
        <p>
          I'm a versatile engineer on the East Coast of the United States. I've
          cultivated problem-solving skills since 2014 through various
          programming and mechanical engineering projects. My journey began with
          Matlab and has evolved into <strong>web development</strong> and
          beyond.
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
            <li className="skill">
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
