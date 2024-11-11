// Dashboard.js
import React from "react";
import Card from "./Card";
import Chart from "./Chart";
import CurrentPower from "./CurrentPower";
import "./Dashboard.css";

function Dashboard() {
  return (
    <main className="dashboard">
      <h1>Dashboard</h1>
      <div className="cards-container">
        <Card title="Fans" units={27} powerConsumption={270} />
        <Card title="Light" units={65} powerConsumption={876} />
        <Card title="Refrigerator" units={4} powerConsumption={0} />
        <Card title="Air Condition" units={852} powerConsumption={65} />
      </div>
      <div className="charts-container">
        <Chart title="Average Power Consumption (kW/h)" />
        <CurrentPower currentPower={1635.0} />
      </div>
    </main>
  );
}

export default Dashboard;
