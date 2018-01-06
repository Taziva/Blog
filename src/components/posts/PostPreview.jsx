import React from "react";
import PropTypes from "prop-types";
import Card from "../layout/Card.jsx";

const PostPreview = ({ post }) => {
  const style = {
    backgroundImage: renderBackground(post),
    backgroundSize: "cover"
  };
  return (
    <Card style={style} title={post.title} text={post.text} sectionName="post">
      <a className="post__media-link" href="#">
        Read More &rarr;
      </a>
      <div className="post__media-info u-margin-top-small">
        <p className="post__media-author">{post.author}</p>
        <p className="post__media-date">{post.date}</p>
      </div>
    </Card>
  );
};
PostPreview.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
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
