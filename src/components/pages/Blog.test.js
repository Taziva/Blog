import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";
import { shallowWithStore } from "../../setupTests.js";
import ConnectedBlog, { Blog, mapStateToProps } from "./Blog.jsx";
import configureStore from "redux-mock-store";
import { shallow, mount } from "enzyme";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import PostPreview from "../posts/PostPreview.jsx";

describe("ConnectedBlog", () => {
  const testState = {
    blog: {
      posts: [],
      fetchingBlogPosts: false,
      error: null
    }
  };
  const expectedProps = {
    blogPosts: [],
    fetchingBlogPosts: false,
    error: null
  };
  it("mapStateToProps", () => {
    expect(mapStateToProps(testState)).toEqual(expectedProps);
  });
});

describe("Blog", () => {
  it("renders without crashing", () => {
    const props = {
      blogPost: [],
      fetchBlogPosts: jest.fn(),
      error: null
    };
    const div = document.createElement("div");
    ReactDOM.render(
      <StaticRouter context={{}}>
        <Blog {...props} />
      </StaticRouter>,
      div
    );
  });
  it("passes on the right props to PostPreview", () => {
    const props = {
      blogPosts: [
        {
          fields: {
            title: "Title",
            preview: "text",
            content: "content",
            author: "author",
            date: "date",
            hero_image: "hero_image",
            published: true
          },
          id: "1"
        }
      ],
      fetchingBlogPosts: false,
      fetchBlogPosts: jest.fn(),
      error: null
    };
    const expectedProps = {
      author: "author",
      date: "date",
      hero_image: "hero_image",
      preview: "text",
      title: "Title"
    };
    const component = shallow(<Blog {...props} />);
    expect(
      component
        .find("section")
        .find(PostPreview)
        .prop("post")
    ).toEqual(expect.objectContaining(expectedProps));
  });
  it("doesn't pass on props from unpublished blogPosts", () => {
    const props = {
      blogPosts: [
        {
          fields: {
            title: "Title",
            preview: "text",
            content: "content",
            author: "author",
            date: "date",
            hero_image: "hero_image",
            published: false
          },
          id: "1"
        }
      ],
      fetchingBlogPosts: false,
      fetchBlogPosts: jest.fn(),
      error: null
    };
    const expectedProps = {
      author: "author",
      date: "date",
      hero_image: "hero_image",
      preview: "text",
      title: "Title"
    };
    const component = shallow(<Blog {...props} />);
    expect(component.find("section").text()).toEqual("No posts found");
  });
  it("renders No posts found when there are no blogPosts in the props", () => {
    const props = {
      blogPosts: [],
      fetchingBlogPosts: false,
      fetchBlogPosts: jest.fn(),
      error: null
    };

    const component = shallow(<Blog {...props} />);
    expect(component.find("section").text()).toEqual("No posts found");
  });
  it("renders Loading while fetching blog posts", () => {
    const props = {
      blogPosts: [],
      fetchingBlogPosts: true,
      fetchBlogPosts: jest.fn(),
      error: null
    };
    const component = shallow(<Blog {...props} />);
    expect(component.find("section").text()).toEqual("Loading");
  });
  it("renders error message when there is an error", () => {
    const props = {
      blogPosts: [],
      fetchingBlogPosts: false,
      fetchBlogPosts: jest.fn(),
      error: "Standard Error"
    };
    const component = shallow(<Blog {...props} />);
    expect(component.find("section").text()).toEqual("Standard Error");
  });
});
