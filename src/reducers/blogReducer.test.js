import {
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POSTS_FAILURE,
  FETCH_BLOG_POSTS_SUCCESS
} from "../actions/types";

import blogReducer from "./blogReducer";

describe("blogposts reducer", () => {
  it("returns the initial state", () => {
    expect(blogReducer(undefined, {})).toEqual({
      error: null,
      fetchingBlogPosts: false,
      posts: []
    });
  });

  it("handles FETCH_BLOG_POSTS_REQUEST", () => {
    expect(blogReducer([], { type: FETCH_BLOG_POSTS_REQUEST })).toEqual({
      fetchingBlogPosts: true
    });
  });
  it("handles FETCH_BLOG_POSTS_SUCCESS", () => {
    const mockPosts = [
      { name: "John Smith", title: "Post", content: "Fake Post" }
    ];
    expect(
      blogReducer([], {
        type: FETCH_BLOG_POSTS_SUCCESS,
        payload: mockPosts
      })
    ).toEqual({
      fetchingBlogPosts: false,
      posts: mockPosts
    });
  });
  it("handles FETCH_BLOG_POSTS_FAILURE", () => {
    const mockError = { message: "Standard Error" };
    expect(
      blogReducer([], {
        type: FETCH_BLOG_POSTS_FAILURE,
        error: mockError.message
      })
    ).toEqual({
      fetchingBlogPosts: false,
      error: mockError.message
    });
  });
});
