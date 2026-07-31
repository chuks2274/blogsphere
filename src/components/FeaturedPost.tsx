import React from "react";
import type { BlogPost } from "../types/Blog";

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <section id="featured" className="py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="badge bg-primary px-3 py-2">
            Featured Article
          </span>

          <h2 className="fw-bold mt-3">
            Editor's Pick
          </h2>

          <p className="text-muted">
            Explore our most popular and recommended article.
          </p>
        </div>


        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
          <div className="row g-0 align-items-center">

            {/* Image */}
            <div className="col-lg-6">
              <img
                src={post.image}
                alt={post.title}
                className="img-fluid w-100 featured-image"
              />
            </div>


            {/* Content */}
            <div className="col-lg-6">
              <div className="card-body p-4 p-lg-5">

                <span className="badge bg-success mb-3">
                  {post.category}
                </span>


                <h2 className="fw-bold mb-3">
                  {post.title}
                </h2>


                <p className="text-muted">
                  {post.summary}
                </p>


                <div className="d-flex flex-wrap gap-3 text-muted small mb-4">

                  <span>
                    <i className="bi bi-person"></i>{" "}
                    {post.author}
                  </span>

                  <span>
                    <i className="bi bi-calendar"></i>{" "}
                    {post.date}
                  </span>

                </div>


                <button className="btn btn-primary px-4 ">
                  Read Full Article
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturedPost;