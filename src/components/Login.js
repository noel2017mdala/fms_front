import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/actionCreator";
import ClipLoader from "react-spinners/ClipLoader";
import InfoClass from "../classes/componentClass";
import Leading from "./Landingpage";
import {
  BrowserRouter as Router,
  useHistory,
  Redirect,
} from "react-router-dom";
import Cookies from "universal-cookie";

const Login = () => {
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
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      loadState: false,
    }));
  };

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

  const hundleFormSubmit = (e) => {
    if (e === undefined) {
      state.loadState = false;
    } else {
      cookies.set("login", e, {
        sameSite: "strict",
        path: "/",
        expires: new Date(new Date().getTime() + 200000 * 10000),
        // httpOnly: true,
        // secure: true,
      });

      if (cookies.get("login")) {
        history.push("/dashboard");
      }
    }
  };
  return (
    <Router>
      <div>
        {cookies.get("login") ? history.push("/dashboard") : ""}
        <p className="first">
          Find out why <span>Countfy</span> is the Leading Financial management
          software and why we receive more that <span>12 million</span> Visitors
          in a single day
        </p>
        <p>
          Countfy Makes tracking and managing of your finances easy, fast and
          secure. get started now
        </p>

        <input
          type="text"
          name="email"
          placeholder="Email"
          required="required"
          onChange={handleSubmit}
        />
        <input
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
        {!select.login.data ? "" : hundleFormSubmit(select.login.data.token)}
      </div>
    </Router>
  );
};

export default Login;
