import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import blog from "./blogReducer";
import tagLine from "./tagLineReducer";

export default combineReducers({ routing: routerReducer, blog, tagLine });
