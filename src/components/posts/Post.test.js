import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import Post from "./Post.jsx";
describe("Post", () => {
  let div;
  let post;
  const renderPost = () => {
    ReactDOM.render(
      <StaticRouter context={{}}>
        <Post key={post.id} post={post} />
      </StaticRouter>,
      div
    );
  };
  beforeEach(() => {
    div = document.createElement("div");
    post = {
      id: 1,
      title: "Hi",
      content:
        "We're testing react components <div class='sc-look-widget'style='text-align: center' data-mobile-optimize='true' data-options='none'></div>",
      author: "Author McAuthorface",
      date: "2013-03-01",
      hero_image: "www.example.com",
      url: "/url",
      fancy_script: "fancy.example.com"
    };
  });
  it("renders with scripts without crashing", () => {
    renderPost();
  });

  it("renders without adscripts without crashing", () => {
    post.fancy_script = undefined;
    renderPost();
  });

  it("renders with twitter scripts without crashing", () => {
    post.content = "<div class='twitter-content'></div>";
    renderPost();
  });
  it("renders with twitter scripts without crashing", () => {
    post.content =
      "<div class='twitter-content'><blockquote></blockquote></div>";
    renderPost();
  });
});
