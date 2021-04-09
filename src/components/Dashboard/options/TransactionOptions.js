import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Transaction } from "../../../styledComponents/Dashboard/OptionsStyle/Transactions";
import CreateTransaction from "../Modals/CreateTransactionModal";
import ListTransactions from "../Modals/listTransactionModal";
import {
  ToggleActivitiesModals,
  OPEN_LIST_ActivitiesModals,
} from "../../../redux/actions/dashboard/Modal";

//Options  state lives here
const TransactionOptions = (props) => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    showModal: false,
    ListTransaction: false,
  });

  /*
   * This funtion   opens
   * the create transaction moldal and
   * closes the list transaction moldal
   */
  const showTransactionModal = () => {
    dispatch(ToggleActivitiesModals());
  };

  /*
   * This funtion  opens
   * the list transaction moldal and
   * closes the create transaction moldal
   */
  const ListTransactionModal = () => {
    dispatch(OPEN_LIST_ActivitiesModals());
  };

  return (
    <Transaction>
      <div className="contain">
        <ul className="list">
          <li
            onClick={() => {
              showTransactionModal();
            }}
          >
            Create transaction
          </li>
          <li
            onClick={() => {
              ListTransactionModal();
            }}
          >
            List all transactions
          </li>
        </ul>
      </div>
    </Transaction>
  );
};

export default TransactionOptions;
