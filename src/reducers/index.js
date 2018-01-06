import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import blog from "./blogReducer";

export default combineReducers({ routing: routerReducer, blog });
