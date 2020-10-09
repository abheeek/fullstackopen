import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Searchfield from './components/Searchfield'
import Display from './components/Display'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [showCountry, setShowCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearchCountry(event.target.value)
    setShowCountry('')
  }

  const handleShowCountry = (country) => {
    setShowCountry(country)
  }

  const filteredCountries = () => {
    if (showCountry === '') {
      return countries.filter((country) => country.name.toLowerCase()
                                        .includes(searchCountry.toLowerCase()))
    }
    else {
      return [showCountry]
    }
  }
  return (
    <div>
      <Searchfield searchCountry={searchCountry} handleSearchChange={handleSearchChange} />
      <Display countries={filteredCountries()} handleShowCountry={handleShowCountry} />
    </div>
  )
}

export default App;
