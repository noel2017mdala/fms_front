const projectState = [];

const Projects = (state = projectState, action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      return {
        ...state,
        Data: [action.payLoad],
      };
    default:
      return state;
  }
};

export default Projects;
