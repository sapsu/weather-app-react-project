import React from "react";
import "./Header.css";
import beachtop from "./images/beachtop.jpg";
export default function Header() {
  function showTime() {
    let now = new Date();
    let day = now.getDay();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let currentTime = `${days[day]} ${hours}:${minutes}`;
    return currentTime;
  }

  return (
    <div className="Header">
      <img src={beachtop} alt="beachview top" id="header-image" />
      <h1>{showTime()}</h1>
    </div>
  );
}
