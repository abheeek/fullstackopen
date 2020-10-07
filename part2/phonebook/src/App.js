import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Phonebook from './components/Phonebook'
import Search from './components/Search'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log(response)
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    setSearchName(event.target.value)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    let names = persons.map((person) => person.name)

    if (names.includes(newName)) {
      alert(`${newName} is already added to phonebook`)
    }
    else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      setPersons(persons.concat(newPerson))
    }
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = () => {
    return persons.filter((person) => 
                      person.name.toLowerCase().includes(searchName.toLowerCase()))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search searchName={searchName} handleSearchChange={handleSearchChange} />
      <h2>add a new</h2>
      <Form 
        addNewPerson={addNewPerson}
        newName={newName} handleNameChange={handleNameChange} 
        newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Phonebook persons={filteredPersons()} />
    </div>
  )
}

export default App
