import React, { useState } from "react";
import { Transaction } from "../../../styledComponents/Dashboard/OptionsStyle/Transactions";
import CreateTransaction from "../Modals/CeateTransactionModal";
import ListTransactions from "../Modals/listTransactionModal";

//Options  state lives here
const TransactionOptions = (props) => {
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
    setState((prevState) => ({
      ...prevState,
      showModal: true,
      ListTransaction: false,
    }));
  };

  /*
   * This funtion  opens
   * the list transaction moldal and
   * closes the create transaction moldal
   */
  const ListTransactionModal = () => {
    setState((prevState) => ({
      ...prevState,
      showModal: false,
      ListTransaction: true,
    }));
    console.log(state);
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
      {!state.showModal ? (
        ""
      ) : (
        <CreateTransaction state={state} setState={setState} />
      )}

      {!state.ListTransaction ? null : (
        <ListTransactions state={state} setState={setState} />
      )}
    </Transaction>
  );
};

export default TransactionOptions;
