import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Open_Projects_Modal_List,
  ToggleProjectsModals,
} from "../../../redux/actions/dashboard/Modal";
import { Projects } from "../../../styledComponents/Dashboard/OptionsStyle/Projects";
import CreateProject from "../Modals/createProjectModal";
import ViewProjects from "../Modals/ViewProjectsModal";
//Options  state lives here
const ProjectsOption = (props) => {
  const [state, setState] = useState({
    CreateProjectModal: false,
    viewProjects: false,
  });

  const select = useSelector((e) => {
    return e;
  });

  const dispatch = useDispatch();
  /*
  toggles between opening and
  closing the CreateProjects Projects modal
  */
  const CreateProjects = () => {
    dispatch(ToggleProjectsModals());
  };

  /*
  toggles between opening and
  closing the CreateProjects Projects modal
  */

  const viewprojects = () => {
    dispatch(Open_Projects_Modal_List());
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
    </Projects>
  );
};

export default ProjectsOption;
