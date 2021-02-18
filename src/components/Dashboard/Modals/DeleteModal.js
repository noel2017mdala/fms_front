import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../../styledComponents/Dashboard/Modals/deleteModal";

const DeleteModal = (props) => {
  const dispatch = useDispatch();

  const modalToggle = () => {
    props.showModal((prevState) => ({
      ...prevState,
      showDeleteModal: false,
    }));
  };
  return (
    <Container>
      <h3 className="warning">Are you sure you want to proceed ?</h3>
      <div className="button-container">
        <button
          className="delete"
          onClick={() => {
            // console.log(props.params);
            dispatch(props.action(props.params));
            modalToggle();
          }}
        >
          Delete
        </button>
        <button
          className="cancel"
          onClick={() => {
            modalToggle();
          }}
        >
          Cancel
        </button>
      </div>
    </Container>
  );
};

export default DeleteModal;
