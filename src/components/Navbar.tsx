import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3" href="#">
          Blog<span className="text-primary">Sphere</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link active" href="#hero">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#featured">
                Featured
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#blogs">
                Blogs
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#newsletter">
                Newsletter
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>

            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a href="#blogs" className="btn btn-primary px-4">
                Explore
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;