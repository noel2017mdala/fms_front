import { FETCH_AMOUNT } from "../actions/actionCreator";

const initialState = [];

const getAmountReducer = (state = initialState, action) => {
  if (action.type === FETCH_AMOUNT) {
    return {
      ...state,
      amount: action.payLoad,
    };
  }
  return state;
};

export default getAmountReducer;
