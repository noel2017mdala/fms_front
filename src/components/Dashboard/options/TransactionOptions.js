import React, { useState } from "react";
import { Transaction } from "../../../styledComponents/Dashboard/OptionsStyle/Transactions";
import CreateTransaction from "../Modals/CeateTransactionModal";
const TransactionOptions = (props) => {
  const [state, setState] = useState({
    showModal: false,
    ListTransaction: false,
  });

  const showTransactionModal = () => {
    setState((prevState) => ({
      ...prevState,
      showModal: !state.showModal,
      ListTransaction: !state.ListTransaction ? false : true,
    }));
  };
  return (
    <Transaction>
      <div className="contain">
        <ul className="list">
          <li
            onClick={() => {
              showTransactionModal();
              // props.setState((prevState) => ({
              //   ...prevState,
              //   active: false,
              // }));
            }}
          >
            Create transaction
          </li>
          <li>List all transactions</li>
        </ul>
      </div>
      {!state.showModal ? (
        ""
      ) : (
        <CreateTransaction state={state} setState={setState} />
      )}
    </Transaction>
  );
};

export default TransactionOptions;
