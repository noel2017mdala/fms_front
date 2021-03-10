import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import icon from "../../images/more-512.webp";
import { getProjects } from "../../redux/actions/dashboard/projectAction";
import Cookies from "universal-cookie";
import { Projects as Project } from "../../styledComponents/Dashboard/Projects";
const Projects = (props) => {
  const cookies = new Cookies();
  const getToken = cookies.get("auth_token");

  // Dispatch the action when the page loads
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects(getToken));
  });

  return (
    <Project>
      <div className="project_container">
        <h3>Recent Projects</h3>
      </div>
    </Project>
  );
};

export default Projects;
