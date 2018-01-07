import { FETCH_TAGLINE } from "../actions/types";

import blogReducer from "./tagLineReducer";

describe("blogposts reducer", () => {
  it("returns the initial state", () => {
    expect(blogReducer(undefined, {})).toEqual({
      text: ""
    });
  });

  it("handles FETCH_BLOG_POSTS_REQUEST", () => {
    expect(
      blogReducer([], { type: FETCH_TAGLINE, payload: "Tagline" })
    ).toEqual({
      text: "Tagline"
    });
  });
});
