import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/actionCreator";
// import ClipLoader from "react-spinners/ClipLoader";
import InfoClass from "../../classes/componentClass";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
import { Main as Mainbar } from "../../styledComponents";
const Main = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    loadState: false,
  });

  const dispatch = useDispatch();
  const paramClass = InfoClass;
  const history = useHistory();
  const cookies = new Cookies();
  const select = useSelector((e) => {
    return e;
  });

  /*
  adds user input into a state
  */
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      loadState: false,
    }));
  };

  /*
  collects and validates user inputs
  and dispatches an action;
  */
  const submitInput = (e) => {
    e.preventDefault();
    if (state.email === "" || state.password === "") {
      paramClass.alertErroMsg("Please enter your Email and Password");
    } else if (state.email && state.password === "") {
      paramClass.alertErroMsg("Please enter details");
    } else {
      dispatch(login(state));

      setState((prevState) => ({
        ...prevState,
        loadState: true,
      }));
    }
  };

  const validateServerResponce = (e) => {
    if (e === undefined) {
      state.loadState = false;
    } else if (e.state) {
      cookies.set("login", e.token, {
        sameSite: "strict",
        path: "/",
        expires: new Date(new Date().getTime() + 200000 * 1000),
        // httpOnly: true,
        // secure: true,
      });
      cookies.set("user info", e.user_info, {
        sameSite: "strict",
        path: "/",
        expires: new Date(new Date().getTime() + 200000 * 1000),
        // httpOnly: true,
        // secure: true,
      });
      if (cookies.get("login")) {
        history.push("/dashboard");
      }
    }
  };
  return (
    <Mainbar>
      <Router>
        <div className="container">
          {cookies.get("login") ? history.push("/dashboard") : ""}
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
              <button onClick={submitInput}>
                Let's get started
                {!state.loadState ? "" : ""}
              </button>
              {!select.login.data
                ? ""
                : validateServerResponce(select.login.data)}
            </div>
          </div>
        </div>
      </Router>
    </Mainbar>
  );
};

export default Main;
