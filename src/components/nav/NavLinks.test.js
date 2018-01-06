import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import NavLinks from "./NavLinks.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter context={{}}>
      <NavLinks />
    </StaticRouter>,
    div
  );
});
