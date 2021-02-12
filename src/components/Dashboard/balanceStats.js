import React from "react";
import { Line } from "react-chartjs-2";
import { BalanceStats as Statistics } from "../../styledComponents/Dashboard/BalanceStats";
const BalanceStats = () => {
  return (
    <Statistics>
      Account Statistics
      <Line
        data={{
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: "Transaction",
              data: [1200, 1900, 3, 500, 2000, 300, 2000],
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
