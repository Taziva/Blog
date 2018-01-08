import axios from "axios";
import {
  FETCH_BLOG_POSTS_REQUEST,
  FETCH_BLOG_POSTS_SUCCESS,
  FETCH_BLOG_POSTS_FAILURE
} from "./types";

const POSTS_URL = "/api/posts";

function fetchBlogPostsRequest() {
  return {
    type: FETCH_BLOG_POSTS_REQUEST
  };
}

function fetchBlogPostsSuccess(payload) {
  return {
    type: FETCH_BLOG_POSTS_SUCCESS,
    payload
  };
}

function fetchBlogPostsFailure(error) {
  return {
    type: FETCH_BLOG_POSTS_FAILURE,
    error
  };
}

export const fetchBlogPosts = () => async dispatch => {
  dispatch(fetchBlogPostsRequest());
  try {
    let { data } = await axios.get(POSTS_URL);
    dispatch(fetchBlogPostsSuccess(data));
    return data;
  } catch (err) {
    dispatch(fetchBlogPostsFailure(err.message));
  }
};
