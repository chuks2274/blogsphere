import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <section className="py-3">
      <div className="container">

        <div className="d-flex flex-wrap justify-content-center gap-2">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`btn rounded-pill px-4 ${
                selectedCategory === category
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </button>
          ))}

        </div>

      </div>
    </section>
  );
};

export default CategoryFilter;