import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import icon from "../../images/more-512.webp";
import { getProjects } from "../../redux/actions/dashboard/projectAction";
import { ToggleProjects } from "../../redux/actions/dashboard/optionsAction";
import Cookies from "universal-cookie";
import { Projects as Project } from "../../styledComponents/Dashboard/Projects";
import ProjectsOption from "./options/ProjectsOption";
import Common from "../../classes/componentClass";
const Projects = (props) => {
  //get redux state
  const select = useSelector((e) => {
    return e;
  });

  //user cookies
  const cookies = new Cookies();
  const getToken = cookies.get("auth_token");

  // Dispatch the action when the page loads
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects(getToken));
  }, [dispatch]);

  const getDate = (e) => {
    let date = new Date(e);
    return date.toDateString();
  };

  return (
    <Project>
      <div className="project_container">
        <img
          className="projects_image"
          src={icon}
          alt="options icon"
          onClick={() => {
            dispatch(ToggleProjects());
          }}
        />
        <h3>Recent Projects</h3>
      </div>
      <div className="project_items">
        {!select.Project ? (
          <ClipLoader css={Common.loader("black")} size="30px" />
        ) : !select.Project.projects ? (
          <ClipLoader css={Common.loader("black")} size="30px" />
        ) : select.Project.projects < 1 ? (
          <h3 className="info"> No recent projects found</h3>
        ) : (
          select.Project.projects.map((e) => (
            <div key={e.projects_id} className="project_items">
              <ul className="user_projects">
                <li className="projectList">
                  {e.projects_name}
                  <span>{getDate(e.date_created)}</span>
                </li>
              </ul>
            </div>
          ))
        )}
      </div>
      {select.ToggleOptions.projects ? <ProjectsOption /> : null}
    </Project>
  );
};

export default Projects;
