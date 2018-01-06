import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import * as actions from "./blogActions";
import {
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POSTS_SUCCESS,
  FETCH_BLOG_POSTS_FAILURE
} from "./types";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("fetchBlogPosts actions", () => {
  beforeEach(function() {
    moxios.install();
  });

  afterEach(function() {
    moxios.uninstall();
  });
  it("creates FETCH_BLOG_POSTS_REQUEST, FETCH_BLOG_POSTS_SUCCESS after successfully fetching blog posts", () => {
    const mockResponse = [
      {
        name: "Name",
        fields: {
          content: "content",
          date: "2018-01-01",
          title: "Title",
          published: true,
          author: "John Smith"
        }
      }
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: mockResponse
      });
    });

    const expectedActions = [
      { type: FETCH_BLOG_POSTS_REQUEST },
      {
        type: FETCH_BLOG_POSTS_SUCCESS,
        payload: mockResponse
      }
    ];

    const store = mockStore({ blogPosts: [] });
    return store.dispatch(actions.fetchBlogPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('"creates FETCH_BLOG_POSTS_REQUEST, FETCH_BLOG_POSTS_FAILURE after failing to fetch blog posts', () => {
    const mockError = {
      message: "Request failed with status code 404"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404,
        error: mockError
      });
    });
    const expectedActions = [
      { type: FETCH_BLOG_POSTS_REQUEST },
      {
        type: FETCH_BLOG_POSTS_FAILURE,
        error: mockError.message
      }
    ];

    const store = mockStore({ posts: [], error: "" });
    return store.dispatch(actions.fetchBlogPosts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
