const Header = (): JSX.Element => (
    <header className="bg-dark py-5">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-6">
            <div className="text-center my-5">
              <h1 className="display-5 fw-bolder text-white mb-2">
                Professional Development Website
              </h1>
              <p className="lead text-white-50 mb-4">
                Are you looking to enhance your professional skills and stand out in today’s competitive job market? You’ve come to the right place.
              </p>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">
                <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Learn more</a>
                <a className="btn btn-outline-light btn-lg px-4" href="#!">Get started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
  
  export default Header;