import React, { useEffect, useState } from 'react'

import { NumberInput, TextInput, ToggleInput } from 'Components'

const DATA = [
  { expense: false, description: 'Earnings', value: 15000 },
  { expense: false, description: 'Stocks', value: 8000 },
  { expense: false, description: 'Dividends', value: 2500 },
  { expense: true, description: 'Rent', value: 4100 },
  { expense: true, description: 'Vacation', value: 1100 },
  { expense: true, description: 'Culture', value: 700 },
  { expense: true, description: 'Food', value: 570.50 },
  { expense: true, description: 'Entertainment', value: 120 }
]

const HomePage = () => {
  const [incList, setIncList] = useState([])
  const [expList, setExpList] = useState([])
  const [input, setInput] = useState({ expense: false, description: 'Test Item', value: '150.75' })

  const calcIncSum = incList.map((cur) => cur.value).reduce((pre, cur) => pre + cur, 0)
  const calcExpSum = expList.map((cur) => cur.value).reduce((pre, cur) => pre + cur, 0)
  const calcTotSum = calcIncSum - calcExpSum

  const calcPercentages = (item) => {
    const sumToCalc = item.expense ? calcExpSum : calcIncSum

    return (100 / sumToCalc * item.value).toFixed(0) + '%'
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (input.description !== '' && input.value !== '') {
      addItem(input)
    }

    setInput({ ...input, description: 'Test Item', value: '150.75' })
  }

  const handleChange = (name, value) => setInput({ ...input, [name]: value })

  const addItem = (item) => {
    const value = Number(item.value)

    if (item.expense) {
      const tempList = [...expList]
      tempList.push({ expense: true, description: item.description, value: value })
      setExpList(tempList)
    } else {
      const tempList = [...incList]
      tempList.push({ expense: false, description: item.description, value: value })
      setIncList(tempList)
    }
  }

  const removeItem = (item, index) => {
    if (item.expense) {
      const tempList = [...expList]
      tempList.splice(index, 1)
      setExpList(tempList)
    } else {
      const tempList = [...incList]
      tempList.splice(index, 1)
      setIncList(tempList)
    }
  }

  const clearInc = () => setIncList([])
  const clearExp = () => setExpList([])

  useEffect(() => {
    const tempInc = []
    const tempExp = []

    for (const entry of DATA) entry.expense ? tempExp.push(entry) : tempInc.push(entry)

    setIncList(tempInc)
    setExpList(tempExp)
  }, [])

  const format = (value) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value)

  return (
    <div className="container w-900 py-5">
      <h1 className="display-6 text-center">{format(calcTotSum)}</h1>

      <form onSubmit={handleSubmit} className="my-5">
        <div className="row gy-3 align-items-center">
          <div className="col-12 col-md-auto">
            <ToggleInput
              value={input.expense}
              onChange={(name, value) => handleChange(name, value)}
              label={['Income', 'Expense']}
              name="expense"
            />
          </div>
          <div className="col-12 col-md">
            <TextInput
              value={input.description}
              onChange={(name, value) => handleChange(name, value)}
              label="Description"
              name="description"
            />
          </div>
          <div className="col-12 col-md">
            <NumberInput
              value={input.value}
              onChange={(name, value) => handleChange(name, value)}
              label="Amount"
              name="value"
            />
          </div>
          <div className="col-12 col-md">
            <button className={`btn btn-block ${input.expense ? 'btn-danger' : 'btn-success'}`} type="submit">
              {
                input.expense ? 'Add Expense' : 'Add Income'
              }
            </button>
          </div>
        </div>
      </form>

      <div className="row gy-5">
        <div className="col-12 col-lg-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: 300 }}>Income</th>
                <th></th>
                <th className="text-end">{format(calcIncSum)}</th>
                <th className="text-end">
                  <div className="icon" onClick={clearInc}>
                    <i className="bi bi-x text-secondary"></i>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                incList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.description}</td>
                    <td className="text-end">{calcPercentages(item)}</td>
                    <td className="text-end">{format(item.value)}</td>
                    <td className="text-end">
                      <div className="icon" onClick={() => removeItem(item, index)}>
                        <i className="bi bi-x text-secondary"></i>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <div className="col-12 col-lg-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: 300 }}>Expenses</th>
                <th></th>
                <th className="text-end">{format(calcExpSum)}</th>
                <th className="text-end">
                  <div className="icon" onClick={clearExp}>
                    <i className="bi bi-x text-secondary"></i>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                expList.map((item, index) => (
                  <tr key={index}>
                    <td>{item.description}</td>
                    <td className="text-end">{calcPercentages(item)}</td>
                    <td className="text-end">{format(item.value)}</td>
                    <td className="text-end">
                      <div className="icon" onClick={() => removeItem(item, index)}>
                        <i className="bi bi-x text-secondary"></i>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HomePage
