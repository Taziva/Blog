import React from "react";
import ReactDOM from "react-dom";

import PostPreview from "./PostPreview.jsx";

it("renders without crashing", () => {
  const post = {
    id: 1,
    title: "Hi",
    text: "We're testing react components",
    author: "Author McAuthorface",
    date: "2013-03-01",
    hero_image: "www.example.com"
  };
  const div = document.createElement("div");
  ReactDOM.render(<PostPreview key={post.id} post={post} />, div);
});

it("renders with white background without hero_image", () => {
  const post = {
    id: 1,
    title: "Hi",
    text: "We're testing react components",
    author: "Author McAuthorface",
    date: "2013-03-01"
  };
  const style = {
    backgroundImage:
      "linear-gradient(105deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 50%, transparent 50%), rgba(0,0,0,0)",
    backgroundSize: "cover"
  };
  const div = document.createElement("div");
  ReactDOM.render(<PostPreview key={post.id} post={post} />, div);
});
