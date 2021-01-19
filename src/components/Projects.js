import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../redux/actions/actionCreator";
import projectStyle from "../styles/ProjectsStyle";

const Projects = (props) => {
  const dispatch = useDispatch();
  const select = useSelector((e) => {
    return e;
  });

  const getDate = (e) => {
    let date = new Date(e);
    return date.toDateString();
  };

  const override = `
  display: block;
  margin: 0 auto;
  border-color: black;
  margin-top: 120px;
      `;

  useEffect(() => {
    dispatch(getProjects(props));
  }, [dispatch, props]);
  return (
    <div style={projectStyle.body}>
      <h1 style={projectStyle.projects_h1}>Projects</h1>
      <div>
        {!select.projects.data ? (
          <ClipLoader css={override} size="40px" />
        ) : !select.projects.data.projects ? (
          <ClipLoader css={override} size="40px" />
        ) : (
          select.projects.data.projects.map((e) => (
            <div key={e.projects_id}>
              <div style={projectStyle.projects_content}>
                <p style={projectStyle.projects_p}>
                  {e.projects_name}
                  <span style={projectStyle.project_span}>
                    {getDate(e.date_created)}
                  </span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Projects;
