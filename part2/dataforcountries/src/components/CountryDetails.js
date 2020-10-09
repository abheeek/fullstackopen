import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const CountryDetails = ({ country }) => {
  const [weatherInfo, setWeatherInfo] = useState(null)

  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: country.capital
    }
    axios
      .get('http://api.weatherstack.com/current', {params})
      .then(response => {
        setWeatherInfo(response.data)
      })
  }, [country.capital])

  return (
    <div>
      <h2>{country.name}</h2>
      capital: {country.capital}<br/>
      population: {country.population}
      <h3>languages</h3>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={country.flag} alt="country flag" width="150" height="150" />
      <h3>Weather in {country.capital}</h3>
      <Weather weatherInfo={weatherInfo} />
    </div>
  )
}

export default CountryDetails