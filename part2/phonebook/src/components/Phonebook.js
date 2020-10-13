import React from 'react'
import Contact from './Contact'

const Phonebook = ({ persons, handleDeleteClick }) => (
    <ul>
      {persons.map((person) => <Contact key={person.name} person={person} handleDeleteClick={handleDeleteClick} />)}
    </ul>
  )

export default Phonebook