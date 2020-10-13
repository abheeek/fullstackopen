import React from 'react'

const Notification = ({ message, messageType }) => {
  const messageStyle = {
    color: messageType,
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  if (message) {
    return (
      <div style={messageStyle}>
      	{message}
      </div>
    )
  }
  else {
    return null
  }
}

export default Notification