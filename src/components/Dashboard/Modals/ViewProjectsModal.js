import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { Background } from "../../../styledComponents/Dashboard/Modals/viewProjectsModal";
import {
  ListProjects,
  deleteProject,
  getProjects,
} from "../../../redux/actions/dashboard/projectAction";
import Cookies from "universal-cookie";
import Bin from "../../../images/bin.png";

const ViewProjects = (props) => {
  // user information stored in cookies
  const cookie = new Cookies();
  let userInfo = cookie.get("user_info");
  let userData = { token: cookie.get("auth_token"), id: userInfo[0].id };

  // Action dispatcher function
  const dispatch = useDispatch();

  //state selector
  const select = useSelector((e) => {
    return e;
  });

  //component state
  // const [state, setState] = useState({
  //   showDeleteModal: false,
  //   userData: userData,
  // });

  // dispatches the action when the component renders
  useEffect(() => {
    dispatch(ListProjects(userData));
  }, [dispatch]);

  // loader css overider
  const override = `
  display: block;
  margin: 0 auto;
  border-color: black;
  margin-top: 10px;
      `;

  const getDate = (e) => {
    let date = new Date(e);
    return date.toDateString();
  };

  return (
    <div>
      <Background>
        <div className="listProjectsWrapper">
          <div className="listProjects_header">
            <h3>All Projects</h3>
            <div
              className="closeModal"
              onClick={(e) => {
                e.preventDefault();
                props.setState((prevState) => ({
                  ...prevState,
                  viewProjects: false,
                }));
              }}
            >
              &times;
            </div>

            <div className="items">
              {!select.ListProjects ? (
                <ClipLoader size="30px" css={override} />
              ) : !select.ListProjects.state ? (
                <ClipLoader size="30px" css={override} />
              ) : select.ListProjects.projects < 1 ? (
                <h3> No projects found</h3>
              ) : (
                select.ListProjects.projects.map((e) => (
                  <div key={e.projects_id} className="project_list">
                    <ul>
                      <li>
                        {e.projects_name}
                        <span>{getDate(e.date_created)}</span>
                        <img
                          src={Bin}
                          alt="Bin"
                          className="delete_project"
                          onClick={() => {
                            let checkDeleted = dispatch(
                              deleteProject({
                                userId: userInfo[0].id,
                                token: cookie.get("auth_token"),
                                itemId: e.projects_id,
                              })
                            );
                            if (checkDeleted) {
                              dispatch(ListProjects(userData));
                              dispatch(getProjects(cookie.get("auth_token")));
                            }
                          }}
                        />
                      </li>
                    </ul>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default ViewProjects;
