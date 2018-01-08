import React from "react";
import Card from "../layout/Card.jsx";

const Skills = () => {
  return (
    <Card sectionName="skills" title="Skills and Experience" text={text}>
      <div className="skills__media-container">
        <ul className="skills__media-list">
          {renderSkillsList(developmentSkills)}
        </ul>
      </div>
    </Card>
  );
};

export default Skills;

const renderSkillsList = skills => {
  const skillList = skills.map((skill, index) => {
    return <li key={index}>{skill}</li>;
  });
  return skillList;
};

const developmentSkills = [
  "HTML",
  "CSS",
  "JS (ES5, ES6)",
  "Node.js",
  "MongoDB",
  "Sass",
  "React.js",
  "React Native",
  "Ruby on Rails",
  "Backbone.js",
  "Elm",
  "AWS",
  "Postgres",
  "Ansible"
];

const text =
  "In my software journey I've always been inspired to be a proper Software Engineer, able to work on part of a project, so I have experience with a wide range of technologies. I'm quite fond of Javascript as it was my first language so it has kind of become my goto language for building small Web Apps using the MERN(MongoDB, Express, React.js, Node.js) stack. However I'm also really quite taken by Elm and hope to use it more.";
