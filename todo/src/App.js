import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import { HomePage, InputPage, StackPage } from 'Pages'
import { Tabs } from 'Components'

const App = () => {
  return (
    <Router>
      <Tabs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="input" element={<InputPage />} />
        <Route path="stack" element={<StackPage />} />
      </Routes>
    </Router>
  )
}

export default App
