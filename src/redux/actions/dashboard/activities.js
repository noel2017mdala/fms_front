import common from "../../../classes/componentClass";
export const activitiesAction = (e) => {
  const { id } = e.id[0];
  let url = `http://127.0.0.1:8000/api/transaction/limit/${id}`;
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

export const getEarnings = (e) => {
  const { id } = e.id[0];
  let url = `http://127.0.0.1:8000/api/earnings/${id}`;
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
        dispatch({ type: "FETCH_EARNINGS", payLoad: resData });
      }
    } catch (e) {
      common.alertMsg(
        "Please check you internet connection and try again later"
      );
      // dispatch({ type: "FETCH_EARNINGS", payLoad: {} });
    }
  };
};

export const getExpenses = (e) => {
  const { id } = e.id[0];
  let url = `http://127.0.0.1:8000/api/expences/${id}`;
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
        dispatch({ type: "FETCH_EXPENSES", payLoad: resData });
      }
    } catch {
      common.alertMsg(
        "Please check you internet connection and try again later"
      );
      // dispatch({ type: FETCH_EARNINGS, payLoad: {} });
    }
  };
};

export const createTransaction = (e, token) => {
  let url = "http://127.0.0.1:8000/api/createtransaction";
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  const request = new Request(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(e),
  });

  return async (dispatch) => {
    try {
      const response = await fetch(request);
      const resData = await response.json();
      if (resData["state"]) {
        common.alertMsg("transaction created successfully", 5000);
        return true;
        // dispatch({ type: "CREATE_TRANSACTION", payLoad: resData });
      } else {
        common.alertMsg("Failed to create Transaction", 5000);
      }
    } catch {
      common.alertMsg("transaction created successfully", {
        duration: 5000,
      });
      // dispatch({ type: CREATE_TRANSACTION, payLoad: {} });
    }
  };
};

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
        dispatch({ type: "FETCH_ALL_ACTIVITIES", payLoad: resData });
      }
    } catch (e) {
      common.alertMsg("transaction created successfully", 5000);
      dispatch({ type: "FETCH_ALL_ACTIVITIES", payLoad: {} });
    }
  };
};

export const deleteActivity = (e) => {
  let url = `http://127.0.0.1:8000/api/deletetransaction`;
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${e.userData.token}`,
  });
  const request = new Request(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(e),
  });

  return async (dispatch) => {
    try {
      const response = await fetch(request);
      const resData = await response.json();
      if (resData["state"]) {
        common.alertMsg("Activity deleted successfully", 5000);
        return true;
      } else {
        common.alertMsg("Failed to delete activity", 5000);
      }
    } catch {
      common.alertMsg(
        "Please check you internet connection and try again later",
        5000
      );
      // dispatch({ type: DELETE_ACTIVITY, payLoad: {} });
    }
  };
};
