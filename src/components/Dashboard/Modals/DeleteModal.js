import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../../styledComponents/Dashboard/Modals/deleteModal";

import Cookies from "universal-cookie";
const DeleteModal = (props) => {
  const dispatch = useDispatch();
  const cookie = new Cookies();
  const token = cookie.get("login");
  // const select = useSelector((e) => {
  //   return e;
  // });
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
