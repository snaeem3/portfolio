const Contact = () => (
  <section className="Contact">
    <h2 className="section-header">Contact</h2>
    <div className="contact-status">
      I am currently seeking a position as either a front end, back end, or full
      stack web developer. If you're interested in learning more about either me
      or my projects, feel free to reach out to me below!
    </div>
    <form
      target="_blank"
      action="https://formsubmit.co/sameer4363@gmail.com"
      method="POST"
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
      <button type="submit" className="btn btn-lg btn-dark btn-block">
        Submit Form
      </button>
    </form>
  </section>
);

export default Contact;
