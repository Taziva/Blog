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
  beforeEach(() => {
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
  it("passes on the right props to PostPreview", () => {
    props.blogPosts = [
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
    ];
    const expectedProps = {
      adscript: undefined,
      author: "author",
      content: "content",
      date: "date",
      hero_image: "hero_image",
      id: "1",
      preview: "text",
      title: "Title",
      url: "/pathname"
    };
    const component = shallow(<Blog {...props} />);
    expect(
      component
        .find("section")
        .find(PostPreview)
        .prop("post")
    ).toEqual(expect.objectContaining(expectedProps));
  });

  it("renders multiple Posts", () => {
    props.blogPosts = [
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
      },
      {
        fields: {
          title: "Title 2",
          preview: "text 2",
          content: "content 2",
          author: "author 2",
          date: "date 2",
          hero_image: "hero_image_2",
          published: true
        },
        id: "2"
      }
    ];
    const div = document.createElement("div");
    ReactDOM.render(
      <StaticRouter context={{}}>
        <Blog {...props} />
      </StaticRouter>,
      div
    );
  });

  it("doesn't pass on props from unpublished blogPosts", () => {
    props.blogPosts = [
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
    ];
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
});
