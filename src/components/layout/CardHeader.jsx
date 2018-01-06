import React from "react";
import PropTypes from "prop-types";

const CardHeader = ({ sectionName, title }) => {
  return <h1 className={`${sectionName}__header u-center-text`}>{title}</h1>;
};

CardHeader.propTypes = {
  sectionName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default CardHeader;
