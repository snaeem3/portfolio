import githubIcon from '../assets/iconmonstr-github-1.svg';
import emailIcon from '../assets/mail_FILL0_wght400_GRAD0_opsz48.svg';

const Contact = () => (
  <section className="Contact" id="contact">
    <h2 className="section-header">Contact</h2>
    <ul className="contact-icons">
      <li>
        <a
          href="https://github.com/snaeem3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="github icon" className="icon" />
        </a>
      </li>
      <li>
        <a
          href="mailto:sameer4363@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={emailIcon} alt="email icon" className="icon" />
        </a>
      </li>
      {/* <li>LinkedIn</li> */}
    </ul>
    <div className="contact-status">
      I am currently seeking a position as either a front end, back end, or full
      stack web developer. If you're interested in learning more about either me
      or my projects, feel free to reach out to me below!
    </div>
    <form
      target="_blank"
      action="https://formsubmit.co/sameer4363@gmail.com"
      method="POST"
      className="contact-form"
    >
      <div className="form-group">
        <div className="form-row">
          <div className="col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          placeholder="Your Message"
          className="form-control"
          name="message"
          rows="10"
          required
        />
      </div>
      <button type="submit" className="icon-btn">
        Submit
      </button>
    </form>
  </section>
);

export default Contact;
