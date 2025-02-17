import axios from 'axios'
import React, { useState } from 'react'

function Main() {
  const [quote, setQuote] = useState(
    'The only limit to our realization of tomorrow is our doubts of today.'
  )
  const [author, setAuthor] = useState('Franklin D. Roosevelt')

  function changeQuote(category) {
    axios
      .get(`http://127.0.0.1:8000/api/quotes/${category}/`)
      .then((response) => {
        setQuote(response.data.text)
        setAuthor(response.data.author)
      })
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button
          className="refresh-button"
          onClick={() => changeQuote('motivation')}
        >
          Motivation Quote
        </button>
        <button className="refresh-button" onClick={() => changeQuote('humor')}>
          Humor Quote
        </button>
        <button
          className="refresh-button"
          onClick={() => changeQuote('movies')}
        >
          Movies Quote
        </button>
        <button
          className="refresh-button"
          onClick={() => changeQuote('philosophy')}
        >
          Phisophy Quote
        </button>
      </div>

      {/* Quote Container */}
      <div className="quote-container">
        <blockquote>"{quote}"</blockquote>
        <p className="author">- {author}</p>
      </div>
    </>
  )
}

export default Main
