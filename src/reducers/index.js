import { combineReducers } from "redux";
import users from "./users";
import jobs from "./jobs";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  users,
  jobs,
  visibilityFilter
});
