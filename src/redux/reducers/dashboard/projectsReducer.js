const projectState = [];

const Projects = (state = projectState, action) => {
  switch (action.type) {
    case "GET_PROJECTS":
      state = action.payLoad;
      return state;
    default:
      return state;
  }
};

export default Projects;
