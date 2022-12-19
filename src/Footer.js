import React from "react";
import beachbottom from "./images/beachbottom.jpg";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <p>
        <a
          href="https://github.com/sapsu/weather-app-react-project"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>
        <span id="name">by Saana Ahonen</span>
      </p>
      <img src={beachbottom} id="footer-image" alt="beachview bottom" />
    </div>
  );
}
