import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PostPreview from "../posts/PostPreview.jsx";
import * as actions from "../../actions";
import Layout from "../layout/Layout.jsx";

export class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { tagLine: "My thoughts on the crazy world we live" };
  }

  componentWillMount() {
    this.props.fetchBlogPosts();
  }

  renderBlogPosts() {
    if (this.props.error) return <div>{this.props.error}</div>;
    switch (this.props.fetchingBlogPosts) {
      case true:
        return <div>Loading</div>;
      case false:
        if (this.props.blogPosts.length > 0) {
          const posts = this.props.blogPosts
            .filter(blogPost => {
              if (blogPost.fields.published === true) {
                return true;
              }
              return false;
            })
            .map(blogPost => {
              let post = {
                title: blogPost.fields.title,
                text: blogPost.fields.preview,
                author: blogPost.fields.author,
                date: blogPost.fields.date,
                hero_image: blogPost.fields.hero_image
              };
              return <PostPreview key={blogPost.id} post={post} />;
            });
          if (posts.length > 0) {
            return posts;
          }
        }
        return <div>No posts found</div>;

      default:
        return <div>No posts found</div>;
    }
  }
  render() {
    return (
      <Layout pageTitle="Blog" tagLine={this.state.tagLine}>
        <section className="blog-posts">{this.renderBlogPosts()}</section>
      </Layout>
    );
  }
}

Blog.propTypes = {
  blogPosts: PropTypes.array,
  fetchingBlogPosts: PropTypes.bool
};

export const mapStateToProps = state => {
  return {
    blogPosts: state.blog.posts,
    fetchingBlogPosts: state.blog.fetchingBlogPosts,
    error: state.blog.error
  };
};

export default withRouter(connect(mapStateToProps, actions)(Blog));
