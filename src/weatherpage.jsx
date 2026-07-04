import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function WeatherPage(){
    return(
        <>
        <div className="weatherpage">
            <div className="weatherinput">
                <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
         <Button variant="contained">Contained</Button>
            </div>
        </div>
        </>
    )
}