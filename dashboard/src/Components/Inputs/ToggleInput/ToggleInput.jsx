import React from 'react'

const ToggleInput = ({ value, onChange, label, name }) => {
  const handleChange = (e) => onChange(name, e.currentTarget.checked)

  return (
    <label className="form-check form-switch d-flex p-0">
      <input className="form-check-input order-2 mx-2" checked={value} onChange={handleChange} type="checkbox" />
      <span className="form-check-label order-1">{label[0]}</span>
      <span className="form-check-label order-3">{label[1]}</span>
    </label>
  )
}

export default ToggleInput
