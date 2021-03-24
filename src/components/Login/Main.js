import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Cookies from "universal-cookie";
import { Main as Mainbar } from "../../styledComponents";
import { submit, login } from "../../redux/actions/Login/LoginAction";
import Common from "../../classes/componentClass";

const Main = () => {
  //Log in State manager
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  // collects user info and add them to state
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // redux initial state
  const logInloder = useSelector((state) => state.login);
  const getAuthStatus = useSelector((status) => status);

  /*
  validates user input before sending 
  it to the server
  */
  const ValidateInput = (param) => {
    if (param.email === "") {
      Common.alertMsg("Email cannot be empty");
    } else if (param.password === "") {
      Common.alertMsg("Password Cannot be empty");
    } else {
      dispatch(submit());
      dispatch(login(param));
    }
  };

  //used to redirect user after login
  const history = useHistory();

  /*gets and sets data to cookies*/
  const cookies = new Cookies();

  if (cookies.get("auth_token") && cookies.get("user_info")) {
    history.push("/dashboard");
    console.log("Ready to push");
  }

  return (
    <Mainbar>
      <Router>
        <div className="container">
          <div className="form">
            <div className="company-profile">
              <p>
                Find out why <span>Countfy</span> is the Leading Financial
                management software and why we receive more that
                <span>12 million</span> Visitors in a single day Countfy Makes
                tracking and managing of your finances easy, fast and secure. So
                let's get started now.
              </p>
            </div>

            <div className="login-form">
              <input
                className="email"
                type="text"
                name="email"
                placeholder="Email"
                required="required"
                onChange={handleSubmit}
              />
              <input
                className="password"
                type="password"
                name="password"
                placeholder="password"
                required="required"
                onChange={handleSubmit}
              />
              <button
                onClick={() => {
                  ValidateInput(state);
                }}
              >
                {logInloder ? (
                  <ClipLoader size="20px" css={Common.loader("white")} />
                ) : (
                  "Let's get started"
                )}
              </button>
            </div>
          </div>
          {getAuthStatus.auth ? history.push("/dashboard") : null}
        </div>
      </Router>
    </Mainbar>
  );
};

export default Main;
