import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import activities from "../../styles/activitiesStyle";
import Options from "./options";
import {
  activitiesAction,
  getEarnings as getEarningsData,
  getExpenses as Expences,
} from "../../redux/actions/actionCreator";
import icon from "../../images/more-512.webp";

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
    margin-top: 160px;
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
    <div style={activities.activities_reset}>
      <div style={activities.activities_header}>
        <img
          style={activities.icon_image}
          src={icon}
          onClick={() => {
            displayOption();
          }}
          alt="options icon"
        />
        <h3 style={activities.activities_h3}>Recent Activities</h3>

        <ul style={activities.activities_ul}>
          <li style={activities.activities_li}>
            <button
              style={activities.activities_button}
              onClick={() => {
                getAllTransacrtions();
              }}
            >
              Transactions
            </button>
          </li>
          <li
            style={activities.activities_li}
            onClick={() => {
              getEarnings();
            }}
          >
            <button style={activities.activities_button}>Earnings</button>
          </li>
          <li style={activities.activities_li}>
            <button
              style={activities.activities_button}
              onClick={() => {
                getExpenses();
              }}
            >
              Expenses
            </button>
          </li>
        </ul>
        <div style={activities.activity_list}>
          {!select.activity.activities ? (
            <ClipLoader css={override} size="40px" />
          ) : !select.activity.activities.transaction ? (
            <ClipLoader css={override} size="40px" />
          ) : (
            select.activity.activities.transaction.map((e) => (
              <div key={e.id} style={activities.activity_list_div}>
                <p style={activities.activity_list_h3}>{e.transaction_name}</p>
                <p style={activities.activity_list_p}>
                  K {e.transaction_ammount}
                </p>
                <p style={activities.activity_list_date}>
                  {getDate(e.transaction_date)}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
      {!state.active ? "" : <Options />}
    </div>
  );
};

export default Activities;
