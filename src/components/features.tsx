const Features = (): JSX.Element => (
    <section className="py-5 border-bottom" id="features">
      <div className="container px-5 my-5">
        <div className="row gx-5">
          {/* Repeatable Feature Card */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
            <h2 className="h4 fw-bolder">Today's Job Market</h2>
            <p>Today's job market is more dynamic and competitive than ever...</p>
            <a className="text-decoration-none" href="#!">Learn more <i className="bi bi-arrow-right"></i></a>
          </div>
  
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
            <h2 className="h4 fw-bolder">In-demand workplace skills</h2>
            <p>In today’s job market, soft skills are just as important as technical expertise...</p>
            <a className="text-decoration-none" href="#!">Learn more <i className="bi bi-arrow-right"></i></a>
          </div>
  
          <div className="col-lg-4">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
            <h2 className="h4 fw-bolder">Future of Work</h2>
            <p>The future of work is rapidly evolving, driven by AI, automation, and digital transformation...</p>
            <a className="text-decoration-none" href="#!">Learn more <i className="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Features;