import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}

const remove = person => {
  return axios.delete(`http://localhost:3001/persons/${person.id}`)
}

const update = (person, newNumber) => {
  const request = axios.put(`http://localhost:3001/persons/${person.id}`, {...person, number: newNumber})
  return request.then(response => response.data)
}

export default {getAll, create, remove, update}