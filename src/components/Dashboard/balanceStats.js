import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import {
  getBalance,
  getAmount,
} from "../../redux/actions/dashboard/balanceStat";
import { Line } from "react-chartjs-2";
import { BalanceStats as Statistics } from "../../styledComponents/Dashboard/BalanceStats";

const BalanceStats = () => {
  const select = useSelector((e) => {
    return e;
  });

  const dispatch = useDispatch();

  const cookies = new Cookies();
  let getUserInfo = cookies.get("user_info")[0];
  let getToken = cookies.get("auth_token");

  useEffect(() => {
    dispatch(getBalance(getUserInfo, getToken));
    dispatch(getAmount(getUserInfo, getToken));
  }, [dispatch]);

  let days = [];
  let prevAmount = [];
  return (
    <Statistics>
      <p>
        {select.userBalance.map((e) => {
          return `Current Balance K ${e.Amount}`;
        })}
      </p>
      {!select.getTransaction.amount_transaction
        ? ""
        : select.getTransaction.amount_transaction.map((e) => {
            console.log("rerendered");
            prevAmount.push(e.prev_Amount);
            days.push(e.date_value);
          })}
      <Line
        data={{
          labels: [...days],
          datasets: [
            {
              label: "Transaction",
              data: [...prevAmount],
              backgroundColor: ["rgba(102, 163, 255, 0.6)"],
              borderWidth: 1,
            },
          ],
        }}
        height={100}
        width={200}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />

      {/* <button
        onClick={() => {
          dispatch(getBalance(getUserInfo, getToken));
          dispatch(getAmount(getUserInfo, getToken));
        }}
      >
        Text
      </button> */}
    </Statistics>
  );
};
export default BalanceStats;
