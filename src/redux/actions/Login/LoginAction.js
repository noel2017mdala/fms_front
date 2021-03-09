import Common from "../../../classes/componentClass";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const submit = () => {
  return {
    type: "SUBMIT",
  };
};

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
        //stores token to cookies
        cookies.set("auth_token", resData["token"], {
          sameSite: "strict",
          path: "/",
          expires: new Date(new Date().getTime() + 200000 * 100),
          // httpOnly: true,
          // secure: true,
        });

        //stores user information to cookies
        cookies.set("user_info", resData["user_info"], {
          sameSite: "strict",
          path: "/",
          expires: new Date(new Date().getTime() + 200000 * 1000),
          // httpOnly: true,
          // secure: true,
        });

        if (cookies.get("auth_token") && cookies.get("user_info")) {
          dispatch({ type: "LOGIN_TOKEN", payLoad: resData });
        }
      } else {
        dispatch({ type: "END_SUBMIT", payLoad: resData });
        Common.alertMsg("Username or password is incorrect");
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
