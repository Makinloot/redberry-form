import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home'

import './css/style.css';

function App() {

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App
