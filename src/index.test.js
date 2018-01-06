import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Index from "./index";

jest.mock("react-dom", () => ({ render: jest.fn() }));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  global.document.getElementById = id => id === "root" && div;
  expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
});
