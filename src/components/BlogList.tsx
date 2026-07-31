import React from "react";
import type { BlogPost } from "../types/Blog";
import BlogCard from "./BlogCard";

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <section id="blogs" className="py-5">
      <div className="container">

        {/* Section Header */}
        <div className="text-center mb-5">

          <span className="badge bg-primary px-3 py-2">
            Latest Articles
          </span>

          <h2 className="fw-bold mt-3">
            Explore Our Blog
          </h2>

          <p className="text-muted">
            Discover tutorials, guides, and insights about modern technology.
          </p>

        </div>


        {/* Blog Cards */}
        {posts.length > 0 ? (

          <div className="row g-4">

            {posts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
              />
            ))}

          </div>

        ) : (

          /* Empty State */
          <div className="text-center py-5">

            <div className="display-4 mb-3">
              🔍
            </div>

            <h4 className="fw-bold">
              No Articles Found
            </h4>

            <p className="text-muted">
              Try searching for another topic or category.
            </p>

          </div>

        )}

      </div>
    </section>
  );
};

export default BlogList;