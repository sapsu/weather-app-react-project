import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Wednesday 07:00",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="input-group mt-5 mb-4 rounded" id="city-search-form">
          <input
            type="search"
            className="form-control"
            placeholder="Search for a city"
            aria-label="Search for a city"
            aria-describedby="button-addon2"
            id="city-search-input"
          />

          <input
            type="submit"
            className="btn btn-primary"
            id="button-addon2"
            value="Search"
          />
        </form>
        <button className="btn btn-primary shadow-sm rounded" id="location">
          Current location
        </button>
        <div className="container-fluid">
          <div className="row text-center m-2">
            <h1>{weatherData.city}</h1>
            <h2>{weatherData.date}</h2>

            <h2>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                width="60"
              />{" "}
              {Math.round(weatherData.temperature)} °C | °F
            </h2>
            <h3 className="text-capitalize">{weatherData.description}</h3>
            <h5>Humidity: {weatherData.humidity} %</h5>
            <h5>Wind: {Math.round(weatherData.wind)} km/h</h5>
          </div>

          <div className="row justify-content-center">
            <div className="col">
              <ul>
                <li>Mon</li>
                <li>13</li>
                <li>⛅</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Tue</li>
                <li>15</li>
                <li>⛅</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Wed</li>
                <li>14</li>
                <li>⛅</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Thu</li>
                <li>13</li>
                <li>⛅</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>Fri</li>
                <li>13</li>
                <li>⛅</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "059557451cbb9d4b2023cfed9849282d";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
