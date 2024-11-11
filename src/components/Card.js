// Card.js
import React from "react";
import "./Card.css";

function Card({ title, units, powerConsumption }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Units: {units}</p>
      <p>Power Consumption: {powerConsumption} kW</p>
    </div>
  );
}

export default Card;
