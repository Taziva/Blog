import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import Post from "./Post.jsx";
describe("Post", () => {
  let div;
  let post;
  beforeEach(() => {
    div = document.createElement("div");
    post = {
      id: "1",
      title: "Hi",
      content: "We're testing react components",
      author: "Author McAuthorface",
      date: "2013-03-01",
      hero_image: "www.example.com",
      url: "/url",
      adscript: '{ "src": "//test.com" }'
    };
  });
  it("renders with scripts without crashing", () => {
    ReactDOM.render(
      <StaticRouter context={{}}>
        <Post key={post.id} post={post} />
      </StaticRouter>,
      div
    );
  });

  it("renders without adscripts without crashing", () => {
    post.adscript = undefined;
    ReactDOM.render(
      <StaticRouter context={{}}>
        <Post key={post.id} post={post} />
      </StaticRouter>,
      div
    );
  });

  it("renders with scripts", () => {
    ReactDOM.render(
      <StaticRouter context={{}}>
        <Post key={post.id} post={post} />
      </StaticRouter>,
      div
    );
  });
});
