import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Card sectionName="section" title="Title" text="Text" />,
    div
  );
});
