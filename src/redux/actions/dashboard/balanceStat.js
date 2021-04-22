import common from "../../../classes/componentClass";
export const getBalance = (userInfo, token) => {
  console.log(userInfo);
  let url = `http://127.0.0.1:8000/api/getamountbalance/${userInfo.id}`;
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
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
        dispatch({ type: "GET_BALANCE", payLoad: resData });
      }
    } catch (e) {
      common.alertMsg(
        "Please check you internet connection and try again later"
      );
      //   dispatch({ type: "GET_BALANCE", payLoad: {} });
    }
  };
};

export const getAmount = (userInfo, token) => {
  let url = `http://127.0.0.1:8000/api/getAmount/${userInfo.id}`;
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
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
        dispatch({ type: "GET_TRANSACTIONS", payLoad: resData });
      }
    } catch (e) {
      common.alertMsg(
        "Please check you internet connection and try again later"
      );
      //   dispatch({ type: "GET_BALANCE", payLoad: {} });
    }
  };
};
