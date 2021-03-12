const balanceStats = [];

const BalanceStats = (state = balanceStats, action) => {
  switch (action.type) {
    case "GET_BALANCE":
      state = action.payLoad.amount;
      return state;
    default:
      return state;
  }
};

export default BalanceStats;
