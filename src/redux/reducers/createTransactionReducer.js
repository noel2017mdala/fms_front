import { CREATE_TRANSACTION } from "../actions/actionCreator";

const initialState = [];

const CreateTransaction = (state = initialState, action) => {
  if (action.type === CREATE_TRANSACTION) {
    return {
      ...state,
      transaction: action.payLoad,
    };
  }
  return state;
};

export default CreateTransaction;
