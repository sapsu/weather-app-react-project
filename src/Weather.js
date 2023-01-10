import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      sunrise: new Date(response.data.sys.sunrise * 1000),
      sunset: new Date(response.data.sys.sunset * 1000),
      temperature: response.data.main.temp,
      feels: response.data.main.feels_like,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "059557451cbb9d4b2023cfed9849282d";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form
          onSubmit={handleSubmit}
          className="input-group mt-5 mb-5 rounded"
          id="city-search-form"
        >
          <input
            type="search"
            className="form-control"
            placeholder="Search for a city"
            aria-label="Search for a city"
            aria-describedby="button-addon2"
            id="city-search-input"
            autocomplete="off"
            onChange={handleCityChange}
          />

          <input
            type="submit"
            className="btn btn-primary"
            id="button-addon2"
            value="Search"
          />
        </form>

        <div className="container-fluid">
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
