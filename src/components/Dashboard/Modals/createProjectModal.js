import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { useSpring, animated } from "react-spring";
import { createproject } from "../../../redux/actions/actionCreator";
import { Close_Projects_Modals_List } from "../../../redux/actions/dashboard/Modal";
import toast from "toasted-notes";
import Cookies from "universal-cookie";
import { Background } from "../../../styledComponents/Dashboard/Modals/createProjectsModal";
import Common from "../../../classes/componentClass";
import { getProjects } from "../../../redux/actions/dashboard/projectAction";

const CreateProject = (props) => {
  //project options state to close and open the create project modal

  //dispatch variable
  const dispatch = useDispatch();

  //select function

  // const select = useSelector((e) => {
  //   return e;
  // });

  //user input state
  const [uiState, setUi] = useState({
    project_name: "",
    project_alias: "",
  });
  //cookie manager
  const cookie = new Cookies();
  //validates user data before submitting to the server
  const validate = () => {
    if (uiState.project_name === "" && uiState.project_alias === "") {
      Common.alertMsg("project name and project alias cannot be empty", 5000);
    } else if (uiState.project_name === "" || uiState.project_alias === "") {
      toast.notify("Please enter the project name and alias", 5000);
    } else {
      let req = {
        token: cookie.get("auth_token"),
        id: cookie.get("user_info")[0].id,
        userinput: uiState,
      };
      const addProject = dispatch(createproject(req));
      if (addProject) {
        dispatch(getProjects(cookie.get("auth_token")));
      }
      // console.log(req);
    }
  };
  // console.log(select);
  return (
    <Background>
      <div className="projectsWrapper">
        <div className="projectsContent">
          <div
            className="closeModal"
            onClick={(e) => {
              e.preventDefault();
              dispatch(Close_Projects_Modals_List());
            }}
          >
            &times;
          </div>
          <h1 className="header">Create Projects</h1>
          <div className="values">
            <form className="formData">
              <label>Project name</label>
              <input
                type="text"
                name="projects_name"
                placeholder="project name"
                onChange={(e) => {
                  setUi((prevState) => ({
                    ...prevState,
                    project_name: e.target.value,
                  }));
                }}
              />
              <label>Alias name</label>
              <input
                type="text"
                name="alias_name"
                placeholder="Alias name"
                onChange={(e) => {
                  setUi((prevState) => ({
                    ...prevState,
                    project_alias: e.target.value,
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
                  Create Project
                </button>
                <button
                  className="cancel"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(Close_Projects_Modals_List());
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

export default CreateProject;
