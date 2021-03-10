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
        console.log(resData);
        dispatch({ type: "GET_PROJECTS", payLoad: resData });
      }
    } catch {}
  };
};
