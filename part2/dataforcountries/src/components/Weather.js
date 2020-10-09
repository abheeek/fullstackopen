import React from 'react'

const Weather = ({ weatherInfo }) => {
  if (weatherInfo) {
    return (
      <div>
        temperature: {weatherInfo.current.temperature} Celsius<br/>
        <img src={weatherInfo.current.weather_icons[0]} alt="weather" width="100" height="100" />
      </div>
    )
  }
  else {
    return (
      <div>
        Loading weather data...
      </div>
    )
  }
}

export default Weather