import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO */}
        <a href="/" className="logo">
          <div className="logo-icon">
            <span className="book book-blue"></span>
            <span className="book book-yellow"></span>
            <span className="star">✦</span>
          </div>

          <div className="logo-text">
            <div className="brand-name">LiveMentorHub</div>
            <div className="tagline">
              LEARN. CONNECT. GROW.
            </div>
          </div>
        </a>

        {/* NAVIGATION */}
        <nav className="nav">
          <a href="#how-it-works">How It Works</a>
          <a href="#learning">Learning</a>
          <a href="#teachers">Teachers</a>
          <a href="#schools">For Schools</a>
          <a href="#resources">Resources</a>
          <a href="#about">About Us</a>
       
        </nav>

        {/* ACTIONS */}
        <div className="header-actions">
          <button className="signin-btn">
            Sign in
            <span className="chevron">⌄</span>
          </button>

          <button className="get-started">
            <span>Get Started</span>
            <span className="arrow">→</span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;