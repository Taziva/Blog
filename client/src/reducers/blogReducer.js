import {
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POSTS_FAILURE,
  FETCH_BLOG_POSTS_SUCCESS
} from "../actions/types";

const initialState = {
  fetchingBlogPosts: false,
  posts: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_BLOG_POSTS_REQUEST:
      return { ...state, fetchingBlogPosts: true };
    case FETCH_BLOG_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        fetchingBlogPosts: false
      };
    case FETCH_BLOG_POSTS_FAILURE:
      return { ...state, error: action.error, fetchingBlogPosts: false };
    default:
      return state;
  }
}
