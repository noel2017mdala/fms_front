import LoginValidator from "./reducers/Login/LoginValidator";
import LoginAuth from "./reducers/Login/LoginAuth";
import Project from "./reducers/dashboard/projectsReducer";
import Balance from "./reducers/dashboard/balanceStatsReducer";
import getTransaction from "./reducers/dashboard/getBalancetransaction";
import getActivities from "./reducers/dashboard/activities";
import ToggleSidebar from "./reducers/dashboard/toggleSidebar";
import ToggleOptions from "./reducers/dashboard/optionsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  login: LoginValidator,
  auth: LoginAuth,
  Project,
  userBalance: Balance,
  getTransaction,
  getActivities,
  ToggleSidebar,
  ToggleOptions,
});

export default rootReducer;
