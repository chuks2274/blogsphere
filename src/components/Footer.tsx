import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-dark text-white py-5">

      <div className="container">

        <div className="row g-4">

          {/* Brand */}
          <div className="col-lg-4">

            <h3 className="fw-bold">
              Blog<span className="text-primary">Sphere</span>
            </h3>

            <p className="text-light opacity-75">
              A modern technology blog sharing articles about React,
              TypeScript, JavaScript, web development, and software
              engineering best practices.
            </p>

          </div>


          {/* Quick Links */}
          <div className="col-md-4 col-lg-2">

            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <a
                  href="#hero"
                  className="text-white text-decoration-none opacity-75"
                >
                  Home
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#featured"
                  className="text-white text-decoration-none opacity-75"
                >
                  Featured
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="#blogs"
                  className="text-white text-decoration-none opacity-75"
                >
                  Articles
                </a>
              </li>

              <li>
                <a
                  href="#newsletter"
                  className="text-white text-decoration-none opacity-75"
                >
                  Newsletter
                </a>
              </li>

            </ul>

          </div>


          {/* Categories */}
          <div className="col-md-4 col-lg-3">

            <h5 className="fw-bold mb-3">
              Categories
            </h5>

            <ul className="list-unstyled text-light opacity-75">

              <li className="mb-2">
                React Development
              </li>

              <li className="mb-2">
                TypeScript
              </li>

              <li className="mb-2">
                JavaScript
              </li>

              <li>
                UI/UX Design
              </li>

            </ul>

          </div>


          {/* Social Media */}
          <div className="col-md-4 col-lg-3">

            <h5 className="fw-bold mb-3">
              Follow Us
            </h5>

            <div className="d-flex gap-3">

              <a
                href="#"
                className="text-white fs-4"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="#"
                className="text-white fs-4"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="#"
                className="text-white fs-4"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="#"
                className="text-white fs-4"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

            </div>

          </div>

        </div>


        <hr className="my-4 opacity-25" />


        <div className="text-center">

          <p className="mb-0 text-light opacity-75">
            © {new Date().getFullYear()} BlogSphere. All rights reserved.
          </p>

        </div>


      </div>

    </footer>
  );
};

export default Footer;