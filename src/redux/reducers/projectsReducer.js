import { FETCH_PROJECTS, CREATE_PROJECTS } from "../actions/actionCreator";

let initialState = [];

let projectReducer = (state = initialState, action) => {
  if (action.type === FETCH_PROJECTS) {
    return {
      ...state,
      data: action.payLoad,
    };
  } else if (action.type === CREATE_PROJECTS) {
    return {
      ...state,
      projects: action.payLoad,
    };
  }
  return state;
};

export default projectReducer;
