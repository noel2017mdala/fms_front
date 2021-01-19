import { FETCH_PROJECTS } from "../actions/actionCreator";

let initialState = [];

let projectReducer = (state = initialState, action) => {
  if (action.type === FETCH_PROJECTS) {
    return {
      ...state,
      data: action.payLoad,
    };
  }
  return state;
};

export default projectReducer;
