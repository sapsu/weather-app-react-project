import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=059557451cbb9d4b2023cfed9849282d&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleResponse(response) {
    setTemperature(`${Math.round(response.data.main.temp)} °C`);
    setDescription(`${response.data.weather[0].description}`);
    setHumidity(`Humidity: ${response.data.main.humidity} %`);
    setWind(`Wind: ${response.data.wind.speed} km/h`);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  return (
    <div className="Search">
      <form
        className="input-group mb-3 rounded"
        id="city-search-form"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          className="form-control"
          placeholder="Search for a city"
          aria-label="Search for a city"
          aria-describedby="button-addon2"
          id="city-search-input"
          onChange={updateCity}
        />
        <input
          type="submit"
          className="btn btn-outline-secondary"
          id="button-addon2"
          value="Search"
        />
      </form>
      <Weather
        temperature={temperature}
        description={description}
        humidity={humidity}
        wind={wind}
        icon={icon}
        city={city}
      />
    </div>
  );
}
