import React from "react";
import ReactDOM from "react-dom";
import { StaticRouter } from "react-router-dom";
import { shallow, mount } from "enzyme";

import Nav from "./Nav.jsx";
const renderResponsiveMenu = jest.fn();
describe("Nav", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
    document.body.appendChild(div);
  });

  afterEach(() => {
    document.body.removeChild(div);
  });
  it("renders without crashing", () => {
    ReactDOM.render(
      <StaticRouter context={{}}>
        <Nav />
      </StaticRouter>,
      div
    );
  });
  describe("clicking nav__collapse-button link", () => {
    let wrapper;
    const clickButton = button => {
      wrapper.find(button).simulate("click");
    };
    beforeEach(() => {
      wrapper = mount(
        <StaticRouter context={{}}>
          <Nav />
        </StaticRouter>,
        { attachTo: div }
      );
    });
    it("can click nav__collapse-button without crashing", () => {
      clickButton(".nav__collapse-button");
    });

    it("can click twice nav__collapse-button without crashing", () => {
      clickButton(".nav__collapse-button");
      clickButton(".nav__collapse-button");
    });
  });
});
