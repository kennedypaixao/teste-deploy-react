import React from "react";
import Chart from "react-google-charts";

const Area: React.FC = () => {

  const data = [
    ["Ano", "Lucro "],
    ["2017", 1000],
    ["2018", 1170],
    ["2019", 660],
    ["2020", 1030],
    ["2021", 2030],
    ["2022", 3030],
  ];
  
  const options = {
    height: 400,
    colors: ['#541d5e', '#a64bf4'],
    legend: {position: 'none'},
    vAxis: {
      minValue: 0,
    },
    chartArea: { width: "80%", height: "80%" },
    animation:{
      duration: 1000,
      easing: 'out',
    }
  };

  return (
    <Chart
        chartType="AreaChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
  )
}

export default Area;