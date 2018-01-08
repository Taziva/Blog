import { FETCH_TAGLINE } from "./types";

export function fetchTagLine(page) {
  return {
    type: FETCH_TAGLINE,
    payload: tagLines[page]
  };
}

export const tagLines = {
  blog: "My thoughts on the crazy world we live",
  home: "If you want to get to know me"
};
