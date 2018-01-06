import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavLink = ({ link, text }) => {
  return (
    <li className="nav__link">
      <Link to={`${link}`}>{text}</Link>
    </li>
  );
};

NavLink.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavLink;
