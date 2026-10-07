import "./content.css";

function Content() {
  return (
    <main className="content-page">

      {/* ================================
          CONTENT / FOOTER HERO
      ================================= */}

      <section className="content-section">

        {/* Yellow Star */}
        <div className="content-yellow-star">
          ★
        </div>

        {/* Blue Bottom Shape */}
        <div className="content-blue-shape"></div>

        <div className="content-container">

          {/* ================================
              TOP HEADING
          ================================= */}

          <div className="content-top">

            <h1>
              Learn. Connect. <span>Grow.</span>
            </h1>

            <button className="content-get-started">
              Get Started
              <span>→</span>
            </button>

          </div>


          {/* Divider */}

          <div className="content-divider"></div>


          {/* ================================
              MAIN FOOTER CONTENT
          ================================= */}

          <div className="content-main">

            {/* ================================
                BRAND
            ================================= */}

            <div className="content-brand">

              <div className="content-logo">
                <div className="content-logo-icon">
                  🎓
                </div>

                <div className="content-logo-text">
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


              {/* Newsletter */}

              <div className="content-newsletter">

                <h4>
                  Latest courses, resources and updates.
                </h4>

                <div className="content-subscribe">

                  <input
                    type="email"
                    placeholder="Your email"
                  />

                  <button>
                    Subscribe
                  </button>

                </div>

              </div>

            </div>


            {/* ================================
                PLATFORM
            ================================= */}

            <div className="content-column">

              <h3>Platform</h3>

              <a href="#">Home</a>
              <a href="#">Learning</a>
              <a href="#">How It Works</a>
              <a href="#">Teachers</a>
              <a href="#">For Schools</a>
              <a href="#">Why LiveMentorHub</a>

            </div>


            {/* ================================
                LEARNING
            ================================= */}

            <div className="content-column">

              <h3>Learning</h3>

              <a href="#">Academics</a>
              <a href="#">Live Learning</a>
              <a href="#">Assignments</a>
              <a href="#">Skills & Careers</a>
              <a href="#">Mentorship</a>

            </div>


            {/* ================================
                COMPANY
            ================================= */}

            <div className="content-column">

              <h3>Company</h3>

              <a href="#">About Us</a>
              <a href="#">Our Story</a>
              <a href="#">Learner Stories</a>
              <a href="#">Resources</a>
              <a href="#">Partner With Us</a>
              <a href="#">Contact</a>

            </div>


            {/* ================================
                CONTACT
            ================================= */}

            <div className="content-column content-contact">

              <h3>Contact Us</h3>

              <div className="contact-item">
                <span>📍</span>
                <p>Hyderabad, India</p>
              </div>

              <div className="contact-item">
                <span>✉</span>
                <p>support@livementorhub.com</p>
              </div>

              <div className="contact-item">
                <span>📞</span>
                <p>+91 80191 67891</p>
              </div>

            </div>

          </div>


          {/* ================================
              BOTTOM DIVIDER
          ================================= */}

          <div className="content-bottom-divider"></div>


          {/* ================================
              COPYRIGHT
          ================================= */}

          <div className="content-bottom">

            <p>
              © 2026 LiveMentorHub. All rights reserved.
            </p>

            <div className="content-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Conditions</a>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Content;