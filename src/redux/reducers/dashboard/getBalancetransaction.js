let balanceTransaction = [];
const getTransaction = (state = balanceTransaction, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      state = action.payLoad;
      return state;
    default:
      return state;
  }
};

export default getTransaction;
