import React from "react";
import Chart from "react-google-charts";

const Calendar: React.FC = () => {
  
  const data = [
    [
      { type: "date", id: "Date" },
      { type: "number", id: "Won/Loss" },
    ],
    [new Date(2022, 2, 4), 10],
    [new Date(2022, 2, 5), 3],
    [new Date(2022, 2, 7), -1],
    [new Date(2022, 2, 8), 2],
    [new Date(2022, 2, 12), -1],
    [new Date(2022, 2, 13), 1],
    [new Date(2022, 2, 15), 1],
    [new Date(2022, 2, 16), -4],
    [new Date(2022, 1, 4), 10],
    [new Date(2022, 1, 5), 3],
    [new Date(2022, 1, 7), -1],
    [new Date(2022, 1, 8), 2],
    [new Date(2022, 1, 12), -1],
    [new Date(2022, 1, 13), 1],
    [new Date(2022, 1, 15), 1],
    [new Date(2022, 1, 16), -4],
  ];

  const options = {
    isStacked: true,
    height: 400,
    vAxis: { minValue: 0 },
    legend: {position: 'none'}
  };

  return (
    <Chart
        chartType="Calendar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
  )
}

export default Calendar;