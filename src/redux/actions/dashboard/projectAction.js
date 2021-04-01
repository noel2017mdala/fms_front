import Common from "../../../classes/componentClass";

export const ListProjects = (e) => {
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
        dispatch({ type: "VIEW_PROJECTS", payLoad: resData });
      }
    } catch (e) {
      Common.alertMsg(
        "Please check you internet connection and try again later",
        5000
      );
      // dispatch({ type: VIEW_PROJECTS, payLoad: {} });
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
      if (resData["state"]) {
        Common.alertMsg("Project created successfully", 5000);
      }
    } catch {
      Common.alertMsg(
        "Please check you internet connection and try again later",
        5000
      );
      // dispatch({ type: CREATE_PROJECTS, payLoad: {} });
    }
  };
};

export const getProjects = (e) => {
  let url = "http://127.0.0.1:8000/api/projects";
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${e}`,
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
        dispatch({ type: "GET_PROJECTS", payLoad: resData });
      }
    } catch {
      Common.alertMsg(
        "Please check you internet connection and try again later",

        5000
      );
      // dispatch({ type: FETCH_PROJECTS, payLoad: {} });
    }
  };
};

export const deleteProject = (e) => {
  let url = `http://127.0.0.1:8000/api/deleteproject`;
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
      if (resData["state"]) {
        Common.alertMsg("Activity deleted successfully", 1000);
        return true;
      } else {
        Common.alertMsg("Failed to delete activity", 1000);
      }
    } catch {
      Common.alertMsg(
        "Please check you internet connection and try again later",
        5000
      );
    }
  };
};
