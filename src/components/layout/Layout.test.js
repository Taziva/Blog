import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import Layout from "./Layout.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter context={{}}>
      <Layout pageTitle="Page" tagLine="Tagline" />
    </StaticRouter>,
    div
  );
});
