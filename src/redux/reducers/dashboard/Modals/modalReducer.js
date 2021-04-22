const modal = {
  activitiesModal: false,
  projectsModal: false,
  activitiesList: false,
  projectList: false,
};

const modalReducer = (state = modal, action) => {
  switch (action.type) {
    case "ACTIVITIES_MODAL":
      state = {
        activitiesModal: !state.activitiesModal,
        projectsModal: false,
        activitiesList: false,
        projectList: false,
      };
      return state;

    // Opens activities modal
    case "LIST_ACTIVITIES_MODAL":
      state = {
        activitiesModal: false,
        projectsModal: false,
        activitiesList: !state.activitiesModal,
        projectList: false,
      };
      return state;

    // Closes create activities modal
    case "CLOSE_ACTIVITIES_MODAL":
      state = {
        activitiesModal: false,
        projectsModal: false,
        activitiesList: false,
        projectList: false,
      };
      return state;

    // Closes Activities list
    case "CLOSE_ACTIVITIES_MODAL_LIST":
      state = {
        activitiesModal: false,
        projectsModal: false,
        activitiesList: false,
        projectList: false,
      };
      return state;

    case "PROJECTS_MODAL":
      state = {
        activitiesModal: false,
        projectsModal: !state.activitiesModal,
        activitiesList: false,
        projectList: false,
      };
      return state;

    case "OPEN_PROJECTS_MODAL_LIST":
      state = {
        activitiesModal: false,
        projectsModal: false,
        activitiesList: false,
        projectList: !state.activitiesModal,
      };
      return state;

    case "CLOSE_PROJECTS_MODAL_LIST":
      state = {
        activitiesModal: false,
        projectsModal: false,
        activitiesList: false,
        projectList: false,
      };
      return state;

    case "CLOSE_PROJECTS_MODAL":
      state = {
        activitiesModal: false,
        projectsModal: false,
        activitiesList: false,
        projectList: false,
      };
      return state;

    default:
      return state;
  }
};

export default modalReducer;
