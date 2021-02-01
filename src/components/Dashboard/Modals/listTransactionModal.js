import React from "react";
import {
  Background,
  ModalWrapper,
  ModalCotent,
  CloseModal,
} from "../../../styledComponents/Dashboard/Modals/listTransactionsModal";
const ListTransactions = ({ state, setState }) => {
  return (
    <div>
      {state.ListTransaction ? (
        <Background>
          <ModalWrapper>
            <ModalCotent>Hello World</ModalCotent>
            <CloseModal
              onClick={() => {
                setState((prevstate) => ({
                  ...prevstate,
                  ListTransaction: false,
                }));
              }}
            >
              &times;
            </CloseModal>
          </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
};

export default ListTransactions;
