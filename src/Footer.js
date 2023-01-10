import React from "react";

import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer mt-5 mb-4">
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
    </div>
  );
}
