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
    case "PROJECTS_OPTIONS":
      state = {
        transactions: false,
        projects: !state.projects,
      };
      return state;
    default:
      return state;
  }
};

export default ToggleOptions;
