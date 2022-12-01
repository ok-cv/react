import React from 'react'

const StackPage = () => {
  const stack = ['React 18', 'Router 6']

  return (
    <div className="container w-300 py-5">
      <ul className="list-group">
        {
          stack.map((cur, i) => (
            <li className="list-group-item bg-light" key={i}>{cur}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default StackPage
