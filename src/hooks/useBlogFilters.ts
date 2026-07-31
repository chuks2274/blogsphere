import { useState } from "react";
import type { BlogPost } from "../types/Blog";

const useBlogFilters = (posts: BlogPost[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");


  const categories = [
    "All",
    ...Array.from(new Set(posts.map((post) => post.category))),
  ];


  const featuredPost = posts.find(
    (post) => post.featured
  );


  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());


    const matchesCategory =
      selectedCategory === "All" ||
      post.category === selectedCategory;


    return matchesSearch && matchesCategory;
  });


  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    featuredPost,
    filteredPosts,
  };
};


export default useBlogFilters;