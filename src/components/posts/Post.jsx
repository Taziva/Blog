import React from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";

const Post = ({ post }) => {
  return (
    <div className="post">
      <img
        className="post__header-image"
        src={post.hero_image}
        style={{ width: "100%" }}
      />
      <div className="post__header-container">
        <h1 className="post__header u-center-text">{post.title}</h1>
      </div>
      <div className="post__content">
        <div className="post__media-info u-center-text">
          <p className="post__media-author">By {post.author}</p>
          <p className="post__media-date">{post.date}</p>
        </div>
        <div className="post__text">{ReactHtmlParser(post.content)}</div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hero_image: PropTypes.string
  }).isRequired
};

export default Post;
