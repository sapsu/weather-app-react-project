import React from "react";
import "./Weather.css";
import Forecast from "./Forecast";
export default function Weather() {
  return (
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col-md-6 pt-2 pb-2">
          <h1>Marbella</h1>
          <h2>Wednesday 16:00</h2>
          <h3> ⛅ 13°C | °F</h3>
          <h4>Partly cloudy</h4>
          <h5>Humidity: 20%</h5>
          <h5>Wind speed: 3 m/s</h5>
        </div>
        <div className="col-md-6 pt-2 pb-2" id="forecast">
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
