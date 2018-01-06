import React from "react";
import ReactHtmlParser from "react-html-parser";
import PropTypes from "prop-types";

const CardBody = ({ sectionName, text }) => {
  return (
    <div className={`${sectionName}__body`}>
      <span className={`${sectionName}__body-text`}>
        {ReactHtmlParser(text)}
      </span>
    </div>
  );
};

CardBody.propTypes = {
  sectionName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CardBody;
