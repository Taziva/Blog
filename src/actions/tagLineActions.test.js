import configureMockStore from "redux-mock-store";
import { fetchTagLine, tagLines } from "./tagLineActions";
import { FETCH_TAGLINE } from "./types";

const mockStore = configureMockStore();

describe("fetchTagLine actions", () => {
  it("creates FETCH_TAGLINE after successfully fetching blog posts", () => {
    const page = "home";
    const expectedActions = {
      type: FETCH_TAGLINE,
      payload: tagLines[page]
    };

    const store = mockStore({ tagLine: "" });
    expect(fetchTagLine("home")).toEqual(expectedActions);
  });
});
