import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import { ShareButtons } from "react-share";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const { FacebookShareButton, TwitterShareButton } = ShareButtons;

export class Post extends Component {
  componentDidMount() {
    this.createScripts(this.props.post.fancy_script);
  }
  createScripts(fancy_script) {
    if (fancy_script) {
      const script = document.createElement("script");

      script.src = fancy_script;
      script.async = true;
      this.gallery.appendChild(script);
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="post">
        <Helmet>
          <title>Blog | {this.props.post.title}</title>
        </Helmet>

        <img
          className="post__header-image"
          src={this.props.post.hero_image}
          style={{ width: "100%" }}
          alt="post hero"
        />
        <div className="post__close">
          <Link to="/blog" className="btn-link">
            &larr; Back to Blog
          </Link>
        </div>
        <div className="post__header-container">
          <h1 className="post__header u-center-text">
            {this.props.post.title}
          </h1>
        </div>

        <div className="post__content">
          <div className="post__media-info u-center-text">
            <p className="post__media-author">By {this.props.post.author}</p>
            <p className="post__media-date">{this.props.post.date}</p>
          </div>
          <div className="post__text">
            {ReactHtmlParser(this.props.post.content)}
            {/* if fancy widget is used on page */}
            {this.props.post.fancy_script ? (
              <div className="post__media-fancy--container">
                <div
                  className="post__media-fancy"
                  ref={gallery => {
                    this.gallery = gallery;
                  }}
                />
              </div>
            ) : null}
            <div className="post__close">
              <Link to="/blog" className="btn-link">
                &larr; Back to Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="post__footer">
          <span>&copy; Our Blind Mouse </span>
          <div className="post__footer-social">
            <FacebookShareButton
              url={`https://ourblindmouse.com`}
              quote={templateShareMessage(
                this.props.post.title,
                this.props.post.author
              )}
              className="post__share-button"
            >
              <svg className="post__footer-icon">
                <title>facebook</title>
                <path d="M18 7c0.6 0 1-0.4 1-1v-4c0-0.6-0.4-1-1-1h-3c-3.3 0-6 2.7-6 6v2h-2c-0.6 0-1 0.4-1 1v4c0 0.6 0.4 1 1 1h2v7c0 0.6 0.4 1 1 1h4c0.6 0 1-0.4 1-1v-7h2c0.5 0 0.9-0.3 1-0.8l1-4c0.1-0.3 0-0.6-0.2-0.9s-0.5-0.3-0.8-0.3h-3v-2h3zM14 11h2.7l-0.5 2h-2.2c-0.6 0-1 0.4-1 1v7h-2v-7c0-0.6-0.4-1-1-1h-2v-2h2c0.6 0 1-0.4 1-1v-3c0-2.2 1.8-4 4-4h2v2h-2c-1.1 0-2 0.9-2 2v3c0 0.6 0.4 1 1 1z" />
              </svg>
            </FacebookShareButton>
            <TwitterShareButton
              url={`https://ourblindmouse.com${this.props.post.url}`}
              title={templateShareMessage(
                this.props.post.title,
                this.props.post.author
              )}
              className="post__share-button"
            >
              <svg className="post__footer-icon">
                <title>twitter</title>
                <path d="M23.6 2.2c-0.3-0.2-0.8-0.2-1.1 0-0.7 0.5-1.5 0.9-2.3 1.2-2-1.8-5.1-1.9-7.2-0.1-1.3 1.1-2 2.6-2 4.2-2.9-0.2-5.5-1.7-7.2-4.1-0.2-0.3-0.5-0.4-0.9-0.4s-0.7 0.3-0.8 0.6c-0.1 0.1-1.1 2.5-1 5.4 0.1 2.5 1.1 5.7 4.8 8-1.5 0.7-3.2 1-4.9 1-0.4 0-0.9 0.3-1 0.7s0.1 0.9 0.5 1.1c2.5 1.4 5.2 2.1 7.7 2.1s4.9-0.6 7.1-1.9c4.3-2.4 6.7-7 6.7-12.5 0-0.2 0-0.3 0-0.5 1-1.1 1.7-2.4 2-3.8 0.1-0.4-0.1-0.8-0.4-1zM20.2 6c-0.2 0.2-0.3 0.6-0.3 0.9 0.1 0.2 0.1 0.4 0.1 0.6 0 4.8-2.1 8.7-5.7 10.8-2.8 1.6-6.1 2-9.4 1.2 1.3-0.4 2.5-0.9 3.6-1.7 0.4-0.2 0.5-0.5 0.5-0.9s-0.3-0.7-0.6-0.8c-5.8-2.6-5.6-7.5-5-10 2.2 2.2 5.3 3.5 8.6 3.4 0.5 0 1-0.5 1-1v-1c0-1 0.4-2 1.2-2.7 1.4-1.3 3.7-1.1 4.9 0.3 0.3 0.3 0.7 0.4 1 0.3 0.2-0.1 0.5-0.1 0.7-0.2-0.2 0.3-0.4 0.5-0.6 0.8z" />
              </svg>
            </TwitterShareButton>
          </div>
        </div>
        {/* If shopstyle pictures are present; Not tested as it is vendor code*/}
        <script>
          {
            !(function(doc, s, id) {
              var e, p, cb;
              if (!doc.getElementById(id)) {
                e = doc.createElement(s);
                e.id = id;
                cb = new Date().getTime().toString();
                p =
                  "//shopsensewidget.shopstyle.com/look-widget-script/assets/build/look-widget-script.js?cb=" +
                  cb;
                e.src = p;
                doc.body.appendChild(e);
              }
              /* istanbul ignore next */
              if (typeof window.scLookWidget === "object") {
                if (doc.readyState === "complete") {
                  window.scLookWidget.init();
                }
              }
            })(document, "script", "sc-look-widget-script")
          }
        </script>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    hero_image: PropTypes.string,
    url: PropTypes.string.isRequired
  }).isRequired
};

const templateShareMessage = (title, author, url) => {
  const message = `Check out "${title}" by ${author} on @ourblindmouse:`;
  return message;
};

export default Post;
