import React from "react";
import Card from "../layout/Card.jsx";

const AboutMe = () => {
  return (
    <Card sectionName="about-me" title="About Me" text={text}>
      <img
        className="about-me__media-image"
        src="/images/hero-image.jpg"
        alt="Shoniwa Marovatsanga"
      />
    </Card>
  );
};

export default AboutMe;

const text =
  "I am currently working as a Software Engineer at Honeycomb TV, where I am able to learn from colleagues with different levels of experience.\n\n Outside of work I spend my time working on new web apps , and helping bring ideas to life. If you have any ideas that you think I could help bring to life don’t hesitate to get in touch.";
