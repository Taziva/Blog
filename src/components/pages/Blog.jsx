import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ModalContainer, ModalRoute } from "react-router-modal";
import { Helmet } from "react-helmet";

import PostPreview from "../posts/PostPreview.jsx";
import Post from "../posts/Post.jsx";
import Layout from "../layout/Layout.jsx";
import * as actions from "../../actions";

import "react-router-modal/css/react-router-modal.css";

export class Blog extends Component {
  componentWillMount() {
    this.props.fetchBlogPosts();
    this.props.fetchTagLine("blog");
  }

  sortByDate = (a, b) => {
    return (
      this.parseDate(b.__meta__.createdDate) -
      this.parseDate(a.__meta__.createdDate)
    );
  };
  parseDate = date => {
    return new Date(date);
  };
  filterPublished = blogPost => {
    if (blogPost.status === "published") {
      return true;
    }
    return false;
  };
  formatDate = date => {
    let d = this.parseDate(date);
    let dd = d.getDate();
    let mm = d.getMonth() + 1;
    let yyyy = d.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    return `${dd}/${mm}/${yyyy}`;
  };
  createPosts = blogPost => {
    let post = {
      id: blogPost.id,
      title: blogPost.title,
      summary: blogPost.summary,
      content: blogPost.content,
      author: blogPost.author,
      date: this.formatDate(blogPost.date),
      hero_image: blogPost.heroImage[0].url,
      fancy_script: blogPost.fancyScript,
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
  };

  publishPosts = posts => {
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
    } else {
      return <div>No posts found</div>;
    }
  };
  renderBlogPosts() {
    if (this.props.error) return <div>{this.props.error}</div>;
    if (this.props.fetchingBlogPosts) return <div>Loading</div>;
    let renderElements;
    if (this.props.blogPosts.length > 0) {
      const posts = this.props.blogPosts
        .sort((a, b) => {
          return this.sortByDate(a, b);
        })
        .filter(blogPost => {
          return this.filterPublished(blogPost);
        })
        .map(blogPost => {
          return this.createPosts(blogPost);
        });
      renderElements = this.publishPosts(posts);
    } else {
      renderElements = <div>No posts found</div>;
    }
    return renderElements;
  }
  render() {
    return (
      <Layout pageTitle="Blog" tagLine={this.props.tagLine}>
        <Helmet>
          <title>Blog | Home</title>
        </Helmet>
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
    error: state.blog.error,
    tagLine: state.tagLine.text
  };
};

export default withRouter(connect(mapStateToProps, actions)(Blog));
