import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-3">
            <input type="search" placeholder="Type a city..." />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1> New york</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/cloudy.png"
            alt="Mostly cloudy"
          />
          6°
        </div>

        <div className="col-6">
          <ul>
            <li> Precipitation 15%</li>
            <li> Humidity 72%</li>
            <li> Wind 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
