import React from 'react';
import sunriseImg from '../images/ImgSunrise.jpg';
import humidityImg from '../images/ImgHumidity.jpg';

const WeatherCard = ({ 
  name, 
  country, 
  weather, 
  temp, 
  maxtemp, 
  mintemp, 
  windspeed, 
  winddeg, 
  clouds, 
  sunrise, 
  sunset, 
  humidity, 
  pressure, 
  tz, 
  datetime 
}) => (
  <div>
    <div className="jumbotron needsAligning" id="jumbotron">
      <h1 className="display-4">{name}, {country}</h1>
      <p className="lead">Current Temperature: {temp}°C</p>
      <small>Maximum: {maxtemp}°C</small><br/>
      <small>Minimum: {mintemp}°C</small>
      <hr/>
      <p>Time: {datetime} | Timezone: GMT{tz}</p>
    </div>

    <div className="list-group needsAligning">
      <div className="list-group-item">
        <div className="w-100 justify-content-between">
          <h5 className="mb-1">Current Weather</h5>
        </div>
        <p className="mb-1">{weather}</p>
        <small>{weather[0]["description"]}</small>
      </div>
      <div className="list-group-item">
        <div className="w-100 justify-content-between">
          <h5 className="mb-1">Wind</h5>
        </div>
        <p className="mb-1">wind speed is: {windspeed}m/s, blowing at a bearing of {winddeg}°.</p>
      </div>
      <div className="list-group-item">
        <div className="w-100 justify-content-between">
          <h5 className="mb-1">Clouds</h5>
        </div>
        <p className="mb-1">Current cloudiness: {clouds}%</p>
      </div>
    </div>

    <div className="container needsAligning">
      <div className="card topAndBottomMargin" id="suncard">
        <img className="card-img-top" src={sunriseImg} alt="sunriseImg"/>
        <div className="card-body">
          <h5 className="card-title">Sunrise and Sunset: </h5>
          <p className="card-text">The sun comes up at {sunrise} and
          goes down at {sunset} today.</p>
        </div>
      </div>
      <div className="card topAndBottomMargin" id="humiditycard">
        <img className="card-img-top" src={humidityImg} alt="sunriseImg"/>
        <div className="card-body">
          <h5 className="card-title">Humidity: </h5>
          <p className="card-text">Humidity is at {humidity}% and pressure is
          at {pressure}kPa right now.</p>
        </div>
      </div>
    </div>
  </div>
  );

export default WeatherCard;
