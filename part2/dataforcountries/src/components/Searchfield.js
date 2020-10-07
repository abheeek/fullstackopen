import React from 'react'

const Searchfield = (props) => {
  return (
    <div>
      find countries: <input value={props.searchCountry} onChange={props.handleSearchChange} />
    </div>
  )
}

export default Searchfield