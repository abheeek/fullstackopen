import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Form from './components/Form'
import Phonebook from './components/Phonebook'
import Search from './components/Search'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, setSearchName ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ messageType, setMessageType ] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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
    let index = persons.findIndex(person => person.name === newName)

    if (index > -1) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(persons[index], newNumber)
          .then(returnedPerson => {
            let newPersons = [...persons]
            newPersons[index] = {...returnedPerson}
            setPersons(newPersons)
            setMessage(`Updated ${newName}`)
            setMessageType('green')
            setTimeout(() =>{
              setMessage(null)
            }, 3000)
          })
          .catch(err =>{
            setMessage(`Information of ${newName} has already been removed from server`)
            setMessageType('red')
            setTimeout(() =>{
              setMessage(null)
            }, 3000)
          })
      }
    }
    else {
      const newPerson = {
        name: newName,
        number: newNumber,
      }
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setMessage(`Added ${newName}`)
          setMessageType('green')
          setTimeout(() =>{
              setMessage(null)
          }, 3000)
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = () => {
    return persons.filter((person) => 
                      person.name.toLowerCase().includes(searchName.toLowerCase()))
  }

  const removeItem = (array, item) => {
    let index = array.indexOf(item)
    if (index > -1){
      array.splice(index, 1)
    }
    return array
  } 

  const handleDeleteClick = person => {
    if (window.confirm(`Delete ${person.name}?`)){
      personService
        .remove(person)
        .then(() => {
          setPersons(removeItem([...persons], person))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} messageType={messageType} />
      <Search searchName={searchName} handleSearchChange={handleSearchChange} />
      <h2>add a new</h2>
      <Form 
        addNewPerson={addNewPerson}
        newName={newName} handleNameChange={handleNameChange} 
        newNumber={newNumber} handleNumberChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Phonebook persons={filteredPersons()} handleDeleteClick={handleDeleteClick} />
    </div>
  )
}

export default App
