import React from 'react'
import CountryDetails from './CountryDetails'
import CountryList from './CountryList'

const Display = (props) => { 

  let numberOfCountries = props.countries.length

  if (numberOfCountries === 1){
    return (
      <CountryDetails country={props.countries[0]} />
    )
  }
  else if (numberOfCountries > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  else {
    return (
      <div>
        <ul>
          {props.countries.map(country => 
                                <CountryList 
                                  key={country.numericCode} 
                                  country={country} 
                                  handleShowCountry={props.handleShowCountry} />)}
        </ul>
      </div>
    )
  }
}

export default Display