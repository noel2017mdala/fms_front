import common from "../../../classes/componentClass";
export const allActivities = (e) => {
  let url = `http://127.0.0.1:8000/api/transaction/all/${e.id}`;
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${e.token}`,
  });
  const request = new Request(url, {
    method: "GET",
    headers: headers,
  });
  return async (dispatch) => {
    try {
      const response = await fetch(request);
      const resData = await response.json();
      if (resData["state"]) {
        dispatch({ type: "GET_ACTIVITIES", payLoad: resData });
      }
    } catch (e) {
      common.alertMsg(
        "Please check you internet connection and try again later"
      );
      // dispatch({ type: "GET_ACTIVITIES", payLoad: {} });
    }
  };
};
