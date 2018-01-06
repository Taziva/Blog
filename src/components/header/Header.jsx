import React from "react";
import HeaderText from "./HeaderText.jsx";
import PropTypes from "prop-types";

const Header = ({ title, tagLine }) => {
  return (
    <div className="header">
      <HeaderText main={title} sub={tagLine} />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  tagLine: PropTypes.string.isRequired
};
export default Header;
