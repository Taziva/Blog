import React from "react";
import CardHeader from "./CardHeader.jsx";
import CardBody from "./CardBody.jsx";

import PropTypes from "prop-types";

const Card = ({ sectionName, style, title, text, children }) => {
  return (
    <div className={`card ${sectionName}`} style={{ ...style }}>
      <div className={`${sectionName}__content`}>
        <CardHeader title={title} sectionName={sectionName} />
        <CardBody sectionName={sectionName} text={text} />
      </div>
      <div className={`${sectionName}__media`}>{children}</div>
    </div>
  );
};

Card.propTypes = {
  sectionName: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Card;
