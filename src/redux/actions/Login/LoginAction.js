import Common from "../../../classes/componentClass";

export const submit = () => {
  return {
    type: "SUBMIT",
  };
};

export const login = (e) => {
  console.log(e);

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
        dispatch({ type: "FETCH_LOGIN", payLoad: resData });
      } else {
        dispatch({ type: "FETCH_LOGIN", payLoad: resData });
      }
    } catch (e) {
      /*
        notifies the user 
        and stops the loader 
        */
      Common.alertMsg("Please check your internet connection and try again");
      dispatch({ type: "END_SUBMIT" });
    }
  };
};
