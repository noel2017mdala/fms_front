import loginReducer from "./reducers/loginReducer";
import activiesReducer from "./reducers/activitiesReducer";
import projectReducer from "./reducers/projectsReducer";
import NavbarReducer from "./reducers/NavbarReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  login: loginReducer,
  activity: activiesReducer,
  projects: projectReducer,
  NavbarReducer,
});

export default rootReducer;
