import React from 'react'

const Display = (props) => {

  let numberOfCountries = props.countries.length

  if (numberOfCountries > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  }
  else if (numberOfCountries === 1){
    return (
      <div>
        <h2>{props.countries[0].name}</h2>
        capital: {props.countries[0].capital}<br/>
        population: {props.countries[0].population}
        <h3>languages</h3>
        <ul>
          {props.countries[0].languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <img src={props.countries[0].flag} alt="country flag" width="100" height="100" />
      </div>
    )
  }
  else {
    return (
      <div>
        <ul>
          {props.countries.map(country => <li key={country.numericCode}>{country.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default Display