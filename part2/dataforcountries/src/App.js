import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchfield from './components/Searchfield';
import Display from './components/Display';

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value)
  }

  const filteredCountries = (event) => {
    return countries.filter((country) => country.name.toLowerCase()
                                        .includes(searchCountry.toLowerCase()))
  }

  return (
    <div>
      <Searchfield searchCountry={searchCountry} handleSearchChange={handleSearchChange} />
      <Display countries={filteredCountries()} />
    </div>
  )
}

export default App;
