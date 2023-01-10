import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row text-center m-2">
        <h1>{props.data.city}</h1>
        <h2 id="time">
          <FormattedDate date={props.data.date} />
        </h2>
        <h2>
          <WeatherIcon code={props.data.icon} size={50} />{" "}
          <WeatherTemperature celsius={props.data.temperature} />
        </h2>
        <h5 className="text-capitalize">{props.data.description}</h5>
        <h5>Humidity: {props.data.humidity} %</h5>
        <h5>Wind: {Math.round(props.data.wind)} km/h</h5>
      </div>
    </div>
  );
}
