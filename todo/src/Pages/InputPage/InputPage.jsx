import React, { useState } from 'react'

import {
  TextInput,
  PasswordInput,
  NumberInput,
  DateInput,
  SelectInput,
  CheckboxInput,
  RadioInput,
  ToggleInput,
  RangeInput
} from 'Components'

const InputPage = () => {
  const [inputs, setInputs] = useState({
    text: '',
    password: '',
    number: '',
    date: '',
    select: '',
    checkbox: false,
    radio: false,
    toggle: false,
    range: '1500'
  })

  const handleChange = (name, value) => setInputs({ ...inputs, [name]: value })

  return (
    <div className="container w-700 py-5">
      <div className="row gy-4 align-items-center">
        <div className="col-8">
          <TextInput
            value={inputs.text}
            onChange={(name, value) => handleChange(name, value)}
            label="Text"
            name="text"
          />
        </div>
        <div className="col-4"><pre>{inputs.text || '/'}</pre></div>
        <div className="col-8">
          <PasswordInput
            value={inputs.password}
            onChange={(name, value) => handleChange(name, value)}
            label="Password"
            name="password"
          />
        </div>
        <div className="col-4"><pre>{inputs.password || '/'}</pre></div>
        <div className="col-8">
          <NumberInput
            value={inputs.number}
            onChange={(name, value) => handleChange(name, value)}
            label="Number"
            name="number"
          />
        </div>
        <div className="col-4"><pre>{inputs.number || '/'}</pre></div>
        <div className="col-8">
          <DateInput
            value={inputs.date}
            onChange={(name, value) => handleChange(name, value)}
            label="Date"
            name="date"
          />
        </div>
        <div className="col-4"><pre>{inputs.date || '/'}</pre></div>
        <div className="col-8">
          <SelectInput
            value={inputs.select}
            onChange={(name, value) => handleChange(name, value)}
            items={['Please select', 'Value 1', 'Value 2', 'Value 3']}
            label="Select"
            name="select"
          />
        </div>
        <div className="col-4"><pre>{inputs.select || '/'}</pre></div>
        <div className="col-8">
          <CheckboxInput
            value={inputs.checkbox}
            onChange={(name, value) => handleChange(name, value)}
            label="Checkbox"
            name="checkbox"
          />
        </div>
        <div className="col-4"><pre>{inputs.checkbox.toString()}</pre></div>
        <div className="col-8">
          <RadioInput
            value={inputs.radio}
            onChange={(name, value) => handleChange(name, value)}
            label="Radio"
            name="radio"
          />
        </div>
        <div className="col-4"><pre>{inputs.radio.toString()}</pre></div>
        <div className="col-8">
          <ToggleInput
            value={inputs.toggle}
            onChange={(name, value) => handleChange(name, value)}
            label={['Left', 'Right']}
            name="toggle"
          />
        </div>
        <div className="col-4"><pre>{inputs.toggle.toString()}</pre></div>
        <div className="col-8">
          <RangeInput
            value={inputs.range}
            onChange={(name, value) => handleChange(name, value)}
            min="1000"
            max="2000"
            name="range"
          />
        </div>
        <div className="col-4"><pre>{inputs.range}</pre></div>
      </div>
    </div>
  )
}

export default InputPage
