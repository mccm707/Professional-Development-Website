import { Link, NavLink } from 'react-router-dom';

const Navbar = (): JSX.Element => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container px-5">
      <Link className="navbar-brand" to="/">Start Bootstrap</Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" end>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/services" className="nav-link">Services</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
