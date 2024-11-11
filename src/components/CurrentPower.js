// CurrentPower.js
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import "./CurrentPower.css";

const data = Array.from({ length: 12 }, (_, index) => ({
  month: `M${index + 1}`,
  power: 150 + Math.random() * 100,
}));

function CurrentPower({ currentPower }) {
  return (
    <div className="current-power">
      <h2>Current Power Consumption (kW/h)</h2>
      <p>{currentPower}</p>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="power" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default CurrentPower;
