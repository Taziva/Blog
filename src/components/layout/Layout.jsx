import React, { Component } from "react";
import Header from "../header/Header.jsx";
import Nav from "../nav/Nav.jsx";
import PropTypes from "prop-types";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header title={this.props.pageTitle} tagLine={this.props.tagLine} />
        {this.props.children}
      </div>
    );
  }
}

Layout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  tagLine: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
