import logo from './logo.svg';
import './App.css';
import Weatherforecast from './Weatherforecast';
import Weatherforecast2 from './Weatherforecast2';
import Weatherforecast3 from './Weatherforecast3';
import axios from "axios"
import Loader from './Loader';
import { useEffect, useState } from 'react';


function App() {
  const [state, setState] = useState({
    value: '',
    current: {
    },
    weekinfo: [],
    loading: false,
    error: false,
  })
  console.log("state", state);

  const handleInputChange = e => {
    setState({
      ...state,
      value: e.target.value,
    })
  };
  const handleSearchCity = e => {
    e.preventDefault();
    setState({
      ...state,
      loading: true,
    })

    axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${state.value}&units=metric&cnt=7&appid=d94bcd435b62a031771c35633f9f310a`)
      .then(response => {

        console.log("res", response);

        const data = response.data
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Semptember', 'October', 'November', 'December']
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const currentDate = new Date()
        console.log("current==>", currentDate);
        console.log("day---", currentDate.getMonth());
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
        console.log("date----", date);
        const sunset = new Date(data.list[0].sunset * 1000).toLocaleTimeString().slice(0, 4)
        const sunrise = new Date(data.list[0].sunrise * 1000).toLocaleTimeString().slice(0, 4)

        const current_data = {
          city: data.city.name,
          country: data.city.country,
          date,
          population: data.city.population,
          desc: data.list[0].weather[0].description,
          main: data.list[0].weather[0].main,
          icon: data.list[0].weather[0].icon,
          day: data.list[0].temp.day,
          eve: data.list[0].temp.eve,
          max: data.list[0].temp.max,
          min: data.list[0].temp.min,
          sunrise,
          sunset,
          clouds: data.list[0].clouds,
          humidity: data.list[0].humidity,
          pressure: data.list[0].pressure,
          speed: data.list[0].speed,



        }

        setState({
          ...state,
          current: current_data,
          weekinfo: data.list,
          loading: false,
          error: false
        })




      }).catch(error => {
        setState({
          ...state,
          current: {},
          weekinfo: [],
          loading: false,
          error: true
        })
      })




  }


  return (
    <>
      <Weatherforecast handleInputChange={handleInputChange} handleSearchCity={handleSearchCity} />



      {state.loading === true ? (
        <Loader />) : (
        <>

        {state.current.country!==undefined ?
        <>
         <Weatherforecast2 current={state.current} />
         <Weatherforecast3 weekinfo={state.weekinfo} />
         </>
         : 
         state.error?
         <div className='errortext'> Sorry!!!... we couldn't find the location </div>
         :
         <div></div>
      }
         
        </>
      )
      }





    </>
  )
}

export default App;
