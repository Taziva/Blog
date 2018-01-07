import { FETCH_TAGLINE } from "../actions/types";

const initialState = {
  text: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TAGLINE:
      return {
        ...state,
        text: action.payload
      };
    default:
      return state;
  }
}
