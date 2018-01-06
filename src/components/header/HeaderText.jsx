import React from "react";
import PropTypes from "prop-types";

const HeaderText = ({ main, sub }) => {
  return (
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main">{main}</span>
        <span className="heading-primary--sub">{sub}</span>
      </h1>
    </div>
  );
};

HeaderText.propTypes = {
  main: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired
};

export default HeaderText;
