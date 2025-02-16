import './App.css';
import { useState } from 'react'

function App() {
  const [quote, setQuote] = useState("The only limit to our realization of tomorrow is our doubts of today.")
  const [author, setAuthor] = useState('Franklin D. Roosevelt')

  function changeQuote(){
    
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
        <button onClick={changeQuote}>Change Quote</button>

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
