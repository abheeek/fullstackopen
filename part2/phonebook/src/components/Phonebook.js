import React from 'react'
import Contact from './Contact'

const Phonebook = ({ persons }) => (
    <ul>
      {persons.map((person) => <Contact key={person.name} person={person} />)}
    </ul>
  )

export default Phonebook