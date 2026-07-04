import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
export default function SearchBox({updateinfo}){
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  const [city, setCity] = useState("");
   async function handleSubmit(event) {
    event.preventDefault();
    try{
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const responsejson = await response.json();
    const result={
        city:city,
        temp:responsejson.main.temp,
        feelslike:responsejson.main.feels_like,
        humidity:responsejson.main.humidity,
        pressure:responsejson.main.pressure
    }
    updateinfo(result);
    setCity("");}catch(err){
        alert("no city found")
    }
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return(
    <>
    <div className="search-box">
        <form onSubmit={handleSubmit}>
             <TextField
            required
            id="outlined-required"
            label="City"
            value={city}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">Search</Button>
        </form>
    </div>
    </>
  )
}