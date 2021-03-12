import LoginValidator from "./reducers/Login/LoginValidator";
import LoginAuth from "./reducers/Login/LoginAuth";
import Project from "./reducers/dashboard/projectsReducer";
import Balance from "./reducers/dashboard/balanceStatsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  login: LoginValidator,
  auth: LoginAuth,
  Project,
  userBalance: Balance,
});

export default rootReducer;
