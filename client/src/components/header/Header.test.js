import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header title="Title" tagLine="Tagline" />, div);
});
