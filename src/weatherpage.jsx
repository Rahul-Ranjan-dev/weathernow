import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
export default function WeatherPage() {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  const [city, setCity] = useState("");
  const [weather,setweather]=useState(null)
  

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const responsejson = await response.json();
    const result={
        city:city,
        temp:responsejson.main.temp,
        feelslike:responsejson.main.feels_like,
        humidity:responsejson.main.humidity,
        pressure:responsejson.main.pressure
    }
    console.log(result);
    setweather(result);
    setCity("");
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="weatherpage">
      <div className="weatherinput">
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
      <div className="weatherCard">
       {weather && (
  <Card sx={{ maxWidth: 345 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {weather.city}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Temp: {weather.temp}°C
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Feels like: {weather.feelslike}°C
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Humidity: {weather.humidity}%
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        Pressure: {weather.pressure} hPa
      </Typography>
    </CardContent>
  </Card>
)}

      </div>
    </div>
  );
}
