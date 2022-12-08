import React, { useState } from "react";

import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      description: response.data.condition.description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input type="search" placeholder="Type a city..." />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <h1> {weatherData.city}</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt="Mostly cloudy" />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>{" "}
            <span className="units">°c</span>
          </div>

          <div className="col-6">
            <ul>
              <li> Precipitation 15%</li>
              <li> Humidity {weatherData.humidity}%</li>
              <li> Wind {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=New york&key=a1184840edbfda3e40off6tdfda47219&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
  }
}
