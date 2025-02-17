import React from 'react';

function About() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", color: "#333" }}>
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>About the Quote App</h1>
      
      <p style={{ fontSize: "1.2em", lineHeight: "1.6", textAlign: "justify", paddingLeft: "180px", paddingRight: "180px"}}>
        Welcome to the Quote App, where you can get daily doses of inspiration, laughter, and wisdom!
        Whether you're looking for motivational quotes to start your day, humor quotes to bring a smile to your face,
        movie quotes to feel nostalgic, or philosophical quotes to spark deep thought, we've got you covered.
      </p>
      
      <h2 style={{ fontSize: "1.5em", color: "#4CAF50" }}>Features:</h2>
      <ul style={{ listStyleType: "square", marginLeft: "20px", fontSize: "1.1em" }}>
        <li>Motivational Quotes to uplift and inspire.</li>
        <li>Humorous Quotes for a good laugh.</li>
        <li>Famous Movie Quotes to relive your favorite cinematic moments.</li>
        <li>Philosophical Quotes for deep reflection and thought.</li>
      </ul>
      
      <h2 style={{ fontSize: "1.5em", color: "#4CAF50" }}>Made By:</h2>
      <p style={{ fontSize: "1.2em", textAlign: "center", fontStyle: "italic" }}>
        This app was created with love and passion by <strong>Aviad, Michal</strong>, and<strong> Orian</strong>.
      </p>
      
      <footer style={{ textAlign: "center", marginTop: "30px", fontSize: "1em", color: "#777" }}>
        &copy; {new Date().getFullYear()} Quote App. All rights reserved.
      </footer>
    </div>
  );
}

export default About;
