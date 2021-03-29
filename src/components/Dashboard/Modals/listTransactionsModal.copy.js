import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { allActivities } from "../../../redux/actions/actionCreator";
import Cookies from "universal-cookie";
import Bin from "../../../images/bin.png";
import DeleteModal from "./DeleteModal";
import {
  Background,
  ModalWrapper,
  ModalCotent,
  CloseModal,
} from "../../../styledComponents/Dashboard/Modals/listTransactionsModal";
import { deleteActivity as Delete } from "../../../redux/actions/actionCreator";
const ListTransactions = ({ state, setState }) => {
  const cookie = new Cookies();
  let userInfo = cookie.get("user info");
  const token = cookie.get("login");
  let userData = { token: token, id: userInfo[0].id };

  const dispatch = useDispatch();
  const select = useSelector((e) => {
    return e;
  });

  const [modalState, showModal] = useState({
    showDeleteModal: false,
    id: "",
    userData: userData,
  });

  const override = `
    display: block;
    margin: 0 auto;
    border-color: black;
    margin-top: 10px;
        `;

  useEffect(() => {
    dispatch(allActivities(userData));
  }, [dispatch]);

  const deleteActivity = (data) => {
    showModal((prevstate) => ({
      ...prevstate,
      showDeleteModal: !modalState.showDeleteModal,
      id: data,
    }));
  };

  const getDate = (e) => {
    let date = new Date(e);
    return date.toDateString();
  };

  return (
    <div>
      {state.ListTransaction ? (
        <Background>
          <ModalWrapper>
            <ModalCotent>
              <div className="listContent">
                <h3>All Transactions</h3>
                {!select.activity ? (
                  <ClipLoader css={override} size="30px" />
                ) : !select.activity.allActivities ? (
                  <ClipLoader css={override} size="30px" />
                ) : select.activity.allActivities.transactions < 1 ? (
                  <h3>No activities found</h3>
                ) : (
                  select.activity.allActivities.transactions.map((e) => (
                    <div key={e.id} className="transactionlist">
                      <ul>
                        <li>
                          {e.transaction_name}
                          <span className="ammount">
                            K {e.transaction_ammount}
                          </span>
                          <span>{getDate(e.transaction_date)}</span>
                          <img
                            src={Bin}
                            alt="Bin"
                            onClick={() => {
                              // console.log(e.id);
                              deleteActivity(e.id);
                            }}
                          />
                        </li>
                      </ul>
                    </div>
                  ))
                )}
              </div>
              {modalState.showDeleteModal ? (
                <DeleteModal
                  params={modalState}
                  showModal={showModal}
                  action={Delete}
                />
              ) : null}
            </ModalCotent>
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
