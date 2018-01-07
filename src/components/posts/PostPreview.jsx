import React from "react";
import PropTypes from "prop-types";
import Card from "../layout/Card.jsx";
import { Link } from "react-router-dom";

const PostPreview = ({ post }) => {
  const style = {
    backgroundImage: renderBackground(post),
    backgroundSize: "cover"
  };
  return (
    <Card
      style={style}
      title={post.title}
      text={post.preview}
      sectionName="post-preview"
    >
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

const renderBackground = post => {
  if (post.hero_image) {
    return `linear-gradient(105deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 50%, transparent 50%), url(${
      post.hero_image
    })`;
  } else {
    return "linear-gradient(105deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 50%, transparent 50%), rgba(0,0,0,0)";
  }
};

export default PostPreview;
