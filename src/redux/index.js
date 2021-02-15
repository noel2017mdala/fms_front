import loginReducer from "./reducers/loginReducer";
import activiesReducer from "./reducers/activitiesReducer";
import projectReducer from "./reducers/projectsReducer";
import CreateTransaction from "./reducers/createTransactionReducer";
import getAmountReducer from "./reducers/getAmountReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  login: loginReducer,
  activity: activiesReducer,
  projects: projectReducer,
  transaction: CreateTransaction,
  getAmountReducer,
});

export default rootReducer;
