import React from "react";
import {
  Background,
  ModalWrapper,
  ModalCotent,
  CloseModal,
} from "../../../styledComponents/Dashboard/Modals/viewProjectsModal";

const ViewProjects = (props) => {
  return (
    <div>
      <Background>
        <ModalWrapper>
          <ModalCotent>Hello World</ModalCotent>
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
