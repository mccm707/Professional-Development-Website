const ContactForm = (): JSX.Element => (
    <section className="bg-light py-5">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3">
            <i className="bi bi-envelope"></i>
          </div>
          <h2 className="fw-bolder">Get in touch</h2>
          <p className="lead mb-0">We'd love to hear from you</p>
        </div>
  
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <form id="contactForm">
              {/* Name */}
              <div className="form-floating mb-3">
                <input className="form-control" id="name" type="text" placeholder="Enter your name..." required />
                <label htmlFor="name">Full name</label>
                <div className="invalid-feedback">A name is required.</div>
              </div>
  
              {/* Email */}
              <div className="form-floating mb-3">
                <input className="form-control" id="email" type="email" placeholder="name@example.com" required />
                <label htmlFor="email">Email address</label>
                <div className="invalid-feedback">A valid email is required.</div>
              </div>
  
              {/* Phone */}
              <div className="form-floating mb-3">
                <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" required />
                <label htmlFor="phone">Phone number</label>
                <div className="invalid-feedback">A phone number is required.</div>
              </div>
  
              {/* Message */}
              <div className="form-floating mb-3">
                <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{ height: '10rem' }} required></textarea>
                <label htmlFor="message">Message</label>
                <div className="invalid-feedback">A message is required.</div>
              </div>
  
              {/* Submit Button */}
              <div className="d-grid">
                <button className="btn btn-primary btn-lg" id="submitButton" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default ContactForm;
  