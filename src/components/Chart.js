// Chart.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import "./Chart.css";

const data = [
  { year: "2009", power: 1000 },
  { year: "2012", power: 2000 },
  { year: "2015", power: 1800 },
  { year: "2018", power: 1500 },
];

function Chart({ title }) {
  return (
    <div className="chart">
      <h2>{title}</h2>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="power" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default Chart;
