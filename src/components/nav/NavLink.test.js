import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import NavLink from "./NavLink.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter context={{}}>
      <NavLink link="/link" text="Text" />
    </StaticRouter>,
    div
  );
});
