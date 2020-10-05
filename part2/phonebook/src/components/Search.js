import React from 'react'

const Search = (props) => {
  return (
    <div>
      Search: <input value={props.searchName} onChange={props.handleSearchChange} />
    </div>
  )
}

export default Search