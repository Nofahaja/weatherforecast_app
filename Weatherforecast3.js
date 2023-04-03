import React from 'react'
import "./Weatherforecast3.css"
export default function Weatherforecast3(props) {
  const week=(props.weekinfo)
  
  console.log(week)
  return (
   <div className='Tempweather3 '>

   {week.map((read)=>
    <div className='temp3'>
      
    <h2 className='temp3h2'>{new Date(read.dt*1000).toLocaleString('en-US',{weekday:'long', year:'numeric', month:'long',day:'numeric'}).slice(0,3)}</h2>
    <p className='cc'> <img src ={`https://api.openweathermap.org/img/w/${read.weather[0].icon}.png`}/></p>
    <p className='celsuistemp'>{read.temp.min}℃-{read.temp.max}℃</p>
    <p className='raintemp'> {read.weather[0].main}</p>
    <p className='modtemp'>{read.weather[0].description}</p>
    
    </div>
   )}
    
    </div>
  
  )
}
