import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
}) => {
  return (
    <section className="py-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-4">

                <label
                  htmlFor="search"
                  className="form-label fw-semibold"
                >
                  Search Articles
                </label>

                <div className="input-group">

                <button
                type="button"
                className="input-group-text bg-white border-end-0"
                >
                <i className="bi bi-search"></i>
                </button>

                  <input
                    id="search"
                    type="text"
                    className="form-control"
                    placeholder="Search by article title..."
                    value={searchTerm}
                    onChange={(e) =>
                      onSearchChange(e.target.value)
                    }
                  />

                  {searchTerm && (
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => onSearchChange("")}
                    >
                      Clear
                    </button>
                  )}

                </div>

                <small className="text-muted d-block mt-2">
                  Search articles by title, technology, or topic.
                </small>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;