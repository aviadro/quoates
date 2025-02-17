import './App.css';
import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom'
import Main from './components/Main';
import About from './components/About';

function App() {


  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }
    return (
    <>
      <BrowserRouter>
     
      <nav className="navbar">
        <a href="#" className="logo">MyApp</a>
        <button className="menu-btn" onClick={toggleMenu}>☰</button>
        <ul className="nav-links">
          <li><Link to="/">
                Home
              </Link></li>
          <li><Link to="/about">About</Link></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="background-section">
        <div>
          <h1>Welcome to MyApp</h1>
          <p>Your inspiring tagline goes here.</p>
        </div>
        <Routes>

        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />

        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
