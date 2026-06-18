function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">
        🎥 <span>Streamz</span>
      </div>

      <div className="nav-actions">

        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button className="icon-btn">🔔</button>

        <div className="avatar">
          A
        </div>

      </div>
    </nav>
  );
}

export default Navbar;