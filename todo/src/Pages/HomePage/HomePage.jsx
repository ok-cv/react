import React, { useState } from 'react'

import { TextInput } from 'Components'

const DATA = [
  { todo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit', done: true },
  { todo: 'Item 2', done: true },
  { todo: 'Item 3' },
  { todo: 'Item 4' },
  { todo: 'Item 5' }
]

const HomePage = () => {
  const [input, setInput] = useState('')
  const [list, setList] = useState(DATA)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input !== '') {
      setList([...list, { todo: input }])

      setInput('')
    } else {
      alert('Input is empty')
    }
  }

  const handleChange = (_, value) => setInput(value)

  const toggleItem = (index) => {
    const newList = [...list]

    newList[index].done = !newList[index].done

    setList(newList)
  }

  const removeItem = (index) => {
    const newList = [...list]

    newList.splice(index, 1)

    setList(newList)
  }

  const clearList = () => setList([])

  return (
    <div className="container w-700 py-5">
      <form onSubmit={handleSubmit}>
        <TextInput
          value={input}
          onChange={(name, value) => handleChange(name, value)}
          label="Description"
          name="description"
        />
      </form>
      <table className="table table-striped mt-5 mb-0">
        <thead>
          <tr>
            <th>Done</th>
            <th>Todo</th>
            <th className="text-end">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item, index) => (
              <tr key={index} className={item.done ? 'done' : ''}>
                <td>
                  <div className="icon" onClick={() => toggleItem(index)}>
                    {
                      item.done
                      ? <i className="bi bi-check-circle-fill text-success"></i>
                      : <i className="bi bi-check-circle text-secondary"></i>
                    }
                  </div>
                </td>
                <td>
                  {item.todo}
                </td>
                <td className="text-end">
                  <div className="icon" onClick={() => removeItem(index)}>
                    <i className="bi bi-x text-secondary"></i>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {
        list.length !== 0
        ? <a className="btn btn-sm btn-secondary mt-5" onClick={clearList}>Clear List</a>
        : null
      }
    </div>
  )
}

export default HomePage
