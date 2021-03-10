import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import {
  activitiesAction,
  getEarnings as getEarningsData,
  getExpenses as Expences,
} from "../../redux/actions/actionCreator";
import icon from "../../images/more-512.webp";
import { Activities as Activity } from "../../styledComponents/Dashboard/Activities";
import Options from "./options/TransactionOptions";
const Activities = (props) => {
  const [state, setState] = useState({
    active: false,
    Transations: true,
    Earnings: false,
    Expenses: false,
  });
  const dispatch = useDispatch();

  const select = useSelector((e) => {
    return e;
  });

  const stye = {
    borderBottom: "2px solid white",
  };

  const override = `
    display: block;
    margin: 0 auto;
    border-color: black;
    margin-top: 10px;
        `;

  const cookie = new Cookies();
  let userInfo = cookie.get("user info");
  let userData = { token: cookie.get("login"), id: userInfo[0].id };

  useEffect(() => {
    dispatch(activitiesAction(userData));
  }, [dispatch, props]);

  const getEarnings = () => {
    setState((prevState) => ({
      ...prevState,
      Transations: false,
      Earnings: true,
      Expenses: false,
    }));
    dispatch(getEarningsData(userData));
  };

  const getAllTransacrtions = () => {
    setState((prevState) => ({
      ...prevState,
      Transations: true,
      Earnings: false,
      Expenses: false,
    }));
    dispatch(activitiesAction(userData));
  };

  const getExpenses = () => {
    setState((prevState) => ({
      ...prevState,
      Transations: false,
      Earnings: false,
      Expenses: true,
    }));
    dispatch(Expences(userData));
  };

  // const getDate = (e) => {
  //   let date = new Date(e);
  //   return date.toDateString();
  // };

  const displayOption = () => {
    setState((prevState) => ({
      ...prevState,
      active: !state.active,
    }));
  };

  return (
    <Activity>
      <div className="top-bar">
        <img
          src={icon}
          onClick={() => {
            displayOption();
          }}
          alt="options icon"
        />
        <h3>Recent Transactions</h3>

        <ul>
          <li
            style={state.Transations ? stye : null}
            onClick={() => {
              getAllTransacrtions();
            }}
          >
            Transactions
          </li>
          <li
            style={state.Earnings ? stye : null}
            onClick={() => {
              getEarnings();
            }}
          >
            Earnings
          </li>
          <li
            style={state.Expenses ? stye : null}
            onClick={() => {
              getExpenses();
            }}
          >
            Expenses
          </li>
        </ul>
      </div>
      <div className="list">
        {!select.activity.activities ? (
          <ClipLoader css={override} size="30px" />
        ) : !select.activity.activities.transaction ? (
          <ClipLoader css={override} size="30px" />
        ) : select.activity.activities.transaction.length < 1 ? (
          <h3 className="info">You don't have any recent Transactions</h3>
        ) : (
          select.activity.activities.transaction.map((e) => (
            <div key={e.id}>
              <ul className="user_activity">
                <li className="classList">
                  {e.transaction_name}
                  <span>
                    K{e.transaction_ammount}
                    {/* <span className>{getDate(e.transaction_date)}</span> */}
                  </span>
                </li>
              </ul>
            </div>
          ))
        )}
      </div>

      {!state.active ? "" : <Options state={state} setState={setState} />}
    </Activity>
  );
};

export default Activities;
