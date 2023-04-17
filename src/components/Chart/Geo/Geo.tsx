import React from "react";
import Chart from "react-google-charts";

const Geo: React.FC = () => {
  
  const data = [
    ["Country", "Clientes"],
    ["São Paulo", 36],
    ["Rio Grande do Sul", 1],
    ["Acre", 4],
    ["Bahia", 555]
  ];
  
  const options = {
    region: 'BR',
    height: 400,
    resolution: 'provinces',
    colorAxis: { colors: ["#a64bf4", "black", "#541d5e"] },
    backgroundColor: "#fff",
    datalessRegionColor: "#f1f1f1",
    defaultColor: "#f5f5f5",
  };

  return (
    <Chart
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
  )
}

export default Geo;