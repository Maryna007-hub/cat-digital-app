import React from 'react'
import './Weather.css';
import {
    UilTear,
    UilWind,
  } from '@iconscout/react-unicons';

 export default function Weather() {
  return (
    <div className='Weather'>
          <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Search a city" className="form-control" autoComplete="off"/>
          </div>
          <div className="col-3">
           <input type="submit" value="Search" className="btn btn-primary w-100" 
           autoFocus='on' />
          </div>
        </div>
      </form>
        <h1>London</h1> 
   <ul>
    <li>Friday 20:23</li>
    <li>Cloudy</li>
   </ul>
   <div className="row mt-3">
  <div className="col-6">
    <div className='clearfix'>
      <img src="https://openweathermap.org/img/wn/01n@2x.png"
       alt="clear" />
    
    <span className='temperature'>18</span>
    <span className='unit'>°C</span>
  
    </div>
    </div>
    <div className="col-6">
    <ul>
        <li>
        <UilTear size={19} className='tear'/>  Humidity: 23%
        </li>
        <li>
        <UilWind size={19} className='wind'/>  Wind: 12 km/h
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
)
}