
import "./Privacy.css";

function Privacy() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        {/* LEFT CONTENT */}
        <div className="privacy-content">
          <div className="privacy-badge">
            <span>★</span>
            Legal policy
          </div>

          <h1>Privacy Policy</h1>
        </div>

        {/* RIGHT IMAGE AND POLICY CARD */}
        <div className="privacy-visual">
          <div className="privacy-image">
            <img
              src="/privacy.jpg"
              alt="Privacy and data security"
            />
          </div>

          <div className="privacy-seal">✓</div>

          <div className="privacy-info-card">
            <div className="privacy-info-heading">
              <div className="privacy-lock">♙</div>

              <h2>Privacy Policy</h2>
            </div>

            <span className="privacy-status">
              Being finalised
            </span>

            <div className="privacy-lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>


<section className="privacy-finalised">
  <div className="privacy-finalised-icon">⚒</div>

  <h2>This policy is being finalised.</h2>

  <p>
    For any questions in the meantime, write to{" "}
    <a href="mailto:support@livementorhub.com">
      support@livementorhub.com
    </a>
  </p>
</section>

{/* Footer */}
<footer className="privacy-footer">
  <div className="privacy-footer-inner">
    <div className="privacy-footer-brand">
      <h2>LiveMentorHub</h2>
      <p>Learn. Connect. Grow.</p>
    </div>

    <div className="privacy-footer-links">
      <a href="#about">About Us</a>
      <a href="#resources">Resources</a>
      <a href="#contact">Contact</a>
      <a href="#privacy">Privacy Policy</a>
    </div>

    <p className="privacy-copyright">
      © 2026 LiveMentorHub. All rights reserved.
    </p>
  </div>
</footer>


    </main>
  );
}

export default Privacy;
