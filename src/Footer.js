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
          Open-source
        </a>
        <span id="name">
          code by{" "}
          <a
            href="https://saana-ahonen.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Saana Ahonen
          </a>
          , hosted on{" "}
          <a href="https://www.netlify.com/" target="_blank" rel="noreferrer">
            Netlify
          </a>
        </span>
      </p>
    </div>
  );
}
