import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTransaction } from "../../../redux/actions/dashboard/activities";
import {
  getAmount,
  getBalance,
} from "../../../redux/actions/dashboard/balanceStat";
import { activitiesAction } from "../../../redux/actions/dashboard/activities";
import { CloseActivitiesModals } from "../../../redux/actions/dashboard/Modal";
import toast from "toasted-notes";
import Cookies from "universal-cookie";

import { Container } from "../../../styledComponents/Dashboard/Modals/createTransactionModal";

const CreateTransaction = () => {
  // user cookies
  const cookies = new Cookies();

  // action dispatcher
  const dispatch = useDispatch();

  /*
  internal state
  for handling user submitted value 🔥 
  */
  const [userValue, getValue] = useState({
    transaction_name: "",
    transaction_ammount: "",
    transaction_type: "",
  });

  const handleSubmit = (e) => {
    const { name, value } = e.target;
    getValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /*
  form validator 
  before submitting
  */

  const validate_input = () => {
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
    } else if (transaction_ammount < 1) {
      toast.notify("Values must be greater than zero");
    } else {
      let data = {
        ...userValue,
        transaction_by: cookies.get("user_info")[0].id,
      };

      const getDispatch = dispatch(
        createTransaction(data, cookies.get("auth_token"))
      );
      if (getDispatch) {
        // re-render components
        let getUserInfo = cookies.get("user_info")[0];
        let getToken = cookies.get("auth_token");

        dispatch(getBalance(getUserInfo, getToken));
        dispatch(getAmount(getUserInfo, getToken));

        dispatch(
          activitiesAction({
            token: getToken,
            id: [getUserInfo],
          })
        );
      }
    }
  };
  return (
    <Container
      onClick={() => {
        //dispatch(CloseActivitiesModals());
      }}
    >
      <div className="modalWrapper">
        <div className="modalContent">
          <div
            className="closeModal"
            onClick={(e) => {
              e.preventDefault();
              dispatch(CloseActivitiesModals());
            }}
          >
            &times;
          </div>
          <h1 className="header">Create Transaction</h1>
          <div className="userValue">
            <form>
              <label>transaction name</label>
              <input
                type="text"
                name="transaction_name"
                placeholder="Transaction Name"
                onChange={handleSubmit}
              />
              <label>transaction amount</label>
              <input
                type="number"
                name="transaction_ammount"
                placeholder="Transaction Amount"
                onChange={handleSubmit}
              />
              <label>Transaction type</label>
              <select name="transaction_type" onChange={handleSubmit}>
                <option value="select">Select Transaction</option>
                <option value="income">Income</option>
                <option value="expenditure">Expenditure</option>
              </select>
              <div className="buttons">
                <button
                  className="create"
                  onClick={(e) => {
                    e.preventDefault();
                    validate_input();
                  }}
                >
                  Create Transaction
                </button>
                <button
                  className="cancel"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(CloseActivitiesModals());
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CreateTransaction;
