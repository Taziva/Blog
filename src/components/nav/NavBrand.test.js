import React from "react";
import ReactDOM from "react-dom";

import NavBrand from "./NavBrand.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NavBrand />, div);
});
