import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";

import NotFoundPage from "./NotFoundPage.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StaticRouter context={{}}>
      <NotFoundPage />
    </StaticRouter>,
    div
  );
});
