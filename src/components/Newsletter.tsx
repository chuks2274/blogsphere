import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  if (!email) {
    setMessage("Please enter your email address.");
  } else {
    setMessage("Thank you for subscribing!");
    setEmail("");
  }

  setTimeout(() => {
    setMessage("");
  }, 3000);
};

  return (
    <section id="newsletter" className="py-5">
      <div className="container">

        <div className="newsletter-box rounded-4 shadow-lg p-5 text-center">

          <span className="badge bg-primary px-3 py-2 mb-3">
            Newsletter
          </span>


          <h2 className="fw-bold mb-3">
            Stay Updated With New Articles
          </h2>


          <p className="text-muted mx-auto mb-4 newsletter-text">
            Subscribe to receive the latest tutorials, development tips,
            and technology updates directly in your inbox.
          </p>


          <form
            onSubmit={handleSubmit}
            className="row justify-content-center g-2"
          >

            <div className="col-md-7">

              <input
                type="email"
                className="form-control form-control-lg rounded-pill"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>


            <div className="col-md-auto">

              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-pill px-4"
              >
                Subscribe
              </button>

            </div>

          </form>


          {message && (
            <p className="mt-3 mb-0 text-success fw-semibold">
              {message}
            </p>
          )}

        </div>

      </div>
    </section>
  );
};

export default Newsletter;