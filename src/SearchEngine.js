import React from "react";
import axios from "axios";
import WeatherConditions from "./WeatherConditions";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      barometer: response.data.main.pressure,
      humidity: response.data.main.humidity,
      winds: response.data.wind.speed,
      minTemp: response.data.weather.min_temp,
      city: response.data.name

    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleCity(event) {
   setCity(event.target.value);
  }

  if (weatherData.ready) {

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input type="Search" placeholder="Enter City Name" className="form-control" autofocus="on" autocomplete="off" onChange={handleCity} />
            </div>
               <div className="col-3">
                <input type="submit" value="Search" className="btn btn-success"/>
               </div>
                  <div className="col-3">
                    <button className="CurrentButton">CURRENT</button>
                  </div>
          </div>
    </form>
      <div>
        <h1>{weatherData.city}</h1>
      </div>
      <WeatherConditions data={weatherData} />
  );   
        
} else {

  const apiKey="06e5d3dda0232566f39a1df37e2d5cdd";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

    return 
      "Loading";
  }

}
