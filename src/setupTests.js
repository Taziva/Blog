import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, mount } from "enzyme";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

configure({ adapter: new Adapter() });
