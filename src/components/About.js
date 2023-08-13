import { skills } from '../skills';

const About = () => (
  <section className="about">
    <h2 className="section-header">About Me</h2>
    <div className="about-content">
      <p>
        I'm a versatile engineer on the East Coast of the United States. I've
        cultivated problem-solving skills since 2014 through various programming
        projects. My journey began with Matlab and has evolved into web
        development and beyond.
      </p>
      <p>
        Armed with a robust foundation in mechanical engineering and a growing
        expertise in software design principles, I'm eager to apply my
        analytical mindset and proven problem-solving skills to software
        engineering teams.
      </p>
    </div>
    <div className="skills-container">
      <h3 className="skills-header">Skills</h3>
      <ul>
        {skills.map((skill) => (
          <li>
            <p>{skill.name}</p>
            <img src={skill.src} alt={skill.name} className="dev-logo" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default About;
