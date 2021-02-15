import toast from "toasted-notes";
import "toasted-notes/src/styles.css";
export const FETCH_LOGIN = "FETCH_LOGIN";
export const FETCH_ACTIVITIES = "FETCH_ACTIVITIES";
export const FETCH_EARNINGS = "FETCH_EARNINGS";
export const FETCH_EXPENSES = "FETCH_EXPENSES";
export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const CREATE_TRANSACTION = "CREATE_TRANSACTION";
export const FETCH_ALL_ACTIVITIES = "FETCH _ALL_ACTIVITIES";
export const DELETE_ACTIVITY = "DELETE_ACTIVITY";
export const CREATE_PROJECTS = "CREATE_PROJECTS";
export const VIEW_PROJECTS = "VIEW_PROJECTS";
export const DELETE_PROJECT = "DELETE_PROJECT";
export const FETCH_AMOUNT = "FETCH_AMOUNT";

export const login = (e) => {
  let url = "http://127.0.0.1:8000/api/login";
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
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
        dispatch({ type: FETCH_LOGIN, payLoad: resData });
      } else {
        toast.notify("Incorrect Email or Password", {
          duration: 5000,
        });

        dispatch({ type: FETCH_LOGIN, payLoad: resData });
      }
    } catch (e) {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      dispatch({ type: FETCH_LOGIN, payLoad: {} });
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
        toast.notify("transaction created successfully", {
          duration: 5000,
        });
        dispatch({ type: CREATE_TRANSACTION, payLoad: resData });
      }
    } catch {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      dispatch({ type: CREATE_TRANSACTION, payLoad: {} });
    }
  };
};
export const activitiesAction = (e) => {
  let url = `http://127.0.0.1:8000/api/transaction/limit/${e.id}`;
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
        dispatch({ type: FETCH_ACTIVITIES, payLoad: resData });
      }
    } catch (e) {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      dispatch({ type: FETCH_ACTIVITIES, payLoad: {} });
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
        dispatch({ type: FETCH_ALL_ACTIVITIES, payLoad: resData });
      }
    } catch (e) {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      dispatch({ type: FETCH_ALL_ACTIVITIES, payLoad: {} });
    }
  };
};

export const getEarnings = (e) => {
  let url = `http://127.0.0.1:8000/api/earnings/${e.id}`;
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
        dispatch({ type: FETCH_EARNINGS, payLoad: resData });
      }
    } catch (e) {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      dispatch({ type: FETCH_EARNINGS, payLoad: {} });
    }
  };
};

export const getExpenses = (e) => {
  let url = `http://127.0.0.1:8000/api/expences/${e.id}`;
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
        dispatch({ type: FETCH_EXPENSES, payLoad: resData });
      }
    } catch {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      dispatch({ type: FETCH_EARNINGS, payLoad: {} });
    }
  };
};

export const getProjects = (e) => {
  let url = "http://127.0.0.1:8000/api/projects";
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
        dispatch({ type: FETCH_PROJECTS, payLoad: resData });
      }
    } catch {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      dispatch({ type: FETCH_PROJECTS, payLoad: {} });
    }
  };
};

export const deleteActivity = (e) => {
  let url = `http://127.0.0.1:8000/api/deletetransaction/${e.userData.id}/${e.id}`;
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${e.userData.token}`,
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
        toast.notify("Activity deleted successfuly", {
          duration: 5000,
        });
        // dispatch({ type: DELETE_ACTIVITY, payLoad: resData });
        // dispatch({ type: FETCH_ALL_ACTIVITIES, payLoad: resData });
      } else {
        toast.notify("Faied to delete activity", {
          duration: 5000,
        });
      }
    } catch {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      // dispatch({ type: DELETE_ACTIVITY, payLoad: {} });
    }
  };
};

export const createproject = (e) => {
  let url = `http://127.0.0.1:8000/api/createproject`;
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${e.token}`,
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
      console.log(resData);
      if (resData["state"]) {
        toast.notify("Project created successfuly", {
          duration: 5000,
        });
        dispatch({ type: CREATE_PROJECTS, payLoad: resData });
      }
    } catch {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      dispatch({ type: CREATE_PROJECTS, payLoad: {} });
    }
  };
};

export const viewprojects = (e) => {
  let url = `http://127.0.0.1:8000/api/viewprojects/${e.id}`;
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
        dispatch({ type: VIEW_PROJECTS, payLoad: resData });
      }
    } catch (e) {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      dispatch({ type: VIEW_PROJECTS, payLoad: {} });
    }
  };
};

export const deleteProject = (e) => {
  console.log(e);
  let url = `http://127.0.0.1:8000/api/deleteproject/${e.id}`;
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${e.userData.token}`,
  });
  const request = new Request(url, {
    method: "GET",
    headers: headers,
  });

  return async (dispatch) => {
    try {
      const response = await fetch(request);
      const resData = await response.json();
      console.log(resData);
      if (resData["state"]) {
        toast.notify("Activity deleted successfuly", {
          duration: 1000,
        });
        // dispatch({ type: DELETE_ACTIVITY, payLoad: resData });
        // dispatch({ type: FETCH_ALL_ACTIVITIES, payLoad: resData });
      } else {
        toast.notify("Faied to delete activity", {
          duration: 1000,
        });
      }
    } catch {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      // dispatch({ type: DELETE_ACTIVITY, payLoad: {} });
    }
  };
};

export const getAmount = (e) => {
  let url = `http://127.0.0.1:8000/api/getamounttransactions/${e}`;
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    // Authorization: `Bearer ${e.token}`,
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
        dispatch({ type: FETCH_AMOUNT, payLoad: resData });
      }
    } catch (e) {
      toast.notify("Please check you internet connection and try again later", {
        duration: 5000,
      });
      dispatch({ type: FETCH_AMOUNT, payLoad: {} });
    }
  };
};
