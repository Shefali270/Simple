
import { logo } from "../../assets/image/image.js";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">

        {/* LOGO */}
        <a href="/" className="logo">
          <div className="logo-icon">
            <img src={logo} alt="logo" />
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

        {/* BUTTONS */}
        <div className="header-actions">

          <button
            className="signin-btn"
            onClick={() => {
              window.location.hash = "#signin";
            }}
          >
          <span> Sign in</span>  
          <span className="chevron">⌄</span>
          </button>

          <button
            className="get-started"
            onClick={() => {
              window.location.hash = "#get-started";
            }}
          >
            <span>Get Started</span>
            <span className="arrow">→</span>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;
