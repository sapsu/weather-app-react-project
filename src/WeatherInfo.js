import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHours from "./FormattedHours";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row text-center m-2">
        <h1>{props.data.city}</h1>
        <h2 id="time">
          <FormattedDate date={props.data.date} />{" "}
        </h2>
        <h2>
          <WeatherIcon code={props.data.icon} size={50} />{" "}
          <WeatherTemperature celsius={props.data.temperature} />
        </h2>

        <div className="row justify-content-center mt-3">
          <div className="col-6 text-end pe-3">
            <h5 className="text-capitalize">{props.data.description}</h5>

            <h5>Humidity: {props.data.humidity} %</h5>
            <h5>
              Sunrise: <FormattedHours date={props.data.sunrise} />
            </h5>
          </div>
          <div className="col-6 text-start ps-4">
            <h5>Feels like: {Math.round(props.data.feels)} °C</h5>
            <h5>Wind: {Math.round(props.data.wind)} km/h</h5>

            <h5>
              Sunset: <FormattedHours date={props.data.sunset} />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
