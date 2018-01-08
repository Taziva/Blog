import React from "react";
import ReactDOM from "react-dom";

import HeaderText from "./HeaderText.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HeaderText main="Main" sub="sub" />, div);
});
