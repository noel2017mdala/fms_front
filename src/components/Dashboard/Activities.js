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
const Activities = (props) => {
  const [state, setState] = useState({ active: false });
  const dispatch = useDispatch();

  const select = useSelector((e) => {
    return e;
  });

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
  };

  const getAllTransacrtions = () => {
    dispatch(activitiesAction(props));
  };

  const getExpenses = () => {
    dispatch(Expences(props));
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
      <div className="container">
        <div className="content">
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
              onClick={() => {
                getAllTransacrtions();
              }}
            >
              Transactions
            </li>
            <li
              onClick={() => {
                getEarnings();
              }}
            >
              Earnings
            </li>
            <li
              onClick={() => {
                getExpenses();
              }}
            >
              Expenses
            </li>
          </ul>
          <div className="list">
            {!select.activity.activities ? (
              <ClipLoader css={override} size="30px" />
            ) : !select.activity.activities.transaction ? (
              <ClipLoader css={override} size="30px" />
            ) : select.activity.activities.transaction.length === 0 ? (
              <h3 className="cof">You don't have any recent Transactions</h3>
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
        </div>
        {/* {!state.active ? "" : <Options />} */}
      </div>
    </Activity>
  );
};

export default Activities;
