import './App.css';

function App() {
  return (<>
  <nav class="navbar">
        <a href="#" class="logo">MyApp</a>
        <button class="menu-btn" onclick="toggleMenu()">☰</button>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <div class="background-section">
        <div>
            <h1>Welcome to MyApp</h1>
            <p>Your inspiring tagline goes here.</p>
        </div>
        {/* <!-- Quote Container --> */}
        <div class="quote-container">
            <blockquote>"The only limit to our realization of tomorrow is our doubts of today."</blockquote>
            <p class="author">- Franklin D. Roosevelt</p>
        </div>

        <script>
            function toggleMenu() {
                document.querySelector(".nav-links").classList.toggle("active")
            }
        </script>
</div>
  </>);
}

export default App;
