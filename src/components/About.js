import React from 'react'

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About the Quote App</h1>

      <p className="about-text">
        Welcome to the Quote App, where you can get daily doses of inspiration,
        laughter, and wisdom! Whether you're looking for motivational quotes to
        start your day, humor quotes to bring a smile to your face, movie quotes
        to feel nostalgic, or philosophical quotes to spark deep thought, we've
        got you covered.
      </p>

      <h2 className="about-subtitle">Features:</h2>
      <ul className="about-list">
        <li>Motivational Quotes to uplift and inspire.</li>
        <li>Humorous Quotes for a good laugh.</li>
        <li>Famous Movie Quotes to relive your favorite cinematic moments.</li>
        <li>Philosophical Quotes for deep reflection and thought.</li>
      </ul>

      <h2 className="about-subtitle">Made By:</h2>
      <p className="about-credits">
        This app was created with love and passion by{' '}
        <strong>Aviad, Michal</strong>, and <strong>Orian</strong>.
      </p>

      <footer className="about-footer">
        &copy; {new Date().getFullYear()} Quote App. All rights reserved.
      </footer>
    </div>
  )
}

export default About
