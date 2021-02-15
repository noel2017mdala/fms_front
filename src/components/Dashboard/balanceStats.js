import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import { getAmount } from "../../redux/actions/actionCreator";
import { Line } from "react-chartjs-2";
import { BalanceStats as Statistics } from "../../styledComponents/Dashboard/BalanceStats";

const BalanceStats = () => {
  const select = useSelector((e) => {
    return e;
  });

  const dispatch = useDispatch();

  const cookies = new Cookies();
  const id = cookies.get("user info")[0].id;

  useEffect(() => {
    dispatch(getAmount(id));
  }, [dispatch]);

  let days = [];
  let prevAmount = [];

  return (
    <Statistics>
      Available Balance : K
      {!select.getAmountReducer
        ? null
        : !select.getAmountReducer.amount
        ? null
        : !select.getAmountReducer.amount
        ? null
        : ` ${select.getAmountReducer.amount.amount[0].Amount}`}
      {!select.getAmountReducer
        ? null
        : !select.getAmountReducer.amount
        ? null
        : !select.getAmountReducer.amount
        ? null
        : select.getAmountReducer.amount.amount_transaction.map((e) => {
            console.log(e);
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
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
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
    </Statistics>
  );
};
export default BalanceStats;
