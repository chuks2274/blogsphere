# BlogSphere

A modern, responsive technology blog platform built with **React**, **TypeScript**, **Bootstrap**, and **Vite**. BlogSphere helps developers and technology enthusiasts discover programming tutorials, coding tips, and software development insights through an intuitive interface.

---

# Project Overview

BlogSphere provides a clean reading experience where users can:

- Browse technology articles
- Search articles by title
- Filter articles by category
- Discover featured posts
- Subscribe to a newsletter

---

# Purpose

The goal of BlogSphere is to make learning technology easier by organizing valuable development resources in one place.

---

# Benefits

- Easy access to technology articles
- Fast article searching
- Category-based filtering
- Responsive user interface
- Simple and enjoyable reading experience
- Keeps readers updated with modern development trends

---

# Technologies

- React
- TypeScript
- Bootstrap
- Bootstrap Icons
- Vite
- Vitest
- React Testing Library

---

# Project Structure

## App Component

The `App` component serves as the application's main layout and integrates all major sections using the `useBlogFilters` custom hook.

### Features

- Organizes the complete page layout
- Displays featured articles
- Supports searching and filtering
- Integrates reusable components
- Responsive design

### Components Included

- Navbar
- Hero
- SearchBar
- CategoryFilter
- FeaturedPost
- BlogList
- Newsletter
- Footer

---

# Components

## Navbar

Provides the responsive navigation bar.

### Features

- Brand logo
- Navigation links
- Mobile menu
- Sticky navigation
- Explore button

---

## Hero

Displays the landing section.

### Features

- Hero banner
- Call-to-action buttons
- Platform statistics
- Featured technology highlight

---

## SearchBar

Allows users to search blog posts.

### Features

- Keyword search
- Controlled input
- Clear search button
- Search icon
- Responsive layout

---

## CategoryFilter

Filters blog posts by category.

### Features

- Category buttons
- Active category highlighting
- Callback-based filtering
- TypeScript props

---

## FeaturedPost

Displays the highlighted article.

### Features

- Featured image
- Category badge
- Author information
- Publication date
- Read More button

---

## BlogList

Displays all blog articles.

### Features

- Responsive grid
- Empty state support
- Uses reusable BlogCard components

---

## BlogCard

Displays an individual blog article.

### Features

- Blog image
- Category badge
- Title
- Summary
- Author
- Publication date
- Read More button

---

## Newsletter

Newsletter subscription form.

### Features

- Email subscription
- Validation
- Success/error messages
- Auto-clearing notifications

---

## Footer

Application footer.

### Features

- Brand information
- Navigation links
- Categories
- Social media icons
- Dynamic copyright

---

# Custom Hook

## useBlogFilters

Manages application filtering logic.

### Features

- Search state
- Category filtering
- Featured article selection
- Dynamic categories
- Filtered blog results

---

# Data

## Blog Posts

Stores all blog content used throughout the application.

### Features

- Blog metadata
- Categories
- Authors
- Images
- Featured article support

---

# Types

## BlogPost Interface

Defines the TypeScript structure for every blog article.

### Features

- Strong typing
- Consistent data model
- Prevents data errors

---

# Styling

## Global CSS

Provides application-wide styling.

### Features

- CSS reset
- `box-sizing: border-box`
- Modern scrollbar
- Cross-browser support

---

# Application Entry

## Main Entry File

Initializes the BlogSphere application.

### Responsibilities

- Creates React root
- Enables Strict Mode
- Loads Bootstrap
- Loads Bootstrap Icons
- Imports global styles
- Renders the App component

---

# Testing

BlogSphere uses **Vitest** and **React Testing Library**.

### Tests Include

- Navbar rendering
- Hero section
- Featured article
- Blog list rendering
- Search functionality
- Newsletter rendering
- Newsletter validation

### Run Tests

```bash
npm test
```

---

# Installation

## Prerequisites

- Node.js
- npm

Verify installation:

```bash
node -v
npm -v
```

Clone the repository:

```bash
git clone https://github.com/chuks2274/blogsphere.git
```

Navigate into the project:

```bash
cd blogsphere
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# Author

**Michael Chukwuka Meninwa**

Full-Stack Software Engineer passionate about building modern web applications using React, TypeScript, JavaScript, Python, and Flask.

- GitHub: https://github.com/chuks2274
- LinkedIn: https://linkedin.com/in/chukwuka-m-meninwa