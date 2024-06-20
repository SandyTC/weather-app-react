import "./styles.css";

import React from "react";

export default function WeatherDetails() {
  return (
    <div className="WeatherDetails">
      <p class="current-details">
        <span id="current-date"></span>Cloudy <br />
        Humidity: <strong>46%</strong>, Wind: <strong>3mph</strong>
      </p>
    </div>
  );
}
