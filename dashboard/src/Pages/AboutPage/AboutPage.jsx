import React from 'react'

const AboutPage = () => {
  const stack = ['React 17', 'Router 5', 'Axios', 'Lodash', 'JSON Placeholder API']

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

export default AboutPage
