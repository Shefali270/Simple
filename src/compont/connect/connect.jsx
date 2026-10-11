
import "./connect.css";

function Connect() {
  return (
    <main className="connect-page">
      <section className="connect-section">
        <div className="connect-yellow-star">★</div>
        <div className="connect-blue-shape"></div>

        <div className="connect-container">
          <div className="connect-top">
            <h1>
              Learn. Connect. <span>Grow.</span>
            </h1>

            <button
              className="connect-get-started"
              onClick={() => {
                window.location.hash = "get-started";
              }}
            >
              Get Started <span>→</span>
            </button>
          </div>

          <div className="connect-divider"></div>

          <div className="connect-main">
            <div className="connect-brand">
              <div className="connect-logo">
                <div className="connect-logo-icon">🎓</div>
                <div className="connect-logo-text">
                  <strong>LiveMentorHub</strong>
                  <small>LEARN. CONNECT. GROW.</small>
                </div>
              </div>

              <p>
                An Indian education and mentorship platform
                established in 2026 with a simple belief:
                learning becomes more powerful when great
                content is combined with great guidance.
              </p>

              <div className="connect-newsletter">
                <h4>Latest courses, resources and updates.</h4>
                <div className="connect-subscribe">
                  <input type="email" placeholder="Your email" />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>

            <div className="connect-column">
              <h3>Platform</h3>
              <a href="#how-it-works">Home</a>
              <a href="#learning">Learning</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#teachers">Teachers</a>
              <a href="#schools">For Schools</a>
              <a href="#about">Why LiveMentorHub</a>
            </div>

            <div className="connect-column">
              <h3>Learning</h3>
              <a href="#learning">Academics</a>
              <a href="#live">Live Learning</a>
              <a href="#learning">Assignments</a>
              <a href="#learning">Skills &amp; Careers</a>
              <a href="#parent">Mentorship</a>
            </div>

            <div className="connect-column">
              <h3>Company</h3>
              <a href="#about">About Us</a>
              <a href="#about">Our Story</a>
              <a href="#resources">Learner Stories</a>
              <a href="#resources">Resources</a>
              <a href="#connect">Partner With Us</a>
              <a href="#connect">Contact</a>
            </div>

            <div className="connect-column connect-contact">
              <h3>Contact Us</h3>

              <div className="connect-contact-item">
                <span>📍</span>
                <p>Hyderabad, India</p>
              </div>

              <div className="connect-contact-item">
                <span>✉</span>
                <p>support@livementorhub.com</p>
              </div>

              <div className="connect-contact-item">
                <span>📞</span>
                <p>+91 80191 67891</p>
              </div>
            </div>
          </div>

          <div className="connect-bottom-divider"></div>

          <div className="connect-bottom">
            <p>© 2026 LiveMentorHub. All rights reserved.</p>

            <div className="connect-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Connect;