import React, { useEffect } from "react";
import axios from "axios";

function App() {
  //const url = `https://api.openweathermap.org/data/2.5/weather?q=madrid&appid=7540c8bf73074c6a8f04b2e802fa1ce0`;

  return (
    <div className="App">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Madrid</p>
          </div>
          <div className="temp">
            <h1>285ºF</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold">284ºF</p>
            <p>Sensación</p>
          </div>
          <div className="humidity">
            <p className="bold">54%</p>
            <p>Humedad</p>
          </div>
          <div className="wind">
            <p className="bold">8 MPH</p>
            <p>Viento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
