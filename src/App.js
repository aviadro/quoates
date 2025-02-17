import './App.css'
import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Main from './components/Main'
import About from './components/About'

function App() {
  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active')
  }
  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <a href="#" className="logo">
            Quotes app
          </a>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <div className="background-section">
          <div>
            <h1>Welcome to quotes App</h1>
            <h2>Get your quotes here</h2>
          </div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
