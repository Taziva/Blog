import React from "react";
import PropTypes from "prop-types";
import Card from "../layout/Card.jsx";
import { Link } from "react-router-dom";

const PostPreview = ({ post }) => {
  return (
    <Card title={post.title} text={post.preview} sectionName="post-preview">
      <div className="post-preview__background">
        <img
          className="post-preview__background-img"
          src={post.hero_image}
          alt="Background"
        />
      </div>
      <Link className="post-preview__media-phone-link" to={`/blog/${post.id}`}>
        <span />
      </Link>
      <div className="post-preview__media-link">
        <Link to={`/blog/${post.id}`}>Read More &rarr;</Link>
      </div>
      <div className="post-preview__media-info u-margin-top-small">
        <p className="post-preview__media-author">{post.author}</p>
        <p className="post-preview__media-date">{post.date}</p>
      </div>
    </Card>
  );
};
PostPreview.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hero_image: PropTypes.string
  }).isRequired
};

export default PostPreview;
