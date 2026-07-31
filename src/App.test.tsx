import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "./App";

describe("BlogSphere App", () => {

  test("renders the BlogSphere navigation brand", () => {
    render(<App />);

    expect(
      screen.getByText((content) =>
        content.includes("Blog") &&
        content.includes("Sphere")
      )
    ).toBeInTheDocument();
  });


  test("renders hero section content", () => {
    render(<App />);

    expect(
      screen.getByText(
        "Discover Articles That Inspire Developers"
      )
    ).toBeInTheDocument();
  });


  test("renders featured article section", () => {
    render(<App />);

    expect(
      screen.getByText("Editor's Pick")
    ).toBeInTheDocument();
  });


  test("renders blog articles", () => {
    render(<App />);

    expect(
      screen.getAllByText(
        "Getting Started with React and TypeScript"
      ).length
    ).toBeGreaterThan(0);
  });


  test("filters blog posts using search input", () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(
      "Search by article title..."
    );

    fireEvent.change(searchInput, {
      target: {
        value: "React",
      },
    });


    expect(
      screen.getAllByText(
        "Getting Started with React and TypeScript"
      ).length
    ).toBeGreaterThan(0);


    expect(
      screen.queryByText(
        "Modern JavaScript Features Every Developer Should Know"
      )
    ).not.toBeInTheDocument();
  });


  test("renders newsletter section", () => {
    render(<App />);

    expect(
      screen.getByText(
        "Stay Updated With New Articles"
      )
    ).toBeInTheDocument();
  });


  test("shows newsletter validation message", () => {
    render(<App />);

    const button = screen.getByRole(
      "button",
      {
        name: "Subscribe",
      }
    );

    fireEvent.click(button);

    expect(
      screen.getByText(
        "Please enter your email address."
      )
    ).toBeInTheDocument();
  });

});