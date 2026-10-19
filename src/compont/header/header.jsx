
import { useState } from "react";
import { Menu, X, GraduationCap, UserRound, School } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { logo } from "../../assets/image/image.js";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [mobileSignInOpen, setMobileSignInOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileSignInOpen(false);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setSignInOpen(false);
    setMobileSignInOpen(false);
  };

  const SignInOptions = ({ onSelect }) => (
    <div className="signin-dropdown">
      <a href="/student/login" className="signin-option" onClick={onSelect}>
        <span className="signin-icon student-icon">
          <GraduationCap size={20} />
        </span>
        <span className="signin-option-text">
          <strong>Student</strong>
          <small>Live classes &amp; practice</small>
        </span>
      </a>

      <a href="/teacher/login" className="signin-option" onClick={onSelect}>
        <span className="signin-icon teacher-icon">
          <UserRound size={20} />
        </span>
        <span className="signin-option-text">
          <strong>Teacher</strong>
          <small>Teach and manage sessions</small>
        </span>
      </a>

      <a href="/institute/login" className="signin-option" onClick={onSelect}>
        <span className="signin-icon institute-icon">
          <School size={20} />
        </span>
        <span className="signin-option-text">
          <strong>Institute</strong>
          <small>Administrative portal</small>
        </span>
      </a>
    </div>
  );

  return (
    <header className="header">
      <div className="header-inner">
        {/* LOGO */}
        <a href="/" className="logo" onClick={closeAll}>
          <div className="logo-icon">
            <img src={logo} alt="LiveMentorHub logo" />
          </div>

          <div className="logo-text">
            <div className="brand-name">LiveMentorHub</div>
            <div className="tagline">LEARN. CONNECT. GROW.</div>
          </div>
        </a>

        {/* NAVIGATION + MOBILE BUTTONS */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a
            href="#how-it-works"
            className={window.location.hash === "#how-it-works" ? "active" : ""}
            onClick={closeMenu}
          >
            How It Works
          </a>

          <a
            href="#learning"
            className={window.location.hash === "#learning" ? "active" : ""}
            onClick={closeMenu}
          >
            Learning
          </a>

          <a
            href="#teachers"
            className={window.location.hash === "#teachers" ? "active" : ""}
            onClick={closeMenu}
          >
            Teachers
          </a>

          <a
            href="#schools"
            className={window.location.hash === "#schools" ? "active" : ""}
            onClick={closeMenu}
          >
            For Schools
          </a>

          <a
            href="#resources"
            className={window.location.hash === "#resources" ? "active" : ""}
            onClick={closeMenu}
          >
            Resources
          </a>

          <a
            href="#about"
            className={window.location.hash === "#about" ? "active" : ""}
            onClick={closeMenu}
          >
            About Us
          </a>

          {/* MOBILE SIGN IN + GET STARTED */}
          <div className="mobile-nav-actions">
            <div className="signin-menu mobile-signin-menu">
              <button
                type="button"
                className="signin-btn"
                aria-expanded={mobileSignInOpen}
                onClick={() => setMobileSignInOpen(!mobileSignInOpen)}
              >
                <span>Sign in</span>
                <span className="chevron">
                  {mobileSignInOpen ? "⌃" : "⌄"}
                </span>
              </button>

              {mobileSignInOpen && (
                <SignInOptions onSelect={closeAll} />
              )}
            </div>

            <button
              type="button"
              className="get-started"
              onClick={() => {
                closeAll();
                window.location.hash = "#get-started";
              }}
            >
              <span>Get Started</span>
              <span className="arrow">→</span>
            </button>
          </div>
        </nav>

        {/* DESKTOP BUTTONS */}
        <div className="header-actions">
          <div className="signin-menu desktop-signin-menu">
            <button
              type="button"
              className="signin-btn"
              aria-expanded={signInOpen}
              onClick={() => setSignInOpen(!signInOpen)}
            >
              <span>Sign in</span>
              <span className="chevron">
                {signInOpen ? "⌃" : <ChevronDown size={16} />}
              </span>
            </button>

            {signInOpen && (
              <SignInOptions onSelect={closeAll} />
            )}
          </div>

          <button
            type="button"
            className="get-started"
            onClick={() => {
              closeAll();
              window.location.hash = "#get-started";
            }}
          >
            <span>Get Started</span>
            <span className="arrow">→</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu-btn"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setMobileSignInOpen(false);
          }}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
