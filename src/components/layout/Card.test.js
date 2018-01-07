import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import Card from "./Card.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter context={{}}>
      <Card sectionName="section" title="Title" text="Text" />
    </StaticRouter>,
    div
  );
});
