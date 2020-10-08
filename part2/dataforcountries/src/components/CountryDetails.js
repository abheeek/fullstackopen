import React from 'react'

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name}</h2>
      capital: {country.capital}<br/>
      population: {country.population}
      <h3>languages</h3>
      <ul>
        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
      </ul>
      <img src={country.flag} alt="country flag" width="100" height="100" />
    </div>
  )
}

export default CountryDetails