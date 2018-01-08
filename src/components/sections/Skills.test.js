import React from "react";
import ReactDOM from "react-dom";

import Skills from "./Skills.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Skills />, div);
});
