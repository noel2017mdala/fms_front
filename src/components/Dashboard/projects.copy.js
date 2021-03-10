import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { getProjects } from "../../redux/actions/actionCreator";
import ProjectsOption from "./options/ProjectsOption";
import { Projects as Project } from "../../styledComponents/Dashboard/Projects";
import icon from "../../images/more-512.webp";
const Projects = (props) => {
  const dispatch = useDispatch();
  const select = useSelector((e) => {
    return e;
  });

  const [state, setState] = useState({
    showOptionsMenu: false,
  });

  const getDate = (e) => {
    let date = new Date(e);
    return date.toDateString();
  };
  useEffect(() => {
    dispatch(getProjects(props));
  }, [dispatch, props]);
  const override = `
  display: block;
  margin: 0 auto;
  border-color: black;
  margin-top: 10px;
      `;
  return (
    <Project>
      <div className="top">
        <img
          src={icon}
          alt="options"
          onClick={() => {
            setState((prevstate) => ({
              ...prevstate,
              showOptionsMenu: !state.showOptionsMenu,
            }));
          }}
        />
        {state.showOptionsMenu ? <ProjectsOption /> : null}
        <h3>Recent Projects</h3>
      </div>
      <div className="bottom">
        {!select.projects.data ? (
          <ClipLoader css={override} size="30px" />
        ) : !select.projects.data.projects ? (
          <ClipLoader css={override} size="30px" />
        ) : select.projects.data.projects < 1 ? (
          <h3 className="info"> No recent projects found</h3>
        ) : (
          select.projects.data.projects.map((e) => (
            <div key={e.projects_id}>
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
    </Project>
  );
};

export default Projects;
