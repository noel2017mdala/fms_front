// import loginReducer from "./reducers/loginReducer";
// import activiesReducer from "./reducers/activitiesReducer";
// import projectReducer from "./reducers/projectsReducer";
// import CreateTransaction from "./reducers/createTransactionReducer";
// import getAmountReducer from "./reducers/getAmountReducer";
import LoginValidator from "./reducers/Login/LoginValidator";
import LoginAuth from "./reducers/Login/LoginAuth";
import Project from "./reducers/dashboard/projectsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // login: loginReducer,
  // activity: activiesReducer,
  // projects: projectReducer,
  // transaction: CreateTransaction,
  // getAmountReducer,
  login: LoginValidator,
  auth: LoginAuth,
  Project,
});

export default rootReducer;
