const modal = {
  activitiesModal: false,
  projectsModal: false,
};

const modalReducer = (state = modal, action) => {
  switch (action.type) {
    case "TOGGLE_ACTIVITIES_MODAL":
      state = !state.activitiesModal;
      return state;
    default:
      return state;
  }
};

export default modalReducer;
