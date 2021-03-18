const activities = [];

const getActivities = (state = activities, action) => {
  switch (action.type) {
    case "GET_ACTIVITIES":
      state = action.payLoad;
      return state;
    default:
      return state;
  }
};

export default getActivities;
