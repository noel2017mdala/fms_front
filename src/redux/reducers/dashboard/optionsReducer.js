const optionsState = {
  transactions: false,
  projects: false,
};

const ToggleOptions = (state = optionsState, action) => {
  switch (action.type) {
    case "OPTIONS":
      state = {
        transactions: !state.transactions,
        projects: false,
      };
      return state;
    default:
      return state;
  }
};

export default ToggleOptions;
