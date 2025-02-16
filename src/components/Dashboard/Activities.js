import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Cookies from "universal-cookie";
import common from "../../classes/componentClass";
import { useDispatch, useSelector } from "react-redux";
import {
  activitiesAction,
  getEarnings as earningsData,
  getExpenses as expenseData,
} from "../../redux/actions/dashboard/activities";
import icon from "../../images/more-512.webp";
import { ToggleOptions } from "../../redux/actions/dashboard/optionsAction";
import { Activities as Activity } from "../../styledComponents/Dashboard/Activities";
import Options from "./options/TransactionOptions";
const Activities = () => {
  //user tokens
  const cookies = new Cookies();
  let getToken = cookies.get("auth_token");
  let getUserInfo = cookies.get("user_info");

  console.log(getUserInfo);

  //dispatch function
  const dispatch = useDispatch();

  const userData = {
    token: getToken,
    id: getUserInfo,
  };

  const [state, setState] = useState({
    active: false,
    Transations: true,
    Earnings: false,
    Expenses: false,
  });

  //border css
  const stye = {
    borderBottom: "2px solid white",
  };

  //call action when page has loaded
  const select = useSelector((e) => {
    return e;
  });

  useEffect(() => {
    dispatch(activitiesAction(userData));
  }, [dispatch]);

  const getAllTransacrtions = () => {
    setState((prevState) => ({
      ...prevState,
      Transations: true,
      Earnings: false,
      Expenses: false,
    }));
    dispatch(activitiesAction(userData));
  };

  const getEarnings = () => {
    setState((prevState) => ({
      ...prevState,
      Transations: false,
      Earnings: true,
      Expenses: false,
    }));
    dispatch(earningsData(userData));
  };

  const getExpenses = () => {
    setState((prevState) => ({
      ...prevState,
      Transations: false,
      Earnings: false,
      Expenses: true,
    }));
    dispatch(expenseData(userData));
  };

  return (
    <Activity>
      <div className="top-bar">
        <img
          className="activities_image"
          src={icon}
          alt="options icon"
          onClick={() => {
            dispatch(ToggleOptions());
          }}
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
        <ul>
          {!select.getActivities.transaction ? (
            <ClipLoader css={common.loader("black")} />
          ) : select.getActivities.transaction.length < 1 ? (
            <h3>No activities found</h3>
          ) : (
            select.getActivities.transaction.map((e) => (
              <li key={e.id}>
                {e.transaction_name} K{e.transaction_ammount}
              </li>
            ))
          )}
        </ul>
      </div>

      {select.ToggleOptions.transactions ? <Options /> : ""}
    </Activity>
  );
};

export default Activities;
