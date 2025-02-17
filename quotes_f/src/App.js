import './App.css';
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [quote, setQuote] = useState("The only limit to our realization of tomorrow is our doubts of today.")
  const [author, setAuthor] = useState('Franklin D. Roosevelt')

  function changeQuote(category){
    axios
      .get(
        `http://127.0.0.1:8000/api/quotes/${category}/`
      )
      .then((response) => {
        setQuote(response.data.text)
        setAuthor(response.data.author)
      })
  }

  function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }

    return (
    <>
      <nav className="navbar">
        <a href="#" className="logo">MyApp</a>
        <button className="menu-btn" onClick={toggleMenu}>☰</button>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="background-section">
        <div>
          <h1>Welcome to MyApp</h1>
          <p>Your inspiring tagline goes here.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <button className="refresh-button" onClick={() => changeQuote("motivation")}>Motivation Quote</button>
        <button className="refresh-button" onClick={()=>changeQuote("humor")}>Humor Quote</button>
        <button className="refresh-button" onClick={()=>changeQuote("movies")}>Movies Quote</button>
        <button className="refresh-button" onClick={()=>changeQuote("philosophy")}>Phisophy Quote</button>
        </div>

        {/* Quote Container */}
        <div className="quote-container">
          <blockquote>"{quote}"</blockquote>
          <p className="author">- {author}</p>
        </div>
      </div>
    </>
  );
}

export default App;
