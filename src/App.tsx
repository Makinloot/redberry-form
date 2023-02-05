import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/home/Home';
import About from './pages/about/About';
import Experience from './pages/experience/Experience';

import './css/style.css';

function App() {

  return (
    <Router>
      <div className="App">

        <form action="#">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Experience />} />
          </Routes>
          {/* <input type="submit" value="submit" /> */}
        </form>

      </div>
    </Router>
  )
}

export default App
