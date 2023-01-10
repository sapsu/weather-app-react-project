import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast row justify-content-center mt-3 pb-3">
      <div className="col text-center">
        <ul>
          <li>Mon</li>
          <li>
            <span className="max-temp">13°</span>
            <span className="min-temp">10°</span>
          </li>
          <li>
            <WeatherIcon code="01d" size={40} />
          </li>
        </ul>
      </div>
    </div>
  );
}
