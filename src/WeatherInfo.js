import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo container-fluid">
      <div className="row text-center m-2">
        <h1>{props.data.city}</h1>
        <h2 id="time">
          <FormattedDate date={props.data.date} />
        </h2>

        <h2>
          <WeatherIcon code={props.data.icon} />{" "}
          {Math.round(props.data.temperature)} °C | °F
        </h2>
        <h5 className="text-capitalize">{props.data.description}</h5>
        <h5>Humidity: {props.data.humidity} %</h5>
        <h5>Wind: {Math.round(props.data.wind)} km/h</h5>
      </div>

      <div className="row justify-content-center">
        <div className="col">
          <ul>
            <li>Mon</li>
            <li>13°C</li>
            <li>
              <ReactAnimatedWeather
                icon="CLOUDY"
                color="white"
                size={20}
                animate={true}
              />
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Tue</li>
            <li>15°C</li>
            <li>
              <ReactAnimatedWeather
                icon="PARTLY_CLOUDY_DAY"
                color="white"
                size={20}
                animate={true}
              />
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Wed</li>
            <li>14°C</li>
            <li>
              <ReactAnimatedWeather
                icon="FOG"
                color="white"
                size={20}
                animate={true}
              />
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Thu</li>
            <li>13°C</li>
            <li>
              <ReactAnimatedWeather
                icon="PARTLY_CLOUDY_DAY"
                color="white"
                size={20}
                animate={true}
              />
            </li>
          </ul>
        </div>
        <div className="col">
          <ul>
            <li>Fri</li>
            <li>13°C</li>
            <li>
              <ReactAnimatedWeather
                icon="RAIN"
                color="white"
                size={20}
                animate={true}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
