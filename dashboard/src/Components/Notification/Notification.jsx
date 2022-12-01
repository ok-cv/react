import React from 'react'

const Notification = ({ text, type }) => (
  <div className={`alert alert-${type}`}>
    {text}
  </div>
)

export default Notification
