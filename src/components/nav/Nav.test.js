import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import Nav from "./Nav.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter context={{}}>
      <Nav />
    </StaticRouter>,
    div
  );
});
