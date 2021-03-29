import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { allActivities } from "../../../redux/actions/dashboard/activities";
import Cookies from "universal-cookie";
import Bin from "../../../images/bin.png";
import DeleteModal from "./DeleteModal";
import { Container } from "../../../styledComponents/Dashboard/Modals/listTransactionsModal";
import { deleteActivity as Delete } from "../../../redux/actions/actionCreator";
import common from "../../../classes/componentClass";
const ListTransactions = ({ state, setState }) => {
  const cookie = new Cookies();
  let userInfo = cookie.get("user_info");
  const token = cookie.get("auth_token");
  let userData = { token: token, id: userInfo[0].id };

  const dispatch = useDispatch();

  //Redux state selector
  const select = useSelector((e) => {
    return e;
  });

  const [modalState, showModal] = useState({
    showDeleteModal: false,
    id: "",
    userData: userData,
  });

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
      <Container>
        <div className="modalWrapper">
          <div className="modalItems">
            <div className="header_container">
              <h3 className="header">All Transactions</h3>
              <div
                className="closeModal"
                onClick={(e) => {
                  e.preventDefault();
                  setState((prevState) => ({
                    ...prevState,
                    showModal: false,
                    ListTransaction: false,
                  }));
                }}
              >
                &times;
              </div>
            </div>

            <div className="items">
              {!select.ListActivities ? (
                <ClipLoader css={common.loader("black")} size="30px" />
              ) : !select.ListActivities.transactions ? (
                <ClipLoader css={common.loader("black")} size="30px" />
              ) : select.ListActivities.transactions.length < 1 ? (
                <h3>No activities found</h3>
              ) : (
                select.ListActivities.transactions.map((e) => (
                  <div key={e.id} className="transaction_list">
                    <ul>
                      <li>
                        {e.transaction_name}
                        <span className="amount">
                          K {e.transaction_ammount}
                        </span>
                        {/* <span>{getDate(e.transaction_date)}</span> */}
                        <img
                          className="listTransactionModal_btn"
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ListTransactions;
