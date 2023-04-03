import React from 'react'
import "./Weatherforecast1.css"
import {Search} from '@mui/icons-material';
export default function Weatherforecast(props) {
  const{handleInputChange,handleSearchCity}=props
  return (
    <div className='temperature'>
      < Search  button className='icontemp'  onClick={handleSearchCity}/>

<input className='inputtemp' type="text" placeholder=" Eg: calicut" onChange={handleInputChange}  />

    </div>
  )
}
