import React from "react";
import axios from "axios";

import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ready: false});

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

  if (weatherData.ready) {

  return (
    <div>
    <form className="SearchEngine">
          <div className="row">
            <div className="col-6">
              <input type="Search" placeholder="Enter City Name" className="form-control" autofocus="on" autocomplete="off"/>
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
      
        <div className="row">
          <div className="col-7">
            <div className="Card Leftside">
              <h2 className="text-capitalize">{weatherData.description}</h2>
            <div className="clearfix">
              <img src="/" alt="Clear_Sky" className="float-left"/>
              <span ClassName="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
            </div>
          </div>
        </div>
        
          <div className="col-5">
            <div className="Card Rightside">
             <ul className="Conditions">
              <li>Feels Like: <strong>{weatherData.feelsLike}°</strong></li>
              <li>Barometer: <strong>{weatherData.barometer}</strong></li>
              <li>Humidity: <strong>{weatherData.humidity}%</strong></li>
              <li>Wind: <strong>{weatherData.wind}/km/h</strong></li>
              <li>Day's Low Temp: <strong>{weatherData.minTemp}°</strong></li>
              </ul>
            </div>
            </div>
            </div>
       </div>
         
      
    );
} else {
  const apiKey="06e5d3dda0232566f39a1df37e2d5cdd";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

    return "Loading";
}
}

