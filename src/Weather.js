import React from "react";
import "./Weather.css";
import Forecast from "./Forecast";
export default function Weather(props) {
  if (props.temperature) {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-6 pt-2 pb-2">
            <h2>{props.city}</h2>

            <h3>
              <img src={props.icon} alt="weather icon" width="80" />{" "}
              {props.temperature} | °F
            </h3>
            <h4>{props.description}</h4>
            <h5>{props.humidity}</h5>
            <h5>{props.wind}</h5>
          </div>
          <div className="col-md-6 pt-2 pb-2" id="forecast">
            <Forecast day="Monday" temperature={13} icon="⛅" />
            <Forecast day="Tuesday" temperature={15} icon="⛅" />
            <Forecast day="Wednesday" temperature={12} icon="⛅" />
            <Forecast day="Thursday" temperature={17} icon="⛅" />
            <Forecast day="Friday" temperature={14} icon="⛅" />
          </div>
        </div>
      </div>
    );
  }
}
