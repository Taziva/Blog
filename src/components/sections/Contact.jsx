import React from "react";
import Card from "../layout/Card.jsx";

const Contact = () => {
  return (
    <Card sectionName="contact" title="Contact" text={text}>
      <a className="contact__media-link" href="mailto:ourblindmouse@gmail.com">
        ourblindmouse@gmail.com &rarr;
      </a>
    </Card>
  );
};

export default Contact;

const text = "If you have any question feel free to contact me at:";
