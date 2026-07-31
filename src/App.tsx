import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import FeaturedPost from "./components/FeaturedPost";
import BlogList from "./components/BlogList";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import { posts } from "./data/posts";
import useBlogFilters from "./hooks/useBlogFilters";


function App() {

  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    featuredPost,
    filteredPosts,
  } = useBlogFilters(posts);


  return (
    <>
      <Navbar />

      <Hero />


      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />


      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />


      {featuredPost && (
        <FeaturedPost post={featuredPost} />
      )}


      <BlogList posts={filteredPosts} />


      <Newsletter />


      <Footer />
    </>
  );
}


export default App;