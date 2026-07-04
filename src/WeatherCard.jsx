import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './WeatherCard.css'

export default function WeatherCard({weather}){
    
    return(
        <>
       
        <div className="weather-card">
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
 </div>

        </>
        
    )
}