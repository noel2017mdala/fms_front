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
const Activities = (props) => {
  return (
    <Activity>
      <div className="top-bar">
        {/* <img src={icon} alt="options icon" /> */}
        <h3>Recent Transactions</h3>

        <ul>
          <li>Transactions</li>
          <li>Earnings</li>
          <li>Expenses</li>
        </ul>
      </div>
      <div className="list">
        <h1>Hello World</h1>
      </div>
    </Activity>
  );
};

export default Activities;
