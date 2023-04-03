import React from 'react'
import "./Weatherforecast2.css"
export default function Weatherforecast2({current}) {
  return (
    <div className='climatetemp'>
      <div className='Temperature2'>
       <h1 className='Temperature2h1'> {current.city},{current.country}</h1>
       <h3 className='Temperatureh3'> {current.date}</h3>
       <h4 className='Temperature2h4'> population: {current.population}</h4>
     </div>
      <div className='temp2'>
      <h1 className='Temp2h1'> {current.max} ℃</h1>
      <h2 className='Temp2h2'>{current.main},{current.desc}</h2>
      <p className='Temp2p'> <img src ={`https://api.openweathermap.org/img/w/${current.icon}.png`}/></p>
      <p className='Tempp'>🌇 </p>
      <p className='Temptimep'>{current.sunset} P.M</p>

      <p className='Tempp1'>🌅 </p>
      <p className='Temptimep1'>{current.sunrise} A.M</p>
      <p className='Temppressurep1'>{current.pressure} hpa</p>
      <p className='Tempcloudp'>{current.humidity} %</p>
      <p className='Tempminp'>{current.speed} m/s N </p>




      </div>
      
     </div>
    
  )
}
