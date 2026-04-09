import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import './App.css'

const App = () => {
  return (
    <>

      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      <h1>React-Router</h1>

      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>


  )
}

export default App