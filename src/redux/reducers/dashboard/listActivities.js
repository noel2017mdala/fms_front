const listActivities = [];

const ListActivities = (state = listActivities, action) => {
  switch (action.type) {
    case "FETCH_ALL_ACTIVITIES":
      state = action.payLoad;
      return state;
    default:
      return state;
  }
};

export default ListActivities;
