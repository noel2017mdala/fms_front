import loginReducer from "./reducers/loginReducer";
import activiesReducer from "./reducers/activitiesReducer";
import projectReducer from "./reducers/projectsReducer";
import CreateTransaction from "./reducers/createTransactionReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  login: loginReducer,
  activity: activiesReducer,
  projects: projectReducer,
  transaction: CreateTransaction,
});

export default rootReducer;
