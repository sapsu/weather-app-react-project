import React from "react";
import "./Weather.css";
import Forecast from "./Forecast";
export default function Weather() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6 shadow-sm">
          <h1>Marbella</h1>
          <h2>Wednesday 16:00</h2>

          <h3> ⛅ 13°C | °F</h3>
          <h4>Partly cloudy, feels like 12 °C</h4>
          <h5>Humidity: 20% Wind speed: 3 m/s</h5>
        </div>
        <div className="col-6 shadow-sm" id="forecast">
          <Forecast day="Monday" temperature={13} icon="⛅" />
          <Forecast day="Tuesday" temperature={15} icon="⛅" />
          <Forecast day="Wednesday" temperature={12} icon="⛅" />
          <Forecast day="Thursday" temperature={17} icon="⛅" />
          <Forecast day="Friday" temperature={14} icon="⛅" />
        </div>
      </div>
    </div>
  );
}
