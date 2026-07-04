import { useState } from 'react'
import SearchBox from './SearchBox.jsx'
import WeatherCard from './WeatherCard.jsx'
export default function Weather(){
    const [newWeather,setnewWeather]=useState({
     city:"patna",
     temp: 35.53,
     feelslike: 39.97,
     humidity: 45,
     pressure: 996,
     })
     const updateinfo=(result)=>{
         setnewWeather(result)
     }
    
    return(
        <>
        <SearchBox updateinfo={updateinfo}/>
        <WeatherCard weather={newWeather} />
        </>
    )
}