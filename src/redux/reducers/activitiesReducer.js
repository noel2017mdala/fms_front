import {
  FETCH_ACTIVITIES,
  FETCH_EARNINGS,
  FETCH_EXPENSES,
  FETCH_ALL_ACTIVITIES,
  DELETE_ACTIVITY,
} from "../actions/actionCreator";

let initialState = [];

let activiesReducer = (state = initialState, action) => {
  if (action.type === FETCH_EARNINGS) {
    return {
      ...state,
      activities: action.payLoad,
    };
  } else if (action.type === FETCH_ACTIVITIES) {
    return {
      ...state,
      activities: action.payLoad,
    };
  } else if (action.type === FETCH_EXPENSES) {
    return {
      ...state,
      activities: action.payLoad,
    };
  } else if (action.type === FETCH_ALL_ACTIVITIES) {
    return {
      ...state,
      allActivities: action.payLoad,
    };
  } else if (action.type === DELETE_ACTIVITY) {
    return {
      ...state,
      allActivities: action.payLoad,
    };
  }

  return state;
};

export default activiesReducer;
