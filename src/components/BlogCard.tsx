import React from "react";
import type{ BlogPost } from "../types/Blog";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden blog-card">

        {/* Blog Image */}
        <img
          src={post.image}
          alt={post.title}
          className="card-img-top blog-image"
        />


        {/* Blog Content */}
        <div className="card-body d-flex flex-column p-4">

          <div className="mb-3">
            <span className="badge bg-primary">
              {post.category}
            </span>
          </div>


          <h5 className="card-title fw-bold">
            {post.title}
          </h5>


          <p className="card-text text-muted">
            {post.summary}
          </p>


          <div className="mt-auto">

            <div className="d-flex justify-content-between align-items-center mb-3 text-muted small">

              <span>
                <i className="bi bi-person"></i>{" "}
                {post.author}
              </span>

              <span>
                <i className="bi bi-calendar"></i>{" "}
                {post.date}
              </span>

            </div>

            <div className="d-flex justify-content-center"> 
            <button className="btn btn-outline-primary btn-sm rounded-pill">
              Read More
            </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogCard;