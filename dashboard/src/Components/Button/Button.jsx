import React from 'react'

const Button = ({ children, onClick, theme }) => {
  const isDanger = theme === 'danger' || theme === 'danger-disabled'

  return (
    <button onClick={onClick} className={`
      btn
      ${isDanger ? 'btn-danger' : ''}
    `}>
      {children}
    </button>
  )
}

export default Button
