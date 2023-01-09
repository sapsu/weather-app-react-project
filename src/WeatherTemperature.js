import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        {Math.round(props.celsius)} °C |{" "}
        <a href="/" className="temperaturelink" onClick={convertToFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        {Math.round(fahrenheit)}{" "}
        <a href="/" className="temperaturelink" onClick={convertToCelsius}>
          °C
        </a>
        | °F
      </div>
    );
  }
}
