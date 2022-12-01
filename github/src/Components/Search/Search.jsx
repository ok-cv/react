import React, { useEffect, useState } from 'react'

import { TextInput } from 'Components'

const Search = ({ getUsers, clearUsers, showClear }) => {
  const [input, setInput] = useState({ query: 'solidjs' })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.query !== '') {
      getUsers(input.query)
    } else {
      alert('Input is empty')
    }
  }

  const handleChange = (name, value) => setInput({ [name]: value })

  const handleClear = () => {
    setInput({ query: '' })

    clearUsers()
  }

  useEffect(() => {
    getUsers('solidjs')
  }, [])

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg">
          <TextInput
            value={input.query}
            onChange={(name, value) => handleChange(name, value)}
            label="Username"
            name="query"
          />
        </div>
        <div className="col-12 col-lg-auto">
          <button className="btn btn-block btn-primary">Fetch Users</button>
        </div>
        {
          showClear
          ? (
            <div className="col-12 col-lg-auto">
              <button onClick={handleClear} className="btn btn-block btn-secondary">Clear Users</button>
            </div>
          )
          : null
        }
      </div>
    </form>
  )
}

export default Search
