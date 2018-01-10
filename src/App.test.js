import React from "react";
import ReactDOM from "react-dom";

jest.mock("react-ga");

import App from "./App";
describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
