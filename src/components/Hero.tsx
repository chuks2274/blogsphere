import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6">
            <span className="badge bg-primary mb-3 px-3 py-2">
              🚀 Modern Tech Blog
            </span>

            <h1 className="display-4 fw-bold mb-4">
              Discover Articles That Inspire Developers
            </h1>

            <p className="lead text-secondary mb-4">
              Stay up to date with the latest trends in React, TypeScript,
              JavaScript, CSS, UI/UX, and modern web development. Explore
              practical tutorials, coding tips, and career advice written for
              developers of all skill levels.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="#blogs" className="btn btn-primary btn-lg px-4">
                Explore Articles
              </a>

              <a
                href="#newsletter"
                className="btn btn-outline-dark btn-lg px-4"
              >
                Subscribe
              </a>
            </div>

            {/* Statistics */}
            <div className="row mt-5 text-center text-lg-start">
              <div className="col-4">
                <h3 className="fw-bold text-primary">100+</h3>
                <p className="text-muted mb-0">Articles</p>
              </div>

              <div className="col-4">
                <h3 className="fw-bold text-primary">25K+</h3>
                <p className="text-muted mb-0">Readers</p>
              </div>

              <div className="col-4">
                <h3 className="fw-bold text-primary">12+</h3>
                <p className="text-muted mb-0">Categories</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <div className="hero-card shadow-lg rounded-4 p-4 bg-white">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
                alt="Developer working on a laptop"
                className="img-fluid rounded-4"
              />

              <div className="mt-4">
                <span className="badge bg-success mb-2">
                  Featured This Week
                </span>

                <h3 className="fw-bold">
                  Master React & TypeScript Like a Professional
                </h3>

                <p className="text-muted mb-0">
                  Learn modern development techniques with practical examples,
                  reusable components, clean architecture, and industry best
                  practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;