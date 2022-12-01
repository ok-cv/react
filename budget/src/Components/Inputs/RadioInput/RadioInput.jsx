import React from 'react'

const RadioInput = ({ value, onChange, label, name }) => {
  const handleChange = (e) => onChange(name, e.currentTarget.checked)

  return (
    <label className="form-check">
      <input className="form-check-input" checked={value} onChange={handleChange} type="radio" />
      <span className="form-check-label">{label}</span>
    </label>
  )
}

export default RadioInput
