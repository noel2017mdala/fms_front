import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import { createTransaction } from "../../../redux/actions/actionCreator";
import toast from "toasted-notes";
import Cookies from "universal-cookie";

import {
  Background,
  ModalWrapper,
  ModalCotent,
  CloseModal,
} from "../../../styledComponents/Dashboard/Modals/createTransactionModal";

const CreateTransaction = ({ state, setState }) => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const [userValue, getValue] = useState({
    transaction_name: "",
    transaction_ammount: "",
    transaction_type: "",
  });
  const ref = useRef();
  const animation = useSpring({
    config: {
      duration: 350,
    },
    opacity: state.showModal ? 1 : 0,
    transform: state.showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    getValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateinput = () => {
    const {
      transaction_name,
      transaction_ammount,
      transaction_type,
    } = userValue;
    if (
      transaction_name === "" ||
      transaction_ammount === "" ||
      transaction_type === ""
    ) {
      toast.notify("All values are required");
    } else if (
      transaction_name &&
      transaction_ammount &&
      transaction_type === ""
    ) {
      toast.notify("values can never be empty ");
    } else {
      let data = {
        ...userValue,
        transaction_by: cookies.get("user info")[0].id,
      };

      dispatch(createTransaction(data, cookies.get("login")));
      // setTimeout(toggleModal, 2000);
    }
  };
  const toggleModal = () => {
    setState((prevstate) => ({
      ...prevstate,
      showModal: false,
    }));
  };
  return (
    <div className="container">
      {state.showModal ? (
        <Background ref={ref} onClick={() => {}}>
          <animated.div style={animation}>
            <ModalWrapper state={state}>
              <ModalCotent>
                <h1 className="header">Create Transaction</h1>
                <div className="uservalue">
                  <form>
                    <label>transaction name</label>
                    <input
                      type="text"
                      name="transaction_name"
                      placeholder="transaction name"
                      onChange={handleSubmit}
                    />
                    <label>transaction amount</label>
                    <input
                      type="number"
                      name="transaction_ammount"
                      placeholder="transaction amount"
                      onChange={handleSubmit}
                    />
                    <label>Transaction type</label>
                    <select name="transaction_type" onChange={handleSubmit}>
                      <option value="select">Select</option>
                      <option value="income">Income</option>
                      <option value="expenditure">Expenditure</option>
                    </select>
                    <div className="buttons">
                      <button
                        className="create"
                        onClick={(e) => {
                          e.preventDefault();
                          validateinput();
                        }}
                      >
                        Create Transaction
                      </button>
                      <button
                        className="cancel"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleModal();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </ModalCotent>
              <CloseModal
                onClick={() => {
                  setState((prevstate) => ({
                    ...prevstate,
                    showModal: false,
                  }));
                }}
              >
                &times;
              </CloseModal>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </div>
  );
};

export default CreateTransaction;
