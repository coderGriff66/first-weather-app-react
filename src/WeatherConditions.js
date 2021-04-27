import React from "react";

export default functions WeatherConditions(props) {

  return (
    <div className="WeatherConditions">
      <div className="row">
          <div className="col-7">
            <div className="Card Leftside">
              <h2 className="text-capitalize">{props.data.description}</h2>
            <div className="clearfix">
              <img src="/" alt="Clear_Sky" className="float-left"/>
              <span ClassName="temperature">{Math.round(props.data.temperature)}</span>
                <span className="unit">°C</span>
            </div>
          </div>
        </div>
        
          <div className="col-5">
            <div className="Card Rightside">
             <ul className="Conditions">
              <li>Feels Like: <strong>{props.data.feelsLike}°</strong></li>
              <li>Barometer: <strong>{props.data.barometer}</strong></li>
              <li>Humidity: <strong>{props.data.humidity}%</strong></li>
              <li>Wind: <strong>{props.data.wind}/km/h</strong></li>
              <li>Low Temp Today: <strong>{props.data.minTemp}°</strong></li>
             </ul>
            </div>
          </div>
        </div>
      </div>
            
    );

} 