import "./styles.css";
import React from "react";

import Temperature from "./Temperature";
import WeatherInfo from "./WeatherInfo";
export default function City() {
  return (
    <div className="City">
      <h3>London</h3>
      <Temperature />
      <WeatherInfo />
    </div>
  );
}
