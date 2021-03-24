const activities = [];

const getActivities = (state = activities, action) => {
  switch (action.type) {
    case "GET_ACTIVITIES":
      state = action.payLoad;
      return state;
    case "FETCH_EARNINGS":
      state = action.payLoad;
      return state;
    case "FETCH_EXPENSES":
      state = action.payLoad;
      return state;
    default:
      return state;
  }
};

export default getActivities;
