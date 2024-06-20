import "./styles.css";

import React from "react";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div class="current-temperature">
        <span class="current-temperature-icon">⛅️</span>
        <span class="current-temperature-value" id="current-temperature">
          18
        </span>
        <span class="current-temperature-unit">°C</span>
      </div>
    </div>
  );
}
