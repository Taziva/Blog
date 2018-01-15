import { FETCH_TAGLINE } from "./types";

export function fetchTagLine(page) {
  return {
    type: FETCH_TAGLINE,
    payload: tagLines[page]
  };
}

export const tagLines = {
  blog: "On the brink of greatness",
  home: "If you want to get to know me"
};
