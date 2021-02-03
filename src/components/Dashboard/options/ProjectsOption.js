import React, { useState } from "react";
import { Projects } from "../../../styledComponents/Dashboard/OptionsStyle/Projects";
import CreateProject from "../Modals/createProjectModal";
import ViewProjects from "../Modals/ViewProjectsModal";
//Options  state lives here
const ProjectsOption = (props) => {
  const [state, setState] = useState({
    CreateProjectModal: false,
    viewProjects: false,
  });

  /*
  toggles between opening and
  closing the CreateProjects Projects modal
  */
  const CreateProjects = () => {
    setState((prevstate) => ({
      ...prevstate,
      CreateProjectModal: !state.CreateProjectModal,
      viewProjects: false,
    }));
  };

  /*
  toggles between opening and
  closing the CreateProjects Projects modal
  */

  const viewprojects = () => {
    setState((prevstate) => ({
      ...prevstate,
      CreateProjectModal: false,
      viewProjects: !state.viewProjects,
    }));
  };
  return (
    <Projects>
      <div className="contain">
        <ul className="list">
          <li
            onClick={() => {
              CreateProjects();
            }}
          >
            Create Project
          </li>
          <li
            onClick={() => {
              viewprojects();
            }}
          >
            View all Project
          </li>
        </ul>
      </div>
      {/*
      if the state is true the moldal will open
      else the moldal will be closed
      */}
      {state.CreateProjectModal ? (
        <CreateProject state={state} setState={setState} />
      ) : null}
      {/*
     shows the view projects modal
      */}
      {state.viewProjects ? (
        <ViewProjects state={state} setState={setState} />
      ) : null}
    </Projects>
  );
};

export default ProjectsOption;
