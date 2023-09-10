import React, { useState } from 'react'
import './Weather.css';
import {
    UilTear,
    UilWind,
    UilLocationPoint
  } from '@iconscout/react-unicons';
   import  axios  from "axios";

 export default function Weather(props) {
    const [weatherData, setWeatherData ] = useState({ ready: false });
   

function handleResponse(response) {
    console.log(response.data);
setWeatherData({
    ready: true,
temperature: response.data.main.temp,
wind: response.data.wind.speed,

humidity: response.data.main.humidity,
iconUrl: 'https://openweathermap.org/img/wn/01n@2x.png',
description: response.data.weather[0].description,
city: response.data.name,
date: 'Monday 23:01'
});
    
}
if (weatherData.ready) {
 return (
    <div className='Weather'>
          <form>
        <div className="row">
          <div className="col-6">
            <input type="search" placeholder="Search a city" 
            className="form-control" autoComplete="off"/>
          </div>
          <div className="col-3">
           <input type="submit" value="Search" className="btn btn-primary w-100" 
           autoFocus='on' />
           </div>
           <div className="col-3">
           <button className="btn btn-primary w-100" autoFocus='on' >
            Current <UilLocationPoint size={18}/></button> 
         
           </div>
        </div>
      </form>
        <h1>{weatherData.city}</h1> 
   <ul>
    <li>{weatherData.date}</li>
    <li className='text-capitalize'>{weatherData.description}</li>
   </ul>
   <div className="row mt-3">
  <div className="col-6">
    <div className='clearfix'>
      <img src={weatherData.iconUrl}
       alt={weatherData.description} />
    
    <span className='temperature'>{Math.round(weatherData.temperature)}</span>
    <span className='unit'>°C</span>
  
    </div>
    </div>
    <div className="col-6">
    <ul>
        <li>
        <UilTear size={19} className='tear'/>  Humidity: {weatherData.humidity}%
        </li>
        <li>
        <UilWind size={19} className='wind'/>  Wind: {weatherData.wind} km/h
        </li>
    </ul>
    </div>
     <h2>Daily Temperature Evaluation</h2>
  
      <div className="row">
  <       div className="col">   
             Chart
          </div>
      </div>

  </div>
  </div>
);
} else {
    const apiKey = "df04a6426eb8c9305ebb65c9deb52f35";
    let city = 'London'
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);  
return 'Loading';
} 
}