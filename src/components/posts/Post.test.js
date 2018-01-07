import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import Post from "./Post.jsx";

it("renders without crashing", () => {
  const post = {
    id: "1",
    title: "Hi",
    content: "We're testing react components",
    author: "Author McAuthorface",
    date: "2013-03-01",
    hero_image: "www.example.com",
    url: "/url"
  };
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter context={{}}>
      <Post key={post.id} post={post} />
    </StaticRouter>,
    div
  );
});
