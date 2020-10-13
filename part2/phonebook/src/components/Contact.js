import React from 'react'

const Contact = ({ person, handleDeleteClick }) => (
  <li>
    {person.name} {person.number}
    <button onClick={() => handleDeleteClick(person)}>delete</button>
  </li>
)

export default Contact