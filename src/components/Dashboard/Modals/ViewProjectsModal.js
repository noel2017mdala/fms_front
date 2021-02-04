import React, { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  Background,
  ModalWrapper,
  ModalCotent,
  CloseModal,
} from "../../../styledComponents/Dashboard/Modals/viewProjectsModal";
import { viewprojects } from "../../../redux/actions/actionCreator";
import Cookies from "universal-cookie";
import Bin from "../../../images/bin.png";

const ViewProjects = (props) => {
  // user informatin stored in cookies
  const cookie = new Cookies();
  let userInfo = cookie.get("user info");
  let userData = { token: cookie.get("login"), id: userInfo[0].id };

  // Action dispatcher function
  const dispatch = useDispatch();

  //state selector
  const select = useSelector((e) => {
    return e;
  });

  // dispatches the action when the component renders
  useEffect(() => {
    dispatch(viewprojects(userData));
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
        <ModalWrapper>
          <ModalCotent>
            <div className="listProjects">
              <h3>All Projects</h3>
              {!select.projects ? (
                <ClipLoader size="30px" css={override} />
              ) : !select.projects.projects ? (
                <ClipLoader size="30px" css={override} />
              ) : !select.projects.projects.projects ? (
                <ClipLoader size="30px" css={override} />
              ) : select.projects.projects.projects < 1 ? (
                <h3> No projects found</h3>
              ) : (
                select.projects.projects.projects.map((e) => (
                  <div key={e.projects_id} className="project_list">
                    <ul>
                      <li>
                        {e.projects_name}
                        <span>{getDate(e.date_created)}</span>
                        <img
                          src={Bin}
                          alt="Bin"
                          onClick={() => {
                            console.log(e.id);
                          }}
                        />
                      </li>
                    </ul>
                  </div>
                ))
              )}
            </div>
          </ModalCotent>
          <CloseModal
            onClick={() => {
              props.setState((prevState) => ({
                ...prevState,
                viewProjects: false,
              }));
            }}
          >
            &times;
          </CloseModal>
        </ModalWrapper>
      </Background>
    </div>
  );
};

export default ViewProjects;
