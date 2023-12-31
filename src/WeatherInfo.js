import React from 'react';
import FormattedDate from './FormattedDate';
import {
    UilTear,
    UilWind,
  } from '@iconscout/react-unicons';


export default  function WeatherInfo(props) {
  return (
    <div className='WeatherInfo'>
         <h1>{props.data.city}</h1> 
   <ul>
              <li><FormattedDate date={props.data.date}/></li>
    <li className='text-capitalize'>{props.data.description}</li>
   </ul>
   <div className="row mt-3">
  <div className="col-6">
    <div className='clearfix'>
      <img src={props.data.iconUrl}
       alt={props.data.description} />
    
    <span className='temperature'>{Math.round(props.data.temperature)}</span>
    <span className='unit'>°C</span>
  
    </div>
    </div>
    <div className="col-6">
    <ul>
        <li>
        <UilTear size={19} className='tear'/>  Humidity: {props.data.humidity}%
        </li>
        <li>
        <UilWind size={19} className='wind'/>  Wind: {props.data.wind} km/h
        </li>
    </ul>
    </div>
  </div>
        </div>
   )
}

