import React from "react";
import ReactDOM from "react-dom";

import CardHeader from "./CardHeader.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CardHeader sectionName="Section" title="Title" />, div);
});
