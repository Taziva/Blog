import React from "react";
import ReactDOM from "react-dom";

import CardBody from "./CardBody.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CardBody sectionName="Section" text="Text" />, div);
});
