import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { getAmount } from "../../redux/actions/dashboard/balanceStat";
import { Line } from "react-chartjs-2";
import { BalanceStats as Statistics } from "../../styledComponents/Dashboard/BalanceStats";

const BalanceStats = () => {
  const getUserBalance = useSelector((e) => {
    return e.userBalance;
  });

  const dispatch = useDispatch();

  const cookies = new Cookies();
  let getUserInfo = cookies.get("user_info")[0];
  let getToken = cookies.get("auth_token");

  useEffect(() => {
    dispatch(getAmount(getUserInfo, getToken));
  }, [dispatch]);

  let days = [];
  let prevAmount = [];

  return (
    <Statistics>
      <p>
        Current Balance K
        {getUserBalance.map((e) => {
          return e.Amount;
        })}
      </p>
    </Statistics>
  );
};
export default BalanceStats;
