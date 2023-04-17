import React from "react";
import Chart from "react-google-charts";

const Bar: React.FC = () => {

  const data = [
    ["", "Vendas", { role: "style" } ],
    ["Salvador", 500, 'color: green'],
    ["Rio de Janeiro", 58, '#b87333'],
    ["São Paulo", 200, '#b87333'],
    ["Florianopolis", 900, '#b87333'],
    ["Porto Seguro", 80, '#b87333'],
    ["São Paulo", 200, '#b87333'],
    ["Florianopolis", 900, '#b87333'],
    ["Porto Seguro", 80, '#b87333'],
  ];
  
  const options = {
    hAxis: {
      minValue: 0,
    },
    bars: "vertical",
    axes: {
      y: {
        0: { side: "left" },
      },
    },
    colors: ['#541d5e', '#a64bf4'],
    legend: {position: 'none'},
    animation:{
      duration: 1000,
      easing: 'out',
    }
  };

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  )
}

export default Bar;