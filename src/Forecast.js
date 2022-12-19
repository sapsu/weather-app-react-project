import React from "react";
export default function Forecast(props) {
  return (
    <div className="row text-start ms-1">
      <div className="col-sm-6 weather-forecast-date">{props.day}</div>
      <div className="col-sm-3">
        <span className="weather-forecast-temperature">
          {props.temperature}
        </span>
        °C
      </div>
      <div className="col-sm-3">{props.icon}</div>
    </div>
  );
}
