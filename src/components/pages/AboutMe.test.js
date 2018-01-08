import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import AboutMe from "./AboutMe.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter context={{}}>
      <AboutMe />
    </StaticRouter>,
    div
  );
});
