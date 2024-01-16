// import { useForm, ValidationError } from '@formspree/react';
import githubIcon from '../assets/iconmonstr-github-1.svg';
import emailIcon from '../assets/mail_FILL0_wght400_GRAD0_opsz48.svg';

const Contact = () => (
  <section className="Contact" id="contact">
    <h2 className="section-header">Contact</h2>
    <div className="contact-content">
      <div className="contact-info">
        <ul className="contact-icons">
          <li>
            <a
              href="https://github.com/snaeem3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="github icon" className="icon" />
              {/* https://github.com/snaeem3 */}
            </a>
          </li>
          <li>
            <a
              href="mailto:sameer4363@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={emailIcon} alt="email icon" className="icon" />
              {/* sameer4363@gmail.com */}
            </a>
          </li>
          {/* <li>LinkedIn</li> */}
        </ul>
        <div className="contact-status">
          I am currently seeking a position as either a front end, back end, or
          full stack software developer. If you're interested in learning more
          about either me or my projects, feel free to reach out to me below!
        </div>
      </div>
      <form
        target="_blank"
        action="https://formspree.io/f/moqobyyw"
        method="POST"
        className="contact-form box-shadow"
      >
        <div className="form-group">
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                // placeholder="Full Name"
                required
              />
              <div className="underline" />
              <label htmlFor="name">Name:</label>
            </div>
            <div className="col">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                // placeholder="Email Address"
                required
              />
              <div className="underline" />
              <label htmlFor="email">Email:</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col">
            <textarea
              id="message"
              // placeholder="Your Message"
              className="form-control"
              name="message"
              rows="10"
              required
            />
            <div className="underline" />
            <label htmlFor="message">Message:</label>
          </div>
        </div>
        <button type="submit" className="icon-btn">
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
