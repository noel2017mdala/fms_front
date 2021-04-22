import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Register } from "../../../redux/actions/Login/LoginAction";
import { Background } from "../../../styledComponents/Dashboard/Modals/LoginModal";
import Common from "../../../classes/componentClass";

const LoginModal = (props) => {
  //project options state to close and open the create project modal

  //dispatch variable
  const dispatch = useDispatch();

  const [uiState, setUi] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  //cookie manager

  //validates user data before submitting to the server
  const validate = () => {
    if (
      uiState.first_name === "" &&
      uiState.last_name === "" &&
      uiState.email === "" &&
      uiState.password === ""
    ) {
      Common.alertMsg(" Please Enter all the required values", 5000);
    } else if (
      uiState.first_name === "" ||
      uiState.last_name === "" ||
      uiState.email === "" ||
      uiState.password === ""
    ) {
      Common.alertMsg("Please all the values", 5000);
    } else if (uiState.password.length < 6) {
      Common.alertMsg(
        "Your password must contain more than 6 characters",
        5000
      );
    } else {
      dispatch(Register(uiState));
      console.log(uiState);
    }
  };

  return (
    <Background>
      <div className="projectsWrapper">
        <div className="projectsContent">
          <div
            className="closeModal"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            &times;
          </div>
          <h1 className="header">Signup</h1>
          <div className="values">
            <form className="formData">
              <label>First Name</label>
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                onChange={(e) => {
                  setUi((prevState) => ({
                    ...prevState,
                    first_name: e.target.value,
                  }));
                }}
              />
              <label>Last Name</label>
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                onChange={(e) => {
                  setUi((prevState) => ({
                    ...prevState,
                    last_name: e.target.value,
                  }));
                }}
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => {
                  setUi((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }));
                }}
              />{" "}
              <label>Last Name</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  setUi((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }));
                }}
              />
              <div className="buttons">
                <button
                  className="create"
                  onClick={(e) => {
                    e.preventDefault();
                    validate();
                  }}
                >
                  Create User
                </button>
                <button
                  className="cancel"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default LoginModal;
