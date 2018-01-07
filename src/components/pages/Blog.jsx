import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ModalContainer, ModalRoute } from "react-router-modal";

import PostPreview from "../posts/PostPreview.jsx";
import Post from "../posts/Post.jsx";

import * as actions from "../../actions";
import Layout from "../layout/Layout.jsx";

import "react-router-modal/css/react-router-modal.css";

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
                id: blogPost.id,
                title: blogPost.fields.title,
                preview: blogPost.fields.preview,
                content: blogPost.fields.content,
                author: blogPost.fields.author,
                date: blogPost.fields.date,
                hero_image: blogPost.fields.hero_image,
                url: this.props.location.pathname
              };
              return {
                preview: <PostPreview key={blogPost.id} post={post} />,
                full: (
                  <ModalRoute
                    key={`fullPost-${post.id}`}
                    path={`/blog/${post.id}`}
                    parentPath="/blog"
                  >
                    <Post post={post} />
                  </ModalRoute>
                )
              };
            });
          if (posts.length > 0) {
            let publishedPosts = [].concat.apply(
              [<ModalContainer key="fullPostContainer" />],
              posts.map(post => {
                return Object.keys(post).map(function(key) {
                  return post[key];
                });
              })
            );
            return publishedPosts;
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
