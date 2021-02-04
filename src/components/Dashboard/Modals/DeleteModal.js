import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../../styledComponents/Dashboard/Modals/deleteModal";
import { deleteActivity } from "../../../redux/actions/actionCreator";
import Cookies from "universal-cookie";
const DeleteModal = ({ modalState, showModal }) => {
  const dispatch = useDispatch();
  const cookie = new Cookies();
  const token = cookie.get("login");
  // const select = useSelector((e) => {
  //   return e;
  // });
  const modalToggle = () => {
    showModal((prevState) => ({
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
            dispatch(deleteActivity(token, modalState));
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
