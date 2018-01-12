import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";
import ConnectedBlog, { Blog, mapStateToProps } from "./Blog.jsx";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import PostPreview from "../posts/PostPreview.jsx";

describe("ConnectedBlog", () => {
  const testState = {
    blog: {
      posts: [],
      fetchingBlogPosts: false,
      error: null
    },
    tagLine: {
      text: "Tagline"
    }
  };
  const expectedProps = {
    blogPosts: [],
    fetchingBlogPosts: false,
    error: null,
    tagLine: "Tagline"
  };
  it("mapStateToProps", () => {
    expect(mapStateToProps(testState)).toEqual(expectedProps);
  });
});

describe("Blog", () => {
  let props;
  let blogPosts;
  let date;

  const pushBlogPosts = (i = 1, status = "published") => {
    blogPosts = [];
    for (var x = 0; x < i; x++) {
      blogPosts.push({
        __meta__: { createdDate: date },
        title: "Title",
        summary: "text",
        content: "content",
        author: "author",
        date,
        heroImage: [{ url: "heroImageUrl" }],
        status,
        fancyScript: "fancy.example.com",
        id: x + 1
      });
    }
    return blogPosts;
  };
  beforeEach(() => {
    date = "2001-01-01T00:00:00.000Z";
    props = {
      blogPosts: [],
      fetchingBlogPosts: false,
      fetchBlogPosts: jest.fn(),
      fetchTagLine: jest.fn(),
      error: null,
      location: { pathname: "/pathname" },
      tagLine: "tagLine"
    };
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <StaticRouter context={{}}>
        <Blog {...props} />
      </StaticRouter>,
      div
    );
  });

  it("renders multiple Posts", () => {
    props.blogPosts = pushBlogPosts(2);
    const div = document.createElement("div");
    ReactDOM.render(
      <StaticRouter context={{}}>
        <Blog {...props} />
      </StaticRouter>,
      div
    );
  });
  describe("Component", () => {
    const postPreviewProps = component => {
      return component
        .find("section")
        .find(PostPreview)
        .prop("post");
    };

    it("passes on the right props to PostPreview", () => {
      props.blogPosts = pushBlogPosts(1);
      const expectedProps = {
        fancy_script: "fancy.example.com",
        author: "author",
        content: "content",
        date: "01/01/2001",
        hero_image: "heroImageUrl",
        id: 1,
        summary: "text",
        title: "Title",
        url: "/pathname"
      };
      const component = shallow(<Blog {...props} />);
      expect(postPreviewProps(component)).toEqual(
        expect.objectContaining(expectedProps)
      );
    });

    it("doesn't pass on props from unpublished blogPosts", () => {
      props.blogPosts = pushBlogPosts(1, "draft");
      const component = shallow(<Blog {...props} />);
      expect(component.find("section").text()).toEqual("No posts found");
    });
    it("renders No posts found when there are no blogPosts in the props", () => {
      const component = shallow(<Blog {...props} />);
      expect(component.find("section").text()).toEqual("No posts found");
    });
    it("renders Loading while fetching blog posts", () => {
      props.fetchingBlogPosts = true;
      const component = shallow(<Blog {...props} />);
      expect(component.find("section").text()).toEqual("Loading");
    });
    it("renders error message when there is an error", () => {
      props.error = "Standard Error";
      const component = shallow(<Blog {...props} />);
      expect(component.find("section").text()).toEqual("Standard Error");
    });
    it("renders double digit dates", () => {
      date = "2001-10-10T00:00:00.000Z";
      props.blogPosts = pushBlogPosts(1);
      const component = shallow(<Blog {...props} />);
      const expectedProps = {
        date: "10/10/2001"
      };
      expect(postPreviewProps(component)).toEqual(
        expect.objectContaining(expectedProps)
      );
    });
  });
});
