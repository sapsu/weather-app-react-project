import React from "react";
import "./Weather.css";
export default function Weather(props) {
  if (props.temperature) {
    return (
      <div className="container-fluid">
        <div className="row text-center m-2">
          <h1>{props.city}</h1>

          <h2>
            <img src={props.icon} alt="weather icon" width="60" />{" "}
            {props.temperature} | °F
          </h2>
          <h3>{props.description}</h3>
          <h5>{props.humidity}</h5>
          <h5>{props.wind}</h5>
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
    );
  }
}
