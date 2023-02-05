import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home';
import About from './pages/about/About';

import './css/style.css';

function App() {

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App
