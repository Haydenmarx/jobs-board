import { combineReducers } from "redux";
import users from "./users";
import jobs from "./jobs";

export default combineReducers({
  users,
  jobs
});
