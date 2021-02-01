import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
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

  useEffect(() => {
    dispatch(activitiesAction(props));
  }, [dispatch, props]);

  const getEarnings = () => {
    dispatch(getEarningsData(props));
    setState((prevState) => ({
      ...prevState,
      Transations: false,
      Earnings: true,
      Expenses: false,
    }));
  };

  const getAllTransacrtions = () => {
    setState((prevState) => ({
      ...prevState,
      Transations: true,
      Earnings: false,
      Expenses: false,
    }));
    dispatch(activitiesAction(props));
  };

  const getExpenses = () => {
    dispatch(Expences(props));
    setState((prevState) => ({
      ...prevState,
      Transations: false,
      Earnings: false,
      Expenses: true,
    }));
  };

  const getDate = (e) => {
    let date = new Date(e);
    return date.toDateString();
  };

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
              <p>{e.transaction_name}</p>
              <p>K {e.transaction_ammount}</p>
              <p>{getDate(e.transaction_date)}</p>
            </div>
          ))
        )}
      </div>

      {!state.active ? "" : <Options state={state} setState={setState} />}
    </Activity>
  );
};

export default Activities;
