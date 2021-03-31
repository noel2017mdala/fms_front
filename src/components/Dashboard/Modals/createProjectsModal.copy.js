import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSpring, animated } from "react-spring";
import { createproject } from "../../../redux/actions/actionCreator";
import toast from "toasted-notes";
import Cookies from "universal-cookie";
import {
  Background,
  ModalWrapper,
  ModalCotent,
  CloseModal,
} from "../../../styledComponents/Dashboard/Modals/createProjectsModal";

const CreateProject = (props) => {
  //project options state to close and open the create project modal
  const closeModal = () => {
    props.setState((prevState) => ({
      ...prevState,
      CreateProjectModal: !props.state.CreateProjectModal,
    }));
  };
  //dispatch variable
  const dispatch = useDispatch();

  //select funtion

  const select = useSelector((e) => {
    return e;
  });

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
      toast.notify("project name and project alias cannot be empty", {
        duration: 5000,
      });
    } else if (uiState.project_name === "" || uiState.project_alias === "") {
      toast.notify("Please enter the project name and alias", {
        duration: 5000,
      });
    } else {
      let req = {
        token: cookie.get("login"),
        id: cookie.get("user info")[0].id,
        userinput: uiState,
      };
      dispatch(createproject(req));
      // console.log(req);
    }
  };
  console.log(select);
  return (
    <div>
      <Background>
        <ModalWrapper>
          <ModalCotent>
            <h1 className="header">Create Projects</h1>
            <div className="uservalue">
              <form>
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
                      closeModal();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </ModalCotent>
          <CloseModal
            onClick={() => {
              closeModal();
            }}
          >
            &times;
          </CloseModal>
        </ModalWrapper>
      </Background>
    </div>
  );
};

export default CreateProject;
