import './Form.css'
import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  const [userName, setUserName] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.get(`https://api.github.com/users/${userName}`);
    props.changeList(response.data)
    console.log('response: ', response)
    console.log('userName: ', userName)
  }

  const handleOnChange = (data) => {
    setUserName(data.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Github username"
        value={userName}
        onChange={handleOnChange}
        required
      />
      <button>Add Card</button>
    </form>
  )
}

export default Form