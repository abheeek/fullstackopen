import React from 'react'

const CountryList = ({ country, handleShowCountry }) => {
  return (
    <div>
      <li>
        {country.name}
        <button onClick={() => handleShowCountry(country)}>show</button>
      </li> 
    </div>
  )
}

export default CountryList