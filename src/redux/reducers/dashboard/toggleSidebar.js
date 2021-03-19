const ToggleSidebar = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return (state = !state);
    default:
      return state;
  }
};

export default ToggleSidebar;
